import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [
    BtnComponent,
    StateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StateDirective
  ]
})
export class SharedModule { }
