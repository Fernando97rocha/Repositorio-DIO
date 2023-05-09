import { Component, OnInit } from '@angular/core';
import data from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})


export class QuizzComponent implements OnInit {
  title: string = ''

  questions: any
  questionSelected: any

  answers: string[] = []
  answerSelected: string = ''

  questionIndex = 0
  maxQuestionIndex = 0

  finished = false

  result:string = ''

  constructor() { }

  ngOnInit(): void {
    if (!data[0]) {
      throw new Error('banco de dados não encontrado')
    } else {
      this.title = data[0].title
      this.questions = data[0].questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.maxQuestionIndex = this.questions.length
    }
  }

  playerChoice(value:string) {
    this.answers.push(value)
    this.nextQuestion()
  }

  async nextQuestion(){
    this.questionIndex += 1
    
    if(this.maxQuestionIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    } else {
      this.finished = true
      await this.questionsResult()
    }
  }

  async questionsResult() {
    const answersA:string[] = this.answers
      .filter((option) => option === 'A')

    const answersB:string[] = this.answers
      .filter((option) => option === 'B')
    
    const vilian:string = data[0].results.A
    const hero:string = data[0].results.B

    return answersA > answersB ? 
      this.result = vilian : 
      this.result = hero
  }

  //implementação de botão para refazer o teste
  remakeQuiz() {
    this.questionIndex = 0
    if (data) {
      this.questionSelected = this.questions[this.questionIndex]
      this.finished = false
      this.answers = []
      console.log(this.answers)
    } else {
    }
  }
}
