import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Component that loads icons from public folder.
 * @see https://heroicons.com
 * @see https://github.com/tailwindlabs/heroicons/tree/master/src/24/outline
 * */
@Component({
  selector: 'web-icon',
  standalone: true,
  imports: [NgOptimizedImage],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: ` <img
    [alt]="icon()"
    [ngSrc]="'/img/icons/' + icon() + '.svg'"
    height="24"
    width="24" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly icon = input.required();
}
