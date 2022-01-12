import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

// Containers
import { CoreWrapperComponent } from './containers';

// Components
import { IntervalSelectComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    CoreWrapperComponent,
    IntervalSelectComponent
  ]
})
export class CoreModule { }
