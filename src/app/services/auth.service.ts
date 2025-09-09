import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'token';

  // Simulate login by storing a dummy token
  login(): void {
    localStorage.setItem(this.TOKEN_KEY, 'dummy-token');
  }

  // Logout by clearing token
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
