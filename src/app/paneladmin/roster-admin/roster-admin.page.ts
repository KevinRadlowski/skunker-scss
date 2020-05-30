// tslint:disable: max-line-length
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert.service';
import { ConfirmationDialogService } from 'src/app/shared/confirmation-dialog.service';
import { RosterMembre } from '../models/Roster.model';
import { PanelAdminService } from '../services/paneladmin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    public transform(value, keys: string, term: string) {

        if (!term) return value;
        return (value || [])
            .filter(item => keys.split(',')
            .some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }
}

@Component({
    selector: 'app-roster-admin',
    templateUrl: './roster-admin.page.html',
    styleUrls: ['./roster-admin.page.scss'],
})
export class RosterAdminPage implements OnInit {
    public rosterMembreList: RosterMembre[];
    public tankMembers: RosterMembre[];
    public dpsMembers: RosterMembre[];
    public healMembers: RosterMembre[];
    public sendMemberId: Subject<number> = new Subject<number>();
    public query;

    constructor(
        private confirmationDialogService: ConfirmationDialogService,
        private panelAdminService: PanelAdminService,
        private alertService: AlertService,
    ) { }

    reloadData() {
        this.panelAdminService.getRosterMemberList().pipe(
            tap(
                (playerList: RosterMembre[]) => {
                    this.rosterMembreList = playerList.sort((a, b) => (a.pseudo < b.pseudo) ? -1 : (a.pseudo > b.pseudo) ? 1 : 0).sort((a, b) => (a.classe < b.classe) ? -1 : (a.classe > b.classe) ? 1 : 0);
                    this.tankMembers = playerList.filter(player => player.role === 'tank');
                    this.dpsMembers = playerList.sort().filter(player => player.role === 'dps');
                    this.healMembers = playerList.sort().filter(player => player.role === 'heal');
                },
                (error: HttpErrorResponse) => {
                    this.alertService.error('Impossible de récupérer les informations du roster.', true);
                }
            )
        ).subscribe();
    }

    ngOnInit() {
        this.reloadData();
    }

    newMembreAdded() {
        this.reloadData();
    }

    public openDialog(i) {
        this.confirmationDialogService.confirm('Merci de confirmer.', 'Voulez-vous vraiment supprimer ce membre du roster ?')
            .then((confirmed) => {
                if (confirmed) {
                    this.deleteRosterMembre(i);
                    this.alertService.success('Le membre a bien été supprimé.', true);
                    this.reloadData();
                }
            })
            .catch((error: HttpErrorResponse) => this.alertService.error('Le membre n\'a pas pu être supprimé.'));
    }

    updateMember(event: number) {
        this.sendMemberId.next(event);
    }

    deleteRosterMembre(i) {
        this.panelAdminService.deleteRosterMember(i)
            .subscribe((data) => {
            });
    }
}
