import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces/Todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newBlogTitle!: string;
  newBlogText!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    let todo = {
      title: this.newBlogTitle,
      shortDescription: this.newBlogText,
      author: 'Saniul',
      slug: ''+Math.random(),
      active: false
    }
    
    this.todoAdd.emit(todo);
  }
}
