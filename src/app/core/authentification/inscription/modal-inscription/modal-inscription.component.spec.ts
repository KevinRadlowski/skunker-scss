import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInscriptionComponent } from './modal-inscription.component';

describe('ModalInscriptionComponent', () => {
  let component: ModalInscriptionComponent;
  let fixture: ComponentFixture<ModalInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
