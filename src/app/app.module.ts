import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddAttendeeComponent } from './add-attendee/add-attendee.component';
import { ViewAttendeesComponent } from './view-attendees/view-attendees.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAttendeeComponent,
    ViewAttendeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
