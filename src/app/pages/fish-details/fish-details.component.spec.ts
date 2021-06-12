import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishDetailsComponent } from './fish-details.component';

describe('FishDetailsComponent', () => {
  let component: FishDetailsComponent;
  let fixture: ComponentFixture<FishDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
