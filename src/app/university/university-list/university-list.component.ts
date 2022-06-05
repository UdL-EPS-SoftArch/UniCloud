import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityService } from '../university.service';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {
  public universitiesPagedResource: PagedResourceCollection<University>;
  public universities: University[] = [];
  public pageSize = 5;
  public page = 1;
  public totalUniversities = 0;
  public searchedValue;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private universityService: UniversityService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.searchedValue = params.search;
      if (this.searchedValue == null || this.searchedValue === '') {
      this.universityService.getPage({pageParams: {size: this.pageSize }, sort: {name: 'ASC'}}).subscribe(
        (page: PagedResourceCollection<University>) => {
          this.universitiesPagedResource = page;
          this.universities = page.resources;
          this.totalUniversities = page.totalElements;
        });
      }else{
        // tslint:disable-next-line:max-line-length
        this.universityService.findByNameContainingOrAcronymContainingOrCountryContainingOrCityContaining(this.searchedValue, this.searchedValue, this.searchedValue, this.searchedValue, this.pageSize)
          .subscribe((page: PagedResourceCollection<University>) => {
          this.universitiesPagedResource = page;
          this.universities = page.resources;
          this.totalUniversities = page.totalElements;
        });
      }
    });
  }

  changePage(): void{
    this.universitiesPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize },  sort: {name: 'ASC'}}).subscribe
    ((page: PagedResourceCollection<University>) =>
    { this.universities = page.resources; });
  }

  modifyList(universityPagedResource: PagedResourceCollection<University>): void{
    this.universitiesPagedResource = universityPagedResource;
    this.universities = this.universitiesPagedResource.resources;
    this.totalUniversities = this.universitiesPagedResource.totalElements;
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
