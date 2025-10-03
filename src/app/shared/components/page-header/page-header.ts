import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { Router } from '@angular/router';

interface Breadcrumb {
  label: string;
  route?: string;
}

interface HeaderAction {
  key: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'page-header',
  imports: [MatIconButton],
  standalone: true,
  templateUrl: './page-header.html',
})
export class PageHeader {
  @Input() breadcrumbs: Breadcrumb[] = [];
  @Input() activePage: string = '';

  headerActions: HeaderAction[] = [
    { key: 'notifications', icon: '/img/icon/notification.svg', route: 'notifications' },
    { key: 'user', icon: '/img/icon/user.svg', route: 'user' },
  ];

  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
