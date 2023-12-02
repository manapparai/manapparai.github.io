import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:fileName', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // anything else redirect to the route mentioned
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
