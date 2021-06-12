import { Component, OnInit } from '@angular/core';
import { Fossil } from '../../interfaces/fossil';
import { FossilService } from '../../services/fossil/fossil.service';

@Component({
  selector: 'app-fossil-list',
  templateUrl: './fossil-list.component.html',
  styleUrls: ['./fossil-list.component.css']
})
export class FossilListComponent implements OnInit {

  fossilList: Fossil[] = [];

  constructor(private fossilService: FossilService) {
    this.getFossilList();
  }

  ngOnInit(): void {
  }

  getFossilList() {
    this.fossilService.getFossilList().subscribe(
      result => {

        Object.entries(result).forEach((fossil) => {
          const fossilToAdd: Fossil = {
            nameForSearch: fossil[1]['file-name'],
            name: fossil[1]['name']['name-EUfr'],
            image: fossil[1]['image_uri'],
            price: fossil[1]['price'],
          };
          this.fossilList.push(fossilToAdd);
        });

        this.fossilList.sort((a, b) => b.price - a.price);
      });
  }
}
