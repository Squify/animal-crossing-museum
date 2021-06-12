import { Component, OnInit } from '@angular/core';
import { Art } from '../../interfaces/art';
import { ArtService } from '../../services/art/art.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {

  artList: Art[] = [];

  constructor(private artService: ArtService) {
    this.getArtList();
  }

  ngOnInit(): void {
  }

  getArtList() {
    this.artService.getArtList().subscribe(
      result => {

        Object.entries(result).forEach((art) => {
          const artToAdd: Art = {
            id: art[1]['id'],
            name: art[1]['name']['name-EUfr'],
            image: art[1]['image_uri'],
            price: art[1]['buy-price'],
            sellPrice: art[1]['sell-price'],
            hasFake: art[1]['hasFake'],
          };
          this.artList.push(artToAdd);
        });

        this.artList.sort((a, b) => a.name.localeCompare(b.name));
      });
  }

}
