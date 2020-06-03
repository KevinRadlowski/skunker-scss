// tslint:disable: component-class-suffix
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Membre } from 'src/app/core/modeles/membre';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MembreService } from '../../shared/services/membre.service';
import { ConfirmationDialogService } from 'src/app/shared/services/confirmation-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-membre-list-admin',
    templateUrl: './membre-list-admin.page.html',
    styleUrls: ['./membre-list-admin.page.scss']
})

export class MembreListAdminPage implements OnInit {
    displayedColumns: string[] = ['username', 'classe', 'race', 'role', 'modifier', 'supprimer'];
    membres;
    public array: any;
    public pageSize = 5;
    public currentPage = 0;
    public totalSize = 0;
    confirmResult = null;
    pageEvent;
    role;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private membreService: MembreService,
        private alertService: AlertService,
        private confirmationDialogService: ConfirmationDialogService,
    ) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {

        this.membreService.getMembreList().subscribe
            ((data: Membre[]) => {
                this.membres = new MatTableDataSource<Membre>(data);
                setTimeout(() => {
                    this.membres.paginator = this.paginator;
                    this.membres.sort = this.sort;
                });
                this.array = data;
                this.totalSize = this.membres.length;
                this.iterator();
            });
    }

    applyFilter(filterValue: string) {
        this.membres.filter = filterValue.trim().toLowerCase();
    }

    public handlePage(e: any) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }

    private iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(start, end);
        this.array = part;
    }

    public openDialog(i) {
        this.confirmationDialogService.confirm('Merci de confirmer.', 'Voulez-vous vraiment supprimer ce membre du roster ?')
            .then((confirmed) => {
                if (confirmed) {
                    this.deleteMembre(i);
                    this.alertService.success('Le membre a bien été supprimé.', true);
                    this.reloadData();
                }
            })
            .catch((error: HttpErrorResponse) => this.alertService.error('Le membre n\'a pas pu être supprimé.'));
    }

    deleteMembre(i) {
        this.membreService.deleteUser(i)
          .subscribe(
            data => {
              this.alertService.success('Le compte a bien été supprimé.', true);
            },
            error => console.log(error));
      }

}
