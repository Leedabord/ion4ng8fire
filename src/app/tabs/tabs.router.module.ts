import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { IonicModule } from '@ionic/angular';

const tabRoutes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'tab1', 
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild(tabRoutes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
