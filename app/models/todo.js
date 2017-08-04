// import Backbone from 'backbone';

// export class TodoModel extends Backbone.Model
// {
//   constructor(options)
//   {
//     super(options);
//     // this.app = options.app;
//   }

//   defaults()
//   {
//     return {
//       assignee: '',
//       text: ''
//     };
//   }

//   validate(attrs)
//   {
//     const errors = {};
//     let hasError = false;
//     if (!attrs.assignee)
//     {
//       errors.assignee = 'assignee must be set';
//       hasError = true;
//     }
//     if (!attrs.text)
//     {
//       errors.text = 'text must be set';
//       hasError = true;
//     }
//     console.log('errors', errors);
//     if (hasError) return errors;
//   }
// }

var Backbone = require('backbone');

var ToDo = Backbone.Model.extend({
  defaults: {
    assignee: '',
    text: ''
  },

  validate: function (attrs) {
    var errors = {};
    var hasError = false;
    if (!attrs.assignee) {
      errors.assignee = 'assignee must be set';
      hasError = true;
    }
    if (!attrs.text) {
      errors.text = 'text must be set';
      hasError = true;
    }
    if (hasError) {
      return errors;
    }
  }
});

module.exports = ToDo;
