import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { FileManageComponent } from './file-manage/file-manage.component';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UploadComponent } from './file-manage/upload/upload.component';

const routes: Routes = [
  {path: 'home', component: FirstComponent,
    canActivate: [AuthGuard]
  },
  {path: 'second', component: SecondComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'file', component: FileManageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: 'upload', component: UploadComponent}
    ]
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
