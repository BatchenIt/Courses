import { Component, Injectable, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student';
import { Course } from '../../models/course';
import { GlobalService } from '../../services/global-service/global.service';

@Component({
  selector: 'app-student-copmonent',
  templateUrl: './student-copmonent.component.html',
  styleUrls: ['./student-copmonent.component.css']
})

@Injectable()
export class StudentCopmonent implements OnInit {

  arStudents: Student[] = new Array();
  arSpecCourseStudents: Student[] = new Array();
  @Input() courseToPassData: Course;
  studentToEdit: Student;
  studentToDelete: Student;
  showStudentTable: boolean = true;
  hideAddStudentForm: boolean = true;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.getStudents();
  }

  async getStudents() {
    const req = this.globalService.globalGet("students");
    await req.subscribe(rsp => {
      if (rsp.status == 200) {
        this.arStudents = rsp.json();
        this.getSpecCourseStudents();
      }
    });
  }

  getSpecCourseStudents() {
    this.arStudents.forEach(student => {
      if (student.CourseId == this.courseToPassData.Id) {
        this.arSpecCourseStudents.push(student);
      }
    });
  }

  toggleEdit($event: boolean) {
    this.showStudentTable = $event;
  }

  editStudent(editStudent: Student) {
    this.studentToEdit = editStudent;
    this.showStudentTable = false;
  }

  PopUpToDelete(student: Student) {
    this.studentToDelete = student;
  }

  deleteStudent() {
    let index = this.arSpecCourseStudents.indexOf(this.studentToDelete);
    this.globalService.DeleteStudent(this.studentToDelete.Id);
    this.arSpecCourseStudents.splice(index, 1);
  }

  addStudent($event: Student) {
    this.globalService.createStudent($event);
  }

  addStudentForm() {
    this.hideAddStudentForm = false;

  }

  showTable($event: boolean) {
    this.hideAddStudentForm = $event;
  }
}

