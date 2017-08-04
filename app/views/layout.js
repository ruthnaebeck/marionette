'use strict';

import Marionette from 'backbone.marionette';

import FormView from './form';
import ListView from './list';
import LayoutTemplate from '../templates/layout.html';

// export default class TodoView extends Marionette.LayoutView
// {
//   constructor(options)
//   {
//     options.template = LayoutTemplate;
//     options.id = 'app-hook';
//     options.regions = {
//       form: '.form',
//       list: '.list'
//     };

//     super(options);
//   }

//   onShow()
//   {
//     console.log(this.model);
//     console.log(this.collection);
//     this.showChildView('form', new FormView({model: this.model}));
//     this.showChildView('list', new ListView({collection: this.collection}));
//     console.log('this', this);
//   }

//   collectionEvents()
//   {
//     return { add: 'itemAdded' };
//   }

//   onChildviewAddTodoItem(child)
//   {
//     this.model.set({
//       assignee: child.ui.assignee.val(),
//       text: child.ui.text.val()
//     }, {validate: true});

//     if (this.model.isValid()) {
//       var items = this.model.pick('assignee', 'text');
//       this.collection.add(items);
//     }
//   }

//   itemAdded()
//   {
//     this.model.set({
//       assignee: '',
//       text: ''
//     });
//   }
// }

var Layout = Marionette.LayoutView.extend({
  el: '#app-hook',

  template: LayoutTemplate,

  regions: {
    form: '.form',
    list: '.list',
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onShow: function() {
    var formView = new FormView({model: this.model});
    var listView = new ListView({collection: this.collection});

    this.showChildView('form', formView);
    this.showChildView('list', listView);
  },

  onChildviewAddTodoItem: function(child) {
    this.model.set({
      assignee: child.ui.assignee.val(),
      text: child.ui.text.val()
    }, {validate: true});

    if (this.model.isValid()) {
      var items = this.model.pick('assignee', 'text');
      this.collection.add(items);
    }
  },

  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: ''
    });
  }
});

export default Layout;
