import { NgModule } from '@angular/core';
import { TableModule } from './modules';

@NgModule({
  imports: [TableModule],
  exports: [TableModule]
})
export class SharedModule { }
