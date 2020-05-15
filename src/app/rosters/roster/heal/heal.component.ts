import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  pretre?: Heal;
  chaman?: Heal;
  druide?: Heal;
  position: number;
}

export class Heal {
  nom: string;
  url: string;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {
  //   position: 1,
  //   pretre: { nom: 'Allen', url: '', grade: '' },
  //   chaman: { nom: 'Elpitcho', url: '', grade: '' },
  //   druide: { nom: 'Baakz', url: '', grade: '' }
  // },
  // {
  //   position: 2,
  //   pretre: { nom: 'Digitalova', url: '', grade: 'assets/img/skunk-green.png' },
  //   chaman: { nom: 'Lechatman', url: '', grade: 'assets/img/skunk-red.png' },
  //   druide: { nom: 'Chaoursporc', url: '', grade: '' }
  // },
  // {
  //   position: 3,
  //   pretre: { nom: 'Epipen', url: '', grade: '' },
  //   chaman: { nom: 'Westvlet', url: '', grade: '' },
  //   druide: { nom: 'Wiis', url: '', grade: '' }
  // },
  // {
  //   position: 4,
  //   pretre: { nom: 'Lucille', url: '', grade: '' },
  //   chaman: { nom: 'Zhayl', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 5,
  //   pretre: { nom: 'Monka', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 6,
  //   pretre: { nom: 'Pèreïdural', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 7,
  //   pretre: { nom: 'Shasdow', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 8,
  //   pretre: { nom: 'Taïra', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 9,
  //   pretre: { nom: 'Tomyx', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 10,
  //   pretre: { nom: 'Tomiche', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 11,
  //   pretre: { nom: 'Pow', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' },
  //   druide: { nom: '', url: '', grade: '' }
  // }
];

@Component({
  selector: 'app-heal',
  templateUrl: './heal.component.html',
  styleUrls: ['./heal.component.scss']
})
export class HealComponent implements OnInit {
  displayedColumns: string[] = ['position', 'pretre', 'chaman', 'druide'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
