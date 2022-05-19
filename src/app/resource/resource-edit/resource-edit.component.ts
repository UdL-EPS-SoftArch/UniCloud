import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {UniResource} from '../uni-resource';
import {UniResourceService} from '../uni-resource.service';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.css']
})
export class ResourceEditComponent implements OnInit {
  public resource: UniResource = new UniResource();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private resourceService: UniResourceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.resourceService.getResource(id).subscribe(
      (resource: UniResource) => this.resource = resource );
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
    this.resourceService.patchResource(this.resource).subscribe(
      (patchedResource: UniResource) => {
        this.router.navigate(['resources', patchedResource.id]);
      });
  }

  getCurrentResourceId(): string {
    return this.resource.id;
  }

}
