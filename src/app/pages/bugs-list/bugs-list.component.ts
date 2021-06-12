import { Component, OnInit } from '@angular/core';
import { Bugs } from '../../interfaces/bugs';
import { BugsService } from '../../services/bugs/bugs.service';

@Component({
  selector: 'app-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.css']
})
export class BugsListComponent implements OnInit {

  bugsList: Bugs[] = [];
  bugsWithUndefinedLocation: Bugs[] = [];
  locationList: string[] = [];

  constructor(
    private bugsService: BugsService,
  ) {
    this.getBugsList();
  }

  ngOnInit(): void {
  }

  getBugsList() {
    this.bugsService.getBugsList().subscribe(
      result => {

        Object.entries(result).forEach((bugs) => {
          const bugsToAdd: Bugs = {
            id: bugs[1]['id'],
            name: bugs[1]['name']['name-EUfr'],
            image: bugs[1]['image_uri'],
            icon: bugs[1]['icon_uri'],
            location: bugs[1]["availability"]['location'],
            price: bugs[1]['price'],
            rarity: bugs[1]["availability"]['rarity'],
            months: bugs[1]["availability"]['month-array-northern'],
            isPresentToday: this.checkIfIsPresentToday(bugs[1]["availability"]['month-array-northern']),
          };
          this.bugsList.push(bugsToAdd);
        });

        this.sortBugsByPriceDecreasingAndAlphabeticalLocation();

        this.bugsList.filter(bugs => {
          if (this.locationList.indexOf(bugs.location) === -1) {
            if (bugs.location !== '') {
              this.locationList.push(bugs.location);
            }
          }
        });

        this.bugsList.filter(bugs => {
          if (bugs.location === '') {
            this.bugsWithUndefinedLocation.push(bugs);
          }
        });
      });
  }

  sortBugsByPriceDecreasingAndAlphabeticalLocation(): void {
    this.bugsList.sort((a, b) => b.price - a.price);
    this.bugsList.sort((a, b) => a.location.localeCompare(b.location));
  }

  checkIfIsPresentToday(monthArray: number[]): boolean {
    const today = new Date();
    if (monthArray.indexOf(today.getMonth() + 1) === -1) {
      return true;
    }
  }
}
