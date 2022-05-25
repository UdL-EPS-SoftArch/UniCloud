import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { RatingService } from '../rating.service';
import {Rating} from '../rating';


@Component({
  selector: 'app-rating-delete',
  templateUrl: './rating-delete.component.html'
})
export class RatingDeleteComponent implements OnInit {
  public rating: Rating = new Rating();
  private id: string;
  private ratingService: RatingService;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: RatingService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ratingService.getResource(this.id).subscribe(
      rating => this.rating = rating);
  }

  delete(): void {
    this.ratingService.deleteResource(this.rating).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }
}
