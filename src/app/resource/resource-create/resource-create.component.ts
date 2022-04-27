import { Component, OnInit } from '@angular/core';
import { UniResource } from '../uni-resource';

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.css']
})
export class ResourceCreateComponent implements OnInit {
  public resource: UniResource;

  constructor() { }

  ngOnInit(): void {
    this.resource = new UniResource();
  }

}
