import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()

export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        question: 'What is your name?',
        answer: 'My name is Nacho',
        hide: true
      },
      {
        question: 'What is your favourite color?',
        answer: 'Red',
        hide: true
      },
      {
        question: 'What is your hero?',
        answer: 'Hulk',
        hide: true
      }
    ];
  }
  getQuestions () {
    return this.questions;
  }
}
