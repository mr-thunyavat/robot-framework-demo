import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FileManageComponent } from './file-manage/file-manage.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UploadComponent } from './file-manage/upload/upload.component';
import { FileStateService } from './file-state/file-state.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent,
    FooterComponent,
    FileManageComponent,
    NotFoundPageComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, FileStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
