import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {AdminService} from '../admin.service';
import {Admin} from '../admin';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html'
})

export class AdminRegisterComponent implements OnInit{
  public admin: Admin;

  constructor(private router: Router,
              private location: Location,
              private adminService: AdminService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.admin = new Admin();
  }

  onSubmit(): void {
    this.admin.username = this.admin.id;
    this.adminService.createResource({body: this.admin}).subscribe(
      () => {
        this.authenticationBasicService.login(this.admin.id, this.admin.password).subscribe(
          (admin: Admin) => this.router.navigate(['admin', admin.id]));
      });
  }

  onCancel(): void {
    this.location.back();
  }

}
