import { MediaMatcher } from '@angular/cdk/layout';
import {
  Component,
  OnDestroy,
  inject,
  ChangeDetectionStrategy,
  signal,
  OnInit,
} from '@angular/core';
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
export default class CommonLayout implements OnInit, OnDestroy {
  readonly isMobile = signal(false);
  activePage = 'dashboard';

  private readonly _mobileQuery = inject(MediaMatcher).matchMedia('(max-width: 1024px)');
  private readonly _mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);

  constructor(private router: Router, private authService: AuthService) {
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    // this.activePage(this.router.url);
    this.setActivePage(this.router.url);
  }

  setActivePage(url: string) {
    if (url.startsWith('/policy-request')) {
      this.activePage = 'policy-request';
    } else if (url.startsWith('/policy')) {
      this.activePage = 'policy';
    } else if (url.startsWith('/admin-user')) {
      this.activePage = 'admin-user';
    } else if (url.startsWith('/masters')) {
      this.activePage = 'masters';
    } else if (url.startsWith('/invoices')) {
      this.activePage = 'invoices';
    } else if (url.startsWith('/claims')) {
      this.activePage = 'claims';
    } else if (url.startsWith('/reports-alerts')) {
      this.activePage = 'reports-alerts';
    } else {
      this.activePage = 'dashboard';
    }
  }

  onPanelOpened(panel: string) {
    const currentUrl = this.router.url;

    switch (panel) {
      case 'policy-request':
        if (!currentUrl.startsWith('/policy-request')) {
          this.router.navigate(['/policy-request/create-policy-request']);
        }
        break;

      case 'policy':
        if (!currentUrl.startsWith('/policy')) {
          this.router.navigate(['/policy/manage-policy']);
        }
        break;

      case 'admin-user':
        if (!currentUrl.startsWith('/admin-user')) {
          this.router.navigate(['/admin-user/code-master']);
        }
        break;

      case 'masters':
        if (!currentUrl.startsWith('/masters')) {
          this.router.navigate(['/masters/insurance-companies']);
        }
        break;

      case 'invoices':
        if (!currentUrl.startsWith('/invoices')) {
          this.router.navigate(['/invoices/policy-invoices']);
        }
        break;

      case 'claims':
        if (!currentUrl.startsWith('/claims')) {
          this.router.navigate(['/claims/raise-claim']);
        }
        break;

      case 'reports-alerts':
        if (!currentUrl.startsWith('/reports-alerts')) {
          this.router.navigate(['/reports-alerts/reports']);
        }
        break;
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
