import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemComponent } from './components/pages/item/item.component';

    const appt_routes: Routes = [ 
        { path: '', component: PortafolioComponent },
        { path: 'about', component: AboutComponent },
        { path: 'item', component: ItemComponent },
        { path: '**', pathMatch: 'full', redirectTo: '' }
    ];
  
  @NgModule({ 
      imports: [
          RouterModule.forRoot(appt_routes, {useHash: true})
      ], 
      exports: [ 
          RouterModule
      ]
  })

  export class AppRoutingModule { }