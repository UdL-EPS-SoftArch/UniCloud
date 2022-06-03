import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html'
})
export class AdminListComponent implements OnInit {
  public admins: Admin[] = [];
  public pageSize = 5;
  public page = 1;
  public totalAdmins = 0;

  constructor(
    public router: Router,
    private adminService: AdminService,
    private userService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.getPage({ pageParams:  { size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Admin>) => {
        this.admins = page.resources;
        this.totalAdmins = page.totalElements;
      });
  }

  changePage(): void {
    this.adminService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Admin>) => this.admins = page.resources);
  }

  detail(admin: Admin): void {
    this.router.navigate(['admins', admin.id]);
  }
}
