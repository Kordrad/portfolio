import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'web-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <web-analog-welcome /> `,
})
export default class HomeComponent {}
