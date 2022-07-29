import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRoutes } from 'src/app/core/models/enums';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: MyRoutes.HOME,
    pathMatch: 'full'
  },
  {
    path: MyRoutes.HOME,
    component: HomeComponent
  },
  {
    path: MyRoutes.HISTORY,
    component: HistoryComponent
  },
  {
    path: MyRoutes.ABOUT_US,
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
