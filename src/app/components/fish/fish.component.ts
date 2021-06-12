import { Component, Input, OnInit } from '@angular/core';
import { Fish } from '../../interfaces/fish';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FishDetailsComponent } from '../../pages/fish-details/fish-details.component';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  @Input() fish: Fish;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(id) {
    const modalRef = this.modalService.open(FishDetailsComponent);
    modalRef.componentInstance.data = id;
  }

}
