import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { MyRoutes } from './core/models/enums';
import { PrivateComponent } from './pages/private/private.component';
import { PublicComponent } from './pages/public/public.component';

const routes: Routes = [
  {
    path:MyRoutes.AUTH,
    component:PublicComponent,
    loadChildren: () => import('./features/auth/auth.module').then(m=>m.AuthModule),
    canLoad: [NoAuthGuard]
  },
  {
    path: '',
    component: PublicComponent,
    loadChildren: () => import('./features/home/home.module').then( m => m.HomeModule)
  },
  {
    path: MyRoutes.TODOS,
    component: PrivateComponent,
    loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
