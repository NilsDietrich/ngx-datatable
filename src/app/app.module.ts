import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxDatatableModule } from '../../projects/ngx-datatable-reboot/src/public-api';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ExampleFullComponent } from './example-full/example-full.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleFullComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
