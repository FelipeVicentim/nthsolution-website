import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FormBudgetComponent } from './pages/form-budget/form-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
