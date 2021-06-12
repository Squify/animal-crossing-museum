import { Component, OnInit } from '@angular/core';
import { FishService } from '../../services/fish/fish.service';
import { Fish } from '../../interfaces/fish';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {
  fishList: Fish[] = [];
  fishWithUndefinedLocation: Fish[] = [];
  locationList: string[] = [];

  constructor(
    private fishService: FishService
  ) {
    this.getFishList();
  }

  ngOnInit(): void {
  }

  getFishList() {
    this.fishService.getFishList().subscribe(
      result => {

        Object.entries(result).forEach((fish) => {
          const fishToAdd: Fish = {
            id: fish[1]['id'],
            name: fish[1]['name']['name-EUfr'],
            image: fish[1]['image_uri'],
            icon: fish[1]['icon_uri'],
            location: fish[1]["availability"]['location'],
            price: fish[1]['price'],
            rarity: fish[1]["availability"]['rarity'],
            months: fish[1]["availability"]['month-array-northern'],
            isPresentToday: this.checkIfIsPresentToday(fish[1]["availability"]['month-array-northern']),
          };
          this.fishList.push(fishToAdd);
        });

        this.sortFishByPriceDecreasingAndAlphabeticalLocation();

        this.fishList.filter(fish => {
          if (this.locationList.indexOf(fish.location) === -1) {
            if (fish.location !== '') {
              this.locationList.push(fish.location);
            }
          }
        });

        this.fishList.filter(fish => {
          if (fish.location === '') {
            this.fishWithUndefinedLocation.push(fish);
          }
        });
      });
  }

  sortFishByPriceDecreasingAndAlphabeticalLocation(): void {
    this.fishList.sort((a, b) => b.price - a.price);
    this.fishList.sort((a, b) => a.location.localeCompare(b.location));
  }

  checkIfIsPresentToday(monthArray: number[]): boolean {
    const today = new Date();
    if (monthArray.indexOf(today.getMonth() + 1) === -1) {
      return true;
    }
  }
}
