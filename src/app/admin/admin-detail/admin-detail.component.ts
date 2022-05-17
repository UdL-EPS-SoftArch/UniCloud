import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../admin.service';
import {Admin} from '../admin';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';





@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
})
export class AdminDetailComponent implements OnInit {
  public admin: Admin = new Admin();

  constructor(private route: ActivatedRoute,
              private adminService: AdminService,
              private authenticationService: AuthenticationBasicService) {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getResource(id).subscribe(
      admin => {
        this.admin = admin;
      });
  }

  getCurrentUser(): Admin {
    return this.authenticationService.getCurrentUser();
  }
}
