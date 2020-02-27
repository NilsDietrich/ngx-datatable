import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleFullComponent } from './example-full/example-full.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'full'
      },
      {
        path: 'full',
        component: ExampleFullComponent,
      },
      {
        path: '**',
        redirectTo: 'basic'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
