import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fossil } from '../../interfaces/fossil';
import { FossilService } from '../../services/fossil/fossil.service';

@Component({
  selector: 'app-fossil-details',
  templateUrl: './fossil-details.component.html',
  styleUrls: ['./fossil-details.component.css']
})
export class FossilDetailsComponent implements OnInit {

  @Input() data: number;
  fossil: Fossil;

  constructor(
    public router: Router,
    private fossilService: FossilService
  ) {
  }

  ngOnInit(): void {
    this.fossilService.getFossil(this.data).subscribe(
      fossil => {
        this.fossil = {
          nameForSearch: fossil['file-name'],
          name: fossil.name['name-EUfr'],
          image: fossil.image_uri,
          price: fossil.price,
        };
      }
    );
  }
}
