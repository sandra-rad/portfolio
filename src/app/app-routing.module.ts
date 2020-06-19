import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MrgoComponent } from './components/work/mrgo/mrgo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'mrgo', component: MrgoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
