import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Rating} from '../rating';
import {Router} from '@angular/router';
import {RatingService} from '../rating.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {UniResourceService} from '../../resource/uni-resource.service';
import {UniResource} from '../../resource/uni-resource';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';



@Component({
  selector: 'app-rating',
  templateUrl: './rating-create.component.html',
  styleUrls: ['./rating-create.component.css']
})
export class RatingCreateComponent implements OnInit{

  public rating: Rating;
  public resources: UniResource[] = [];
  public selectedResource: UniResource;
  constructor(private router: Router,
              private location: Location,
              private ratingService: RatingService,
              private resourceService: UniResourceService,
              private authenticationBasicService: AuthenticationBasicService) {}

  ngOnInit(): void{
    this.rating = new Rating();

    this.resourceService.getPage({pageParams: {size: 5 }, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<UniResource>) => {
        this.resources = page.resources;
        this.rating.resourceRated = this.resources[0];
        console.log(this.resources);
      });
  }

   onSubmit(): void {
    this.rating.author = this.authenticationBasicService.getCurrentUser();
    this.ratingService.createResource({ body: this.rating }).subscribe(() => this.router.navigate(['/ratings']));
  }

  onCancel(): void {
    this.location.back();
  }
}
