import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInscriptionComponent } from './social-inscription.component';

describe('SocialInscriptionComponent', () => {
  let component: SocialInscriptionComponent;
  let fixture: ComponentFixture<SocialInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
