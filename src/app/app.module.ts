import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-components/courses-list.component';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './courses-components/course-info.component';
import { HttpClientModule } from '@angular/common/http'
import { CourseModule } from './courses-components/courses.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CourseModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([
      {
        title:'Course', path:'courses/info/:id', component:CourseInfoComponent ,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
