import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {UniResource} from '../uni-resource';
import {UniResourceService} from '../uni-resource.service';


@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  public resource: UniResource = new UniResource();

  constructor(private route: ActivatedRoute,
              private resourceService: UniResourceService,
              private authenticationService: AuthenticationBasicService){
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.resourceService.getResource(id).subscribe(
      resource => {
        this.resource = resource;
      });
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
