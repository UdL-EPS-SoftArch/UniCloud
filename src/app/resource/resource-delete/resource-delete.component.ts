import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {UniResource} from '../uni-resource';
import {UniResourceService} from '../uni-resource.service';

@Component({
  selector: 'app-resource-delete',
  templateUrl: './resource-delete.component.html',
  styleUrls: ['./resource-delete.component.css']
})
export class ResourceDeleteComponent implements OnInit {
  public resource: UniResource = new UniResource();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private resourceService: UniResourceService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resourceService.getResource(this.id).subscribe(
      resource => this.resource = resource);
  }

  delete(): void {
    this.resourceService.deleteResource(this.resource).subscribe(
      () => {
        this.router.navigate(['']);
      });
  }

}
