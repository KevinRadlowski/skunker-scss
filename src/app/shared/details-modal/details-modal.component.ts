import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Membre } from 'src/app/paneladmin/models/Membre.model';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {
  @Input() membre: Membre;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  constructor(public activeModal: NgbActiveModal) { }



  patrons =  [
    {
      url: 'https://fr.classic.wowhead.com/item=18518/patron-peau-du-fauve',
      quality: 'q4',
      name: 'Patron : Peau du Fauve',
    },
    {
      url: 'https://fr.classic.wowhead.com/item=15772/patron-jambi%C3%A8res-diablosaures',
      quality: 'q3',
      name: 'Patron : Jambières diablosaures',
    },
    {
      url: 'https://fr.classic.wowhead.com/item=19332/patron-ceinture-du-magma',
      quality: 'q1',
      name: 'Patron : Ceinture du Magma',
    },
    {
      url: 'https://fr.classic.wowhead.com/item=22771/patron-casque-de-la-ronceraie',
      quality: 'q1',
      name: 'Patron : Casque de la ronceraie',
    },
    {
      url: '',
      quality: '',
      name: '',
    },
  ]

  ngOnInit() {

  }

}
