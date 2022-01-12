import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreWrapperComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: CoreWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
