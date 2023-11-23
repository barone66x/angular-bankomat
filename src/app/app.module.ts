import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BancaComponent } from './banche/banche.component';
import { BancaDetailComponent } from './banca-detail/banca-detail.component';
import { UtentiComponent } from './utenti/utenti.component';

@NgModule({
  declarations: [
    AppComponent,
    BancaComponent,
    BancaDetailComponent,
    UtentiComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
