import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomSearchComponent } from './room-search/room-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomDetailComponent,
    RoomSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
