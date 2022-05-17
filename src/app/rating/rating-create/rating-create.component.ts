import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Rating} from '../rating';
import {Router} from '@angular/router';
import {RatingService} from '../rating.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';



@Component({
  selector: 'app-rating',
  templateUrl: './rating-create.component.html',
  styleUrls: ['./rating-create.component.css']
})
export class RatingCreateComponent implements OnInit{

  public rating: Rating;

  constructor(private router: Router,
              private location: Location,
              private ratingService: RatingService,
              private authenticationBasicService: AuthenticationBasicService) {}

  ngOnInit(): void{
    this.rating = new Rating();
  }

   onSubmit(): void {
    this.rating.author = this.authenticationBasicService.getCurrentUser();
    this.ratingService.createResource({ body: this.rating }).subscribe(() => this.router.navigate(['/ratings']));
  }

  onCancel(): void {
    this.location.back();
  }
}
