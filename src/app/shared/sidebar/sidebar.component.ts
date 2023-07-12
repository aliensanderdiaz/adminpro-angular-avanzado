import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public menu: any

  constructor(
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.menu = this.sidebarService.menu
  }
}
