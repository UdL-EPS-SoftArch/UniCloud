import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RatingService} from '../rating.service';
import { Rating } from '../rating';
import {OperatorFunction} from 'rxjs';
import {PagedResourceCollection, ResourceCollection} from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-rating-search',
  templateUrl: './rating-search.component.html',
  styleUrls: ['./rating-search.component.css']
})
export class RatingSearchComponent {
  @Output() emitResults: EventEmitter<PagedResourceCollection<Rating>> = new EventEmitter();
  public ratingsPagedResource: PagedResourceCollection<Rating>;
  searchFailed = false;
  searching = false;
  @Input() pageSize: number;

  constructor(private ratingService: RatingService) { }

  write(target: EventTarget): void{
    const number = (target as HTMLTextAreaElement).value;
    const final_number = parseInt(number);
    this.ratingService.findByRatingGreaterThan(final_number)
        .subscribe((ratings: PagedResourceCollection<Rating>) => {
          this.ratingsPagedResource = ratings;
          this.emitResults.emit(this.ratingsPagedResource);
      });
  }
}
