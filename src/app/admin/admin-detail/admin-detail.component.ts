import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../admin.service';
import {Admin} from '../admin';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
})
export class AdminDetailComponent implements OnInit {
  public admin: Admin = new Admin();

  constructor(private route: ActivatedRoute,
              private adminService: AdminService,
              private location: Location,
              private authenticationService: AuthenticationBasicService) {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getResource(id).subscribe(
      admin => {
        this.admin = admin;
        console.log(admin.id);
        console.log(this.getCurrentUser().id);
      });
  }

  getCurrentUser(): Admin {
    return this.authenticationService.getCurrentUser();
  }
  goBack(): void {
    this.location.back();
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

}
