import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../courses-components/Course";
import { CourseService } from "./Course.service";

@Component({
    templateUrl:'./course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    courseId: string;

    course: Course;

    constructor(public activatedRoute: ActivatedRoute, public courseService: CourseService){}

    ngOnInit() {
        this.courseId = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.courseService.retrieveById(this.courseId).subscribe({
            next: course => {
                this.course = course
            },
            error: err => console.log(err)
        })
    }

    save(course: Course): void {
        this.courseService.save(course)
    }

    deleteCourse(courseId: string): void {
        this.courseService.deleteById(courseId)
    }

}