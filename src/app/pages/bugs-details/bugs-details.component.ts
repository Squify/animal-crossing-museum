import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bugs } from '../../interfaces/bugs';
import { BugsService } from '../../services/bugs/bugs.service';

@Component({
  selector: 'app-bugs-details',
  templateUrl: './bugs-details.component.html',
  styleUrls: ['./bugs-details.component.css']
})
export class BugsDetailsComponent implements OnInit {

  @Input() data: number;
  bugs: Bugs;

  constructor(
    public router: Router,
    private bugsService: BugsService
  ) {
  }

  ngOnInit(): void {
    this.bugsService.getBugs(this.data).subscribe(
      bugs => {
        this.bugs = {
          id: bugs['id'],
          name: bugs['name']['name-EUfr'],
          image: bugs['image_uri'],
          icon: bugs['icon_uri'],
          location: bugs["availability"]['location'],
          price: bugs['price'],
          rarity: bugs["availability"]['rarity'],
          months: bugs["availability"]['month-array-northern'],
          isPresentToday: this.checkIfIsPresentToday(bugs["availability"]['month-array-northern']),
        };

        this.bugs.months.sort((a, b) => a - b);
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
