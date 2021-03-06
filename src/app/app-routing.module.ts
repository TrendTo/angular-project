import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const app_rotes: Routes = [
    {path:'home'            , component: PortafolioComponent},
    {path:'about'           , component: AboutComponent},
    {path:'item/:cod'       , component: ItemComponent},
    {path:'buscar/:palabra' , component: BuscarComponent},
    {path:'**'              , pathMatch:'full', redirectTo:'home'},
]

@NgModule({
    imports:[
        RouterModule.forRoot(app_rotes,{ useHash: true })
    ],
    exports:[
        RouterModule
    ]
})

export class appRoutingModule{

}