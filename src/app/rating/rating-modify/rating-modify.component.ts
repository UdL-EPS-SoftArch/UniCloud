import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
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
              private ratingService: RatingService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ratingService.getResource(id).subscribe(
      (rating: Rating) => this.rating = rating );
  }

  onSubmit(): void {

  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
