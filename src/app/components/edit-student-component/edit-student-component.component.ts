import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student';
import { GlobalService } from '../../services/global-service/global.service';

@Component({
  selector: 'app-edit-student-component',
  templateUrl: './edit-student-component.component.html',
  styleUrls: ['./edit-student-component.component.css']
})
export class EditStudentComponent implements OnInit {

  @Input() studentToEdit: Student;
  @Output() updateStudent = new EventEmitter<boolean>();
  nameErrorMsg: string;
  lastNameErrMsg: string;
  idErrMsg: string;
  adressErrMsg: string;
  pNumErrMsg: string;
  isFormValid: boolean;

  constructor(public globalService: GlobalService) { }

  ngOnInit() { }
  isValid(student: Student) {
    if ((student.FirstName == "") || (student.LastName == "") ||
      (student.StudentId == null) || (student.StudentId == 0) || (student.Adress == "") ||
      (student.PhoneNumber == null) || (student.PhoneNumber == 0)) {
      if (student.FirstName == "") {
        this.nameErrorMsg = "Please fill this field";
      }
      if (student.LastName == "") {
        this.lastNameErrMsg = "Please fill this field";
      }
      if ((student.StudentId == null) || (student.StudentId == 0)) {
        this.idErrMsg = "Please fill this field";
      }
      if (student.Adress == "") {
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

  editStudent(editedStudent: Student) {
    this.nameErrorMsg = "";
    this.lastNameErrMsg = "";
    this.idErrMsg = "";
    this.adressErrMsg = "";
    this.pNumErrMsg = "";
    if (this.isValid(this.studentToEdit)) {
      this.globalService.EditStudent(this.studentToEdit.Id, editedStudent);
      this.updateStudent.emit(true);
    }
  }
}
