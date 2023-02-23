import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PassowordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PassowordStrengthBarComponent,
    EmailInputComponent,
    PasswordInputComponent,
    SubmitBtnComponent,
    UserFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
