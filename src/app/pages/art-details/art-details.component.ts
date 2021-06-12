import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Art } from '../../interfaces/art';
import { ArtService } from '../../services/art/art.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent implements OnInit {

  @Input() data: number;
  art: Art;

  constructor(
    public router: Router,
    private artService: ArtService
  ) {
  }

  ngOnInit(): void {
    this.artService.getArt(this.data).subscribe(
      art => {
        this.art = {
          id: art['id'],
          name: art['name']['name-EUfr'],
          image: art['image_uri'],
          price: art['buy-price'],
          sellPrice: art['sell-price'],
          hasFake: art['hasFake'],
        };
      }
    );
  }
}
