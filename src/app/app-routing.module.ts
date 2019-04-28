import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { AppComponent } from './app.component';
import { RoomSearchComponent } from './components/room-search/room-search.component';

const routes: Routes = [
  { path: '', component: RoomSearchComponent },
  { path: ':id', component: RoomDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
