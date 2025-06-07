import { Component, inject, PLATFORM_ID } from '@angular/core';
import { LocalStorageMethodService } from '../../helper/local-storage-method.service';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly _localStorageMethodService = inject(
    LocalStorageMethodService
  );
  private readonly platformId = inject(PLATFORM_ID);
  isDarkMode(): boolean {
    if (
      this._localStorageMethodService.myLocarStorage('getItem', 'theme') ==
        null ||
      this._localStorageMethodService.myLocarStorage('getItem', 'theme') ==
        'light'
    ) {
      return false;
    } else {
      return true;
    }
  }
  toggleDarkMode() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode()) {
        this._localStorageMethodService.myLocarStorage(
          'setItem',
          'theme',
          'light'
        );
        document.body.classList.remove('dark');
      } else {
        this._localStorageMethodService.myLocarStorage(
          'setItem',
          'theme',
          'dark'
        );
        document.body.classList.add('dark');
      }
    }
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode()) {
        document.body.classList.add('dark');
      }
    }
  }
}
