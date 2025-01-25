import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './components/sidenav';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SidebarComponent, SidebarComponent, SidebarComponent],
})
export class AppComponent implements AfterViewInit {
  readonly themeService = inject(ThemeService);

  ngAfterViewInit(): void {
    this.themeService.initTheme();
  }
}
