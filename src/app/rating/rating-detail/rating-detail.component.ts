import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Rating} from '../rating';
import {RatingService} from '../rating.service';

@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.css']
})
export class RatingDetailComponent implements OnInit {
  public rating: Rating = new Rating();

  constructor(private route: ActivatedRoute,
              private ratingService: RatingService,
              private authenticationService: AuthenticationBasicService){
  }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.ratingService..subscribe(
      // rating => {
        // this.rating = rating;
      // });
    return;
  }
  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
