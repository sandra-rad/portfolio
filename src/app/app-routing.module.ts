import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MrgoComponent } from './components/work/mrgo/mrgo.component';
import { WorkComponent } from './components/work/work.component';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'mrgo', component: MrgoComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'work', component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
