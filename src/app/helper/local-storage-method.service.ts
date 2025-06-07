import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
export type LocalStorageMethodes =
  | 'setItem'
  | 'getItem'
  | 'check'
  | 'removeItem'
  | 'clear';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageMethodService {
  constructor() {}
  private readonly platformId = inject(PLATFORM_ID);
  myLocarStorage(
    method: LocalStorageMethodes,
    key: string = '',
    value: string = ''
  ) {
    if (isPlatformBrowser(this.platformId)) {
      switch (method) {
        case 'setItem':
          localStorage.setItem(key, value);
          break;
        case 'getItem':
          return localStorage.getItem(key);
        case 'check':
          return !!localStorage.getItem(key);
        case 'removeItem':
          localStorage.removeItem(key);
          break;
        case 'clear':
          localStorage.clear();
          break;
        default:
          return null;
      }
    }

    return;
  }
}
