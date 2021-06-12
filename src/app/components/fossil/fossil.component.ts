import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fossil } from '../../interfaces/fossil';
import { FossilDetailsComponent } from '../../pages/fossil-details/fossil-details.component';

@Component({
  selector: 'app-fossil',
  templateUrl: './fossil.component.html',
  styleUrls: ['./fossil.component.css']
})
export class FossilComponent implements OnInit {
  @Input() fossil: Fossil;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(name) {
    const modalRef = this.modalService.open(FossilDetailsComponent);
    modalRef.componentInstance.data = name;
  }
}
