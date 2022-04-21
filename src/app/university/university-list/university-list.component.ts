import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityService } from '../university.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {
  public universities: University[] = [];
  public pageSize = 5;
  public page = 1;
  public totalUniversities = 0;

  constructor(
    public router: Router,
    private universityService: UniversityService) { }

  ngOnInit(): void {
    this.universityService.getPage({pageParams: {size: this.pageSize }, sort: { name: 'ASC'} }).subscribe(
      (page: PagedResourceCollection<University>) => {
        this.universities = page.resources;
        this.totalUniversities = page.totalElements;
      });
  }

  changePage(): void{
    this.universityService.getPage( {pageParams: {page: this.page - 1, size: this.pageSize}, sort: {name: 'ASC'} }).subscribe(
      (page: PagedResourceCollection<University>) => this.universities = page.resources);
  }

  details(university: University): void {
    this.router.navigate(['universities', university.id]);
  }
}
