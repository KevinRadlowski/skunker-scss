import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  voleur?: Dps;
  demoniste?: Dps;
  chasseur?: Dps;
  mage?: Dps;
  guerrier?: Dps;
  chaman?: Dps;
  position?: number;
}

export class Dps {
  nom: string;
  url: string;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {
  //   position: 1,
  //   voleur: { nom: 'Alastir', url: '', grade: 'assets/img/skunk-green.png' },
  //   demoniste: { nom: 'Arthésys', url: '', grade: 'assets/img/skunk-green.png' },
  //   chasseur: { nom: 'Kador', url: '', grade: '' },
  //   mage: { nom: 'Dudull', url: '', grade: '' },
  //   guerrier: { nom: 'Chmi', url: '', grade: '' },
  //   chaman: { nom: 'Cixiehell', url: '', grade: '' }
  // },
  // {
  //   position: 2,
  //   voleur: { nom: 'Antox', url: '', grade: '' },
  //   demoniste: { nom: 'Bhellzebuth', url: '', grade: '' },
  //   chasseur: { nom: 'Kyraa', url: '', grade: '' },
  //   mage: { nom: 'Glassvanilla', url: '', grade: '' },
  //   guerrier: { nom: 'Gargenor', url: '', grade: '' },
  //   chaman: { nom: 'Rockta', url: '', grade: '' }
  // },
  // {
  //   position: 3,
  //   voleur: { nom: 'Arren', url: '', grade: '' },
  //   demoniste: { nom: 'Coroskunk (reroll)', url: '', grade: 'assets/img/skunk-red.png' },
  //   chasseur: { nom: 'Lëvy', url: '', grade: '' },
  //   mage: { nom: 'Lethibs (RL)', url: '', grade: 'assets/img/skunk-green.png' },
  //   guerrier: { nom: 'Heitai', url: '', grade: 'assets/img/skunk-green.png' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 4,
  //   voleur: { nom: 'Beez', url: '', grade: '' },
  //   demoniste: { nom: 'Grocosto', url: '', grade: '' },
  //   chasseur: { nom: 'Lïzbeth', url: '', grade: '' },
  //   mage: { nom: 'Maìden', url: 'https://fr.classic.wowhead.com/gear-planner/mage/undead/AjwAAUISAi9HAy1oBTdIBkGiBzNyCC4uCUErCkGhC0rLDELWDTaQDjKCD0K2EEhmEkK1', grade: 'assets/img/skunk-green.png' },
  //   guerrier: { nom: 'Kourgett', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 5,
  //   voleur: { nom: 'Hozzi', url: '', grade: '' },
  //   demoniste: { nom: 'Hizo', url: '', grade: '' },
  //   chasseur: { nom: 'Pascy', url: '', grade: '' },
  //   mage: { nom: 'Negaan', url: '', grade: '' },
  //   guerrier: { nom: 'Morog', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 6,
  //   voleur: { nom: 'Jakeis', url: '', grade: '' },
  //   demoniste: { nom: 'Khaze', url: '', grade: '' },
  //   chasseur: { nom: 'Setja', url: '', grade: '' },
  //   mage: { nom: 'Oscourt', url: '', grade: '' },
  //   guerrier: { nom: 'Øzii', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 7,
  //   voleur: { nom: 'Légiøn', url: '', grade: '' },
  //   demoniste: { nom: 'Komtuve', url: '', grade: '' },
  //   chasseur: { nom: 'Thorzakh', url: '', grade: 'assets/img/skunk-green.png' },
  //   mage: { nom: 'Ozaïphe', url: '', grade: '' },
  //   guerrier: { nom: 'Shevrar', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 8,
  //   voleur: { nom: 'Oneshøt', url: '', grade: '' },
  //   demoniste: { nom: 'Krevet', url: '', grade: '' },
  //   chasseur: { nom: 'Ysondril', url: '', grade: '' },
  //   mage: { nom: 'Sorcia', url: '', grade: 'assets/img/skunk-green.png' },
  //   guerrier: { nom: 'Vintzgau', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 9,
  //   voleur: { nom: 'Öpinel', url: '', grade: 'assets/img/skunk-green.png' },
  //   demoniste: { nom: 'Magnifik', url: '', grade: '' },
  //   chasseur: { nom: '', url: '', grade: '' },
  //   mage: { nom: 'SX', url: '', grade: '' },
  //   guerrier: { nom: '', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 10,
  //   voleur: { nom: 'Psychøpique', url: '', grade: '' },
  //   demoniste: { nom: 'Malacrass', url: '', grade: '' },
  //   chasseur: { nom: '', url: '', grade: '' },
  //   mage: { nom: '', url: '', grade: '' },
  //   guerrier: { nom: '', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 11,
  //   voleur: { nom: 'Sgtpepper', url: '', grade: '' },
  //   demoniste: { nom: 'Ulghurs', url: '', grade: '' },
  //   chasseur: { nom: '', url: '', grade: '' },
  //   mage: { nom: '', url: '', grade: '' },
  //   guerrier: { nom: '', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 12,
  //   voleur: { nom: 'Slashweed', url: '', grade: '' },
  //   demoniste: { nom: '', url: '', grade: '' },
  //   chasseur: { nom: '', url: '', grade: '' },
  //   mage: { nom: '', url: '', grade: '' },
  //   guerrier: { nom: '', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // },
  // {
  //   position: 13,
  //   voleur: { nom: 'Tohni', url: '', grade: '' },
  //   demoniste: { nom: '', url: '', grade: '' },
  //   chasseur: { nom: '', url: '', grade: '' },
  //   mage: { nom: '', url: '', grade: '' },
  //   guerrier: { nom: '', url: '', grade: '' },
  //   chaman: { nom: '', url: '', grade: '' }
  // }
];

@Component({
  selector: 'app-dps',
  templateUrl: './dps.component.html',
  styleUrls: ['./dps.component.scss']
})
export class DpsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'voleur', 'demoniste', 'chasseur', 'mage', 'guerrier', 'chaman'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
