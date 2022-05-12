import { Component, OnInit } from '@angular/core';
import { UniResource } from '../uni-resource';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { Location } from '@angular/common';
import {UniResourceService} from '../uni-resource.service';

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.css']
})
export class ResourceCreateComponent implements OnInit {
  public resource: UniResource;

  constructor(private router: Router,
              private location: Location,
              private resourceService: UniResourceService) {
  }

  ngOnInit(): void {
    this.resource = new UniResource();
  }

  onSubmit(): void {
    this.resourceService.createResource({ body: this.resource }).subscribe(
      (resource: UniResource) => this.router.navigate(['resources', resource.id]));
  }

  onCancel(): void {
    this.location.back();
  }

}
