import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { CarritoComponent } from './components/carrito/carrito.component';  
import { CarritoService } from './components/carrito/carrito.service';  

@NgModule({
  declarations: [
  
    CarritoComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [CarritoService],  
  
})
export class AppModule { }
