import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  initTheme(theme: Theme = this.detectTheme()) {
    this.document.body.setAttribute('data-theme', theme);
  }
  private detectTheme(): Theme {
    if (
      isPlatformBrowser(this.platformId) &&
      window?.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }

    return 'light';
  }
}
