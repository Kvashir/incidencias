import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { IndexFormComponent } from './components/index-form/index-form.component';
import { TecnicoRoutingModule } from './tecnico-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    IndexFormComponent
  ],
  imports: [
    CommonModule,
    TecnicoRoutingModule
  ]
})
export class TecnicoModule { }
