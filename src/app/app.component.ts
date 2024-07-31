import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';

  constructor() {}

  typeWords = "";
  point = 0;
  time = 60;
  words =["hello", "world", "this", "is", "a", "test",
    "typing", "game", "challenge", "javascript", "random",
    "keyboard", "practice", "speed", "accuracy", "fun",
    "learn", "code", "improve", "skills", "example",
    "words", "sentence", "paragraph", "exercise", "study",
    "quick", "brown", "fox", "jumps", "over",
    "lazy", "dog", "jumps", "high", "huge",
    "giant", "big", "small", "tiny", "large",
    "medium", "extra", "ordinary", "word", "letter",]
    
  index = Math.floor(Math.random() * this.words.length);
  word = this.words[this.index]
 

  buttons = [
    {
      top: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    },
    {
      middle: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    },
    {
      bottom: ["Z", "X", "C", "V", "B", "N", "M"],
    },
  ];

  startGame() {
    this.point = 0;
    this.time = 60;
    this.randomWord();
    this.Clock();
    this.lastScore();
  }

  Clock() {
    let timeInterval = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(timeInterval);
        alert("Time up! Your Point is " + this.point)
      }
    }
      , 1000);
  }

  randomWord() {
    this.index = Math.floor(Math.random() * this.words.length);
    this.word = this.words[this.index];
  }

  checkWord() {
    if (this.typeWords == this.words[this.index]) {
      this.point++;
      this.randomWord();
      this.typeWords = "";
    } else {
      this.lastScore();
      this.randomWord();
      this.typeWords = "";
    }
  }

  lastScore() {
    if (this.point > 0){
        this.point--;
    } else {
        this.point = 0;
    }
}

  @HostListener('document:keypress', ['$event'])
  enterHandler(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.checkWord();
    }
    
  }

}