import { Component, Input, OnInit } from '@angular/core';
import { Bugs } from '../../interfaces/bugs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BugsDetailsComponent } from '../../pages/bugs-details/bugs-details.component';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  @Input() bugs: Bugs;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(id) {
    const modalRef = this.modalService.open(BugsDetailsComponent);
    modalRef.componentInstance.data = id;
  }
}
