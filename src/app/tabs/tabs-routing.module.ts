import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home-routing.module').then(m => m.HomePageRoutingModule)
      },
      {
        path: 'filter',
        loadChildren: () => import('../filter/filter-routing.module').then(m => m.FilterPageRoutingModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../favorite/favorite-routing.module').then(m => m.FavoritePageRoutingModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil-routing.module').then(m => m.PerfilPageRoutingModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings-routing.module').then(m => m.SettingsPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
