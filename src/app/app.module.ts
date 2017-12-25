import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListQuestionsComponent } from './components/list-questions/list-questions.component';
import { DataService } from './services/data.service';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListQuestionsComponent,
    QuestionComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
