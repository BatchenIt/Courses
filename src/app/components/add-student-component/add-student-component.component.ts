import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student';
import { Course } from '../../models/course';
import { GlobalService } from '../../services/global-service/global.service';

@Component({
  selector: 'app-add-student-component',
  templateUrl: './add-student-component.component.html',
  styleUrls: ['./add-student-component.component.css']
})
export class AddStudentComponent implements OnInit {

  newStudent: Student = <Student>{};
  @Input() arSpecCourseStudents: Student[] = new Array();
  @Input() courseToPassData: Course;
  @Output() hideAddForm = new EventEmitter<boolean>();
  @Output() addStudentToArray = new EventEmitter<Student>();
  nameErrorMsg: string;
  lastNameErrMsg: string;
  idErrMsg: string;
  adressErrMsg: string;
  pNumErrMsg: string;
  isFormValid: boolean;

  constructor(public globalService: GlobalService) { }

  ngOnInit() { }

  isValid(student: Student) {
    if ((student.FirstName == null) || (student.LastName == null) ||
      (student.StudentId == null) || (student.StudentId == 0) || (student.Adress == null) ||
      (student.PhoneNumber == null) || (student.PhoneNumber == 0)) {
      if (student.FirstName == null) {
        this.nameErrorMsg = "Please fill this field";
      }
      if (student.LastName == null) {
        this.lastNameErrMsg = "Please fill this field";
      }
      if ((student.StudentId == null) || (student.StudentId == 0)) {
        this.idErrMsg = "Please fill this field";
      }
      if (student.Adress == null) {
        this.adressErrMsg = "Please fill this field";
      }
      if ((student.PhoneNumber == null) || (student.PhoneNumber == 0)) {
        this.pNumErrMsg = "Please fill this field";
      }
      this.isFormValid = false;
    }
    else {
      this.isFormValid = true;
    }
    return this.isFormValid;
  }

  addStudent() {
    this.nameErrorMsg = "";
    this.lastNameErrMsg = "";
    this.idErrMsg = "";
    this.adressErrMsg = "";
    this.pNumErrMsg = "";
    if (this.isValid(this.newStudent)) {
      let student: Student = {
        Id: this.arSpecCourseStudents.length,
        CourseId: this.courseToPassData.Id,
        FirstName: this.newStudent.FirstName,
        LastName: this.newStudent.LastName,
        StudentId: this.newStudent.StudentId,
        Adress: this.newStudent.Adress,
        PhoneNumber: this.newStudent.PhoneNumber
      };
      this.arSpecCourseStudents.push(student);
      this.addStudentToArray.emit(this.newStudent);
      this.hideAddForm.emit(true);
    }
  }
}
