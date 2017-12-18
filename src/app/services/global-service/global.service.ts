import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService {

  private url: string;
  private studentsUrl: string;

  constructor( @Inject(Http) private http: Http) {
    this.url = "http://localhost:60950/api/";
    this.studentsUrl = "students/";
  }

  globalGet(ctrlUrl: string) {
    return this.http.get(this.url + ctrlUrl);
  }

  createStudent(body: any) {
    return this.http.post(this.url + this.studentsUrl, body)
  }

  DeleteStudent(id: number) {
    return this.http.delete(this.url + this.studentsUrl + id);
  }

  EditStudent(id: number, body: any) {
    return this.http.put(this.url + this.studentsUrl + id, body);
  }
}
