import { Component, Input, OnInit } from '@angular/core';
import { FishService } from '../../services/fish/fish.service';
import { Router } from '@angular/router';
import { Fish } from '../../interfaces/fish';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.component.html',
  styleUrls: ['./fish-details.component.css']
})
export class FishDetailsComponent implements OnInit {

  @Input() data: number;
  fish: Fish;

  constructor(
    public router: Router,
    private fishService: FishService
  ) {
  }

  ngOnInit(): void {
    this.fishService.getFish(this.data).subscribe(
      fish => {
        this.fish = {
          id: fish['id'],
          name: fish['name']['name-EUfr'],
          image: fish['image_uri'],
          icon: fish['icon_uri'],
          location: fish["availability"]['location'],
          price: fish['price'],
          rarity: fish["availability"]['rarity'],
          months: fish["availability"]['month-array-northern'],
          isPresentToday: this.checkIfIsPresentToday(fish["availability"]['month-array-northern']),
        };

        this.fish.months.sort((a, b) => a - b);
      }
    );
  }

  checkIfIsPresentToday(monthArray: number[]): boolean {
    const today = new Date();
    if (monthArray.indexOf(today.getMonth() + 1) === -1) {
      return true;
    }
  }
}
