import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseCopmonent } from './components/course-copmonent/course-copmonent.component';

export const appRoutes: Routes = [
  { path: 'courses', component: CourseCopmonent },
  { path: '**', redirectTo: "courses" }
];