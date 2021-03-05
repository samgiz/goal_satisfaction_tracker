import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatButtonModule } from '@angular/material/button';

import { GoalComponent } from './components/goal/goal.component';
import { GoalSectionComponent } from './components/goal-section/goal-section.component';
import { GoalDeleterComponent } from './components/goal-deleter/goal-deleter.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './file/file.component'
import { FileService } from './file.service'

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalSectionComponent,
    GoalDeleterComponent,
    ViewerComponent,
    FilesComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
