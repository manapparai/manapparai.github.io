import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { MoreDetailComponent } from './more-detail/more-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:fileName', component: DetailComponent },
  { path: 'more-detail', component: MoreDetailComponent },
  { path: '**', redirectTo: ''}, // anything else redirect to the route mentioned
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
