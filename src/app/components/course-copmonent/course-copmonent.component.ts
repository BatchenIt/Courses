import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { GlobalService } from '../../services/global-service/global.service';

@Component({
    selector: 'app-course-copmonent',
    templateUrl: './course-copmonent.component.html',
    styleUrls: ['./course-copmonent.component.css']
})
export class CourseCopmonent implements OnInit {

    constructor(public globalService: GlobalService) { }

    arCourses: Course[];
    passCourseIdToStudents: Course;
    toggleStudentsTable: boolean = true;


    ngOnInit() {
        this.getCourses();
    }

    private getCourses() {
        const req = this.globalService.globalGet("courses");
        req.subscribe(rsp => {
            if (rsp.status == 200 || rsp.status == 204) {
                this.arCourses = rsp.json();
            }
        });
    }

    watchStudents(course: Course) {
        this.toggleStudentsTable = false;
        this.passCourseIdToStudents = course;
    }
}
