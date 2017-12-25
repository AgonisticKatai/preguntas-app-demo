import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
  questions: Object[];

  constructor (public dataService: DataService) {

   }
  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }
}
