import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilDetailsComponent } from './fossil-details.component';

describe('FossilDetailsComponent', () => {
  let component: FossilDetailsComponent;
  let fixture: ComponentFixture<FossilDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FossilDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
