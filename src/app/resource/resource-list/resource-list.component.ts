import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PagedResourceCollection, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {UniResourceService} from '../uni-resource.service';
import {UniResource} from '../uni-resource';
import {User} from '../../login-basic/user';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  public resourcesPagedResource: PagedResourceCollection<UniResource>;
  public resources: UniResource[] = [];
  public pageSize = 2;
  public page = 1;
  public totalResources = 0;

  constructor(public router: Router,
              private resourceService: UniResourceService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.resourceService.getPage({pageParams: {size: this.pageSize }, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<UniResource>) => {
        this.resourcesPagedResource = page;
        this.resources = page.resources;
        this.totalResources = page.totalElements;
        this.resources.map(resource => {
          resource.getRelation('owner').subscribe((user: User) => {
            resource.owner = user;
          });
        });
      });
  }

  changePage(): void{
    this.resourcesPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize },  sort: {name: 'ASC'}}).subscribe
    ((page: PagedResourceCollection<UniResource>) =>
    { // this.universitiesPagedResource = page;
      this.resources = page.resources; });
    /*this.universityService.getPage( {pageParams: {page: this.page - 1, size: this.pageSize}, sort: {name: 'ASC'} }).subscribe(
      (page: PagedResourceCollection<University>) => this.universities = page.resources);*/
  }

  modifyList(resourcePagedResource: PagedResourceCollection<UniResource>): void{
    this.resourcesPagedResource = resourcePagedResource;
    this.resources = this.resourcesPagedResource.resources;
    this.totalResources = this.resourcesPagedResource.totalElements;
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

}
