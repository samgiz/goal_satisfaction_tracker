import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './components/goal/goal.component';
import { GoalSectionComponent } from './components/goal-section/goal-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
