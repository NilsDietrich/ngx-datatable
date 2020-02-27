import { Component, ViewEncapsulation } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
    '../../projects/ngx-datatable-reboot/src/lib/themes/material.scss',
    '../../projects/ngx-datatable-reboot/src/lib/themes/dark.scss',
    '../../projects/ngx-datatable-reboot/src/lib/themes/bootstrap.scss'
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppComponent {
  state: any;

  version = '1.0.0';

  constructor(location: Location) {
    this.state = location.path(true);
  }
}
