import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  rating = 0;
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter<number>();
  stars: boolean[] = [];
  @Input()
  readonly = true;

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.stars.push(false);
    }
  }

  ngOnInit() {
    this.freshStars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.freshStars();
  }

  clickStar($event, i) {
    if (!this.readonly) {
      this.rating = i + 1;
      this.ratingChange.emit(this.rating);
    }
  }

  private freshStars() {
      for (let i = 0; i < 5; i++) {
        this.stars[i] = i > this.rating - 1;
      }
  }
}
