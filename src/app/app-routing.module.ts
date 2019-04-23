import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: ':id', component: RoomDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
