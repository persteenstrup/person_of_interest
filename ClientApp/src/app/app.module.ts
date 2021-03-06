import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { LoginComponent } from './login/login.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    QuizComponent,
    ChatroomComponent,
    SelectUserComponent,
    LoginComponent,
    QuizSelectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'landing', component: HomeComponent, pathMatch: 'full' },
      { path: 'chat', component: ChatroomComponent},
      { path: 'quiz/:id', component: QuizComponent},
      { path: 'findfriend', component: SelectUserComponent},
      { path: 'login', component: LoginComponent },
      { path: 'quizSelection', component: QuizSelectionComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
