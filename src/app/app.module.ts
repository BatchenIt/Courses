import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { GlobalService } from './services/global-service/global.service';

import { AppComponent } from './app.component';
import { CourseCopmonent } from './components/course-copmonent/course-copmonent.component';
import { StudentCopmonent } from './components/student-copmonent/student-copmonent.component';
import { EditStudentComponent } from './components/edit-student-component/edit-student-component.component';
import { AddStudentComponent } from './components/add-student-component/add-student-component.component';







@NgModule({
  declarations: [
    AppComponent,
    CourseCopmonent,
    StudentCopmonent,
    EditStudentComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
