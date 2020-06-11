import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Membre } from 'src/app/paneladmin/models/Membre.model';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {
  @Input() membre: Membre;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

}
