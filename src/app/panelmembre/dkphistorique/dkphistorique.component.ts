import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';

export interface PeriodicElement {
  pseudo: string;
  position: number;
  classe: string;
  totaldkp: number;
  highlighted?: boolean;
  hovered?: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, pseudo: 'Maìden', classe: 'Mage', totaldkp: 30 },
  { position: 2, pseudo: 'Lechatman', classe: 'Chaman', totaldkp: 60 },
  { position: 3, pseudo: 'Lethibs', classe: 'Mage', totaldkp: 60 },
  { position: 4, pseudo: 'Arthésys', classe: 'Démoniste', totaldkp: 35 },
  { position: 5, pseudo: 'Thorzakh', classe: 'Chasseur', totaldkp: 60 },
  { position: 6, pseudo: 'Sorcia', classe: 'Mage', totaldkp: 0 },
  { position: 7, pseudo: 'Opinel', classe: 'Voleur', totaldkp: 50 },
  { position: 8, pseudo: 'Vintzgau', classe: 'Guerrier', totaldkp: 60 },
  { position: 9, pseudo: 'Alastir', classe: 'Voleur', totaldkp: -200 },
  { position: 10, pseudo: 'Digitalova', classe: 'Prêtre', totaldkp: 200 },
];

@Component({
  selector: 'app-dkphistorique',
  templateUrl: './dkphistorique.component.html',
  styleUrls: ['./dkphistorique.component.scss']
})
export class DkphistoriqueComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'pseudo', 'classe', 'totaldkp'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  coloredRow: boolean[] = [];
  changeColor(index) {
    this.coloredRow[index] = !this.coloredRow[index];
    console.log(index);
  }

  highlight(element: PeriodicElement) {
    element.highlighted = !element.highlighted;
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
