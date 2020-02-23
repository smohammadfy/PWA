import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnterPageComponent} from '../enter-page/enter-page.component';

const routes: Routes = [
  {
    path: '',
    component: EnterPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
