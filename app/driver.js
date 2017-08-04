import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import TodoView from './views/layout';
import TodoModel from './models/todo';

const initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
];

export class TodoApp extends Marionette.Application
{
  constructor(options)
  {
    super(options);

    this.todoModel = new TodoModel({
      app: this
    });

    this.todoCollection = new Backbone.Collection(options.initialData);

  }
}

var app = new Marionette.Application({
  onStart: function(options){
    var todo = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      model: new TodoModel()
    });
    todo.render();
    todo.triggerMethod('show');
  }
});

app.start({initialData: initialData});
