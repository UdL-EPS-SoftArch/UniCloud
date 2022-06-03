import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {AdminService} from '../admin.service';
import {Admin} from '../admin';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
})
export class AdminEditComponent implements OnInit {
  public admin: Admin = new Admin();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private adminService: AdminService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getResource(id).subscribe(
      (admin: Admin) => this.admin = admin);
  }

  onSubmit(): void {
    this.admin.password = this.admin.passwordReset ? this.admin.password : undefined;
    this.adminService.patchResource(this.admin).subscribe(
      (patchedAdmin: Admin) => {
        if (this.admin.passwordReset){
          this.authenticationService.logout();
          this.authenticationService.login(this.admin.id, this.admin.password).subscribe(
            (admin: Admin) => this.router.navigate(['admin', admin.id]));
        } else {
          this.router.navigate(['admin', patchedAdmin.id]);
        }
      });
  }
  getCurrentUsername(): string {
    return this.authenticationService.getCurrentUser().id;
  }
  onCancel(): void {
    this.location.back();
  }
}
