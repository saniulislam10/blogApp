import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  updateBlogTitle!: string;
  updateBlogText!: string;
  @Input()
  todo!: Todo;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoEdit: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Delete clicked")
  }
  OnUpdate(){
    let todo = {
      _id: this.todo._id,
      title: this.updateBlogTitle,
      shortDescription: this.updateBlogText,
      author: 'Saniul Islam',
      slug: ''+Math.random(),
      active: false
    }
    this.todoUpdate.emit(todo);
    console.log("Update clicked")

  }
  OnEdit(todo: Todo){
    this.todoEdit.emit(todo);
    console.log("Edit clicked")
  }


}
