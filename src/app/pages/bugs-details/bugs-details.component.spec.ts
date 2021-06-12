import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsDetailsComponent } from './bugs-details.component';

describe('BugsDetailsComponent', () => {
  let component: BugsDetailsComponent;
  let fixture: ComponentFixture<BugsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
