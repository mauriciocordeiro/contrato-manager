import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { ContratoFormComponent } from './components/contrato-form/contrato-form.component';
import { ContaComponent } from './components/conta/conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContratoComponent } from './components/contrato/contrato.component';
import { HomeComponent } from './components/home/home.component';
import { ContratoServices } from './controllers/contrato.services';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material';
import { AditivoComponent } from './components/aditivo/aditivo.component';

@NgModule({
	declarations: [
		AppComponent,
		ContratoFormComponent,
		ContaComponent,
		ContratoComponent,
		HomeComponent,
		AditivoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		HttpClientModule,
		MatSortModule
	],
	providers: [
		ContratoServices,
		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
