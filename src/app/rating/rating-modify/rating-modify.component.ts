import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RatingService } from '../rating.service';
import { Rating } from '../rating';


@Component({
  selector: 'app-rating-modify',
  templateUrl: './rating-modify.component.html',
  styleUrls: ['./rating-modify.component.css']
})
export class RatingModifyComponent implements OnInit {
  public rating: Rating = new Rating();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ratingService: RatingService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ratingService.getResource(id).subscribe(
      (rating: Rating) => this.rating = rating );
  }

  onSubmit(): void {
    this.ratingService.patchResource(this.rating).subscribe(
      (patchedRating: Rating) => {
        this.router.navigate(['ratings', patchedRating.id]);
      });
  }

  getCurrentRatingId(): string {
    return this.rating.id;
  }
}
