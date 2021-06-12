import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Art } from '../../interfaces/art';
import { ArtDetailsComponent } from '../../pages/art-details/art-details.component';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  @Input() art: Art;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(id) {
    const modalRef = this.modalService.open(ArtDetailsComponent);
    modalRef.componentInstance.data = id;
  }
}
