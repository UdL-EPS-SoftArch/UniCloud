import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';
import {Admin} from '../admin';
import { Sort } from '@lagoshny/ngx-hal-client';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
})
export class AdminListComponent implements OnInit {
  public admin: Admin[] = [];
  public pageSize = 5;
  public page = 1;
  public totalAdmin = 0;
  private sorting: Sort[] = [{ path: 'username', order: 'ASC'}];

  constructor(
   public router: Router,
   private adminService: AdminService) {
   }

  ngOnInit(): void {
    this.adminService.getAll({sort: this.sorting}).subscribe(
      (admin: Admin[]) => {
        this.admin = admin;
        this.totalAdmin = this.adminService.totalElement()});
  });
}

  changePage(): void {
    this.adminService.page(this.page - 1).subscribe(
      (admin: Admin[]) => this.admin = admin);
  }

  detail(admin: Admin): void {
    this.router.navigate(['admin', admin.id]);
  }
}
