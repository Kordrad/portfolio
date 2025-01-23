import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'web-avatar',
  standalone: true,
  template: `<img [alt]="alt()" [ngSrc]="src()" fill="" />`,
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class AvatarComponent {
  readonly src = input<string>('');
  readonly alt = input<string>('avatar');
}
