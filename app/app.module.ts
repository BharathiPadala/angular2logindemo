import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent }   from './app.component';
import { routingComponent } from './app.routing.module';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             AppRoutingModule
            ],
  declarations: [ AppComponent,routingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
