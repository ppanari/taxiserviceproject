import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: "full"
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)
    }
];
