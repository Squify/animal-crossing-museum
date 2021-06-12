import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsListComponent } from './bugs-list.component';

describe('BugsComponent', () => {
  let component: BugsListComponent;
  let fixture: ComponentFixture<BugsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
