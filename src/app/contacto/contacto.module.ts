 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './components/contacto.component';
import { SharedModule } from './../shared/shared.module';
import { ContactRoutingModule } from './contacto-routing.module';
@NgModule({
  declarations: [
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule {

}
 