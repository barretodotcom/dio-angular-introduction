import { Injectable } from "@angular/core";
import { Course } from "./Course";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CourseService{

    courses: Course[];

    course: Course;

    coursesUrl: string = '<url>/api/courses'

    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

     retrieveById(courseId: string): Observable<Course> {
        return this.httpClient.get<Course>(this.coursesUrl+'/'+courseId);
    }

    save(Course: Course): void {
        if(Course.id){
            console.log(Course.id)
            this.httpClient.put<Course>((this.coursesUrl+'/'+Course.id),Course).subscribe();
        } else{
            this.httpClient.post<Course>((this.coursesUrl),Course).subscribe();
        }
    }

    deleteById(courseId: string): Observable<any> {
        return this.httpClient.delete<Course>((this.coursesUrl + '/'+courseId))
    }

}