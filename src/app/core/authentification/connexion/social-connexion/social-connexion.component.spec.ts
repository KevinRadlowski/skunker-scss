import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialConnexionComponent } from './social-connexion.component';

describe('SocialConnexionComponent', () => {
  let component: SocialConnexionComponent;
  let fixture: ComponentFixture<SocialConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
