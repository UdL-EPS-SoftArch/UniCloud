import { Component, OnInit } from '@angular/core';
import { UniResource } from '../uni-resource';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {UniResourceService} from '../uni-resource.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.css']
})
export class ResourceCreateComponent implements OnInit {
  public resource: UniResource;

  constructor(private router: Router,
              private location: Location,
              private resourceService: UniResourceService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.resource = new UniResource();
  }

  addDataFile(event): void {
    const fileList: FileList = event.target.files;
    const FileToUpload: File = fileList[0];
    const reader = new FileReader();
    reader.readAsText(FileToUpload);
    reader.onloadend = (e) => {
      this.resource.file = reader.result;
    };
  }

  onSubmit(): void {
    this.resource.owner = this.authenticationBasicService.getCurrentUser();
    this.resourceService.createResource({ body: this.resource }).subscribe(
      (resource: UniResource) => this.router.navigate(['resources', resource.id]));
  }

  onCancel(): void {
    this.location.back();
  }

}
