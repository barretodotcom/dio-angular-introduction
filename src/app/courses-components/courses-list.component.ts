import { Component, OnInit } from "@angular/core";
import { Course } from "./Course";
import { CourseService } from "./Course.service";

@Component({
    selector: 'app-courses-list-component',
    templateUrl:'./courses-list.component.html'
})  

export class CoursesListComponent implements OnInit {

    _courses: Course[] = [];

    filteredCourses: Course[];

    _filterBy:string;

    constructor(public courseService: CourseService){}

    ngOnInit(): void {
        this.retrieveAll()
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: course => {
                this._courses = course
                this.filteredCourses = this._courses
            },
            error: err => console.log(err)
        });
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter(course => course.name.toLowerCase().includes(this._filterBy.toLowerCase()))
    }

    delete(courseId: string) {
        this.courseService.deleteById(courseId)
        .subscribe({
            next: sucess => {
                console.log(`Deleted with sucess`);
                this.retrieveAll()
            }
        })
    }

}