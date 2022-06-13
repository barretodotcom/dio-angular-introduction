import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CodePipe } from "../shared/pipe/Code.pipe";
import { StarComponent } from "../shared/components/star/star.component";
import { CourseInfoComponent } from "./course-info.component";
import { CoursesListComponent } from "./courses-list.component";
import { StarModule } from "../shared/components/star/star.module";
import { CodePipeModule } from "../shared/pipe/Code.pipe.module";
import { CoreModule } from "../core/component/core.module";

@NgModule({
    declarations:[
        CoursesListComponent,
        CourseInfoComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        StarModule,
        CodePipeModule,
        RouterModule.forChild([
            {
              title:'Cursos',  path:'courses', component: CoursesListComponent
            },
            {
               title:'Curso', path:'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {

}