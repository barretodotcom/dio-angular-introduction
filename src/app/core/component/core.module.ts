import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "src/app/error-404-component/error-404.component";
import { NavBarComponent } from "./nav-bar-component/NavBar.component";

@NgModule({
    declarations:[
        NavBarComponent,
        Error404Component
    ],
    exports:[
        NavBarComponent,
    ],
    imports:[
        RouterModule.forChild([
            {
                title:'Página não encontrada', path:'**', component:Error404Component, pathMatch:'full', 
            },
        ])
    ]
})
export class CoreModule{}