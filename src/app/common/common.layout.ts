import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnDestroy, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.html',
  styleUrl: './common-layout.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    RouterOutlet,
    RouterModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommonLayout implements OnDestroy {
  readonly isMobile = signal(false);
  activePage = 'dashboard';

  private readonly _mobileQuery = inject(MediaMatcher).matchMedia('(max-width: 1024px)');
  private readonly _mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);

  constructor(private router: Router, private authService: AuthService) {
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  switchActivePage(page: string) {
    this.activePage = page;
    this.router.navigate([page]);
  }

  onPanelOpened(panel: string) {
    switch (panel) {
      case 'policy':
        this.router.navigate(['/policy/manage-policy']);
        break;

      case 'policy-request':
        this.router.navigate(['/policy-request/create-policy-request']);
        break;

      case 'admin-user':
        this.router.navigate(['/admin-user/code-master']);
        break;

      case 'masters':
        this.router.navigate(['/masters/code-master']);
        break;

      case 'invoices':
        this.router.navigate(['/invoices/policy-invoices']);
        break;

      case 'reports-alerts':
        this.router.navigate(['/reports-alerts/reports']);
        break;

      default:
        this.router.navigate(['/dashboard']);
    }
  }

  Logout() {
    this.authService.logout();
    this.activePage = 'dashboard';
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy() {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
