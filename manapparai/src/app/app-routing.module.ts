import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { MoreDetailComponent } from './more-detail/more-detail.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:fileName', component: DetailComponent },
  { path: 'more-detail', component: MoreDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // anything else redirect to the route mentioned
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule {}
