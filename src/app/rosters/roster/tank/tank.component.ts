import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  guerrier: Tank;
  druide: Tank;
  position: number;
}

export class Tank {
  nom: string;
  url: string;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {
  //   position: 1,
  //   guerrier: { nom: 'Iktae', url: '', grade: '' },
  //   druide: { nom: 'Emboucane', url: '', grade: '' }
  // },
  // {
  //   position: 2,
  //   guerrier: { nom: 'Lekitch', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 3,
  //   guerrier: { nom: 'Morcheeba', url: '', grade: 'assets/img/skunk-green.png' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 4,
  //   guerrier: { nom: 'Redburne', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 5,
  //   guerrier: { nom: 'Rushzen', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 6,
  //   guerrier: { nom: 'Tombert', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 7,
  //   guerrier: { nom: 'Zyphounet', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // }
];

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {
  displayedColumns: string[] = ['position', 'guerrier', 'druide'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
