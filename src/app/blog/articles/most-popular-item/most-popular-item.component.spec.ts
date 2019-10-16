import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularItemComponent } from './most-popular-item.component';

describe('MostPopularItemComponent', () => {
  let component: MostPopularItemComponent;
  let fixture: ComponentFixture<MostPopularItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
