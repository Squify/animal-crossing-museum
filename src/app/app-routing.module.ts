import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishListComponent } from './pages/fish-list/fish-list.component';
import { BugsListComponent } from './pages/bugs-list/bugs-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArtListComponent } from './pages/art-list/art-list.component';
import { FossilListComponent } from './pages/fossil-list/fossil-list.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'fish', component: FishListComponent},
  {path: 'bugs', component: BugsListComponent},
  {path: 'art', component: ArtListComponent},
  {path: 'fossil', component: FossilListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
