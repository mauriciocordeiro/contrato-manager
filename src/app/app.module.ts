import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { ContratoFormComponent } from './components/contrato-form/contrato-form.component';
import { ContaComponent } from './components/conta/conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContratoComponent } from './components/contrato/contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    ContratoFormComponent,
    ContaComponent,
    ContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
