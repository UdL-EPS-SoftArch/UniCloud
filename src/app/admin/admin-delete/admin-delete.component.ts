import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {AdminService} from '../admin.service';
import {Admin} from '../admin';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
})
export class AdminDeleteComponent implements OnInit{

  public admin: Admin = new Admin();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private adminService: AdminService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.adminService.getResource(this.id).subscribe(
      admin => this.admin = admin);
  }
  delete(): void{
    this.adminService.deleteResource(this.admin).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });

  }
  onCancel(): void {
    this.location.back();
  }
}
