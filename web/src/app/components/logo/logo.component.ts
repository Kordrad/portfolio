import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { AvatarComponent } from '../../core/ui/avatar';

@Component({
  selector: 'web-logo',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <web-avatar [src]="src()" />
    @if (expanded()) {
      <div class="details">
        <h3 class="title">{{ title() }}</h3>
        <p class="subtitle">{{ subtitle() }}</p>
      </div>
    }
  `,
  styleUrls: [`logo.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly src = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly expanded = input<boolean>(false);
}
