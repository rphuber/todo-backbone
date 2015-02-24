var TodoItem = Backbone.Model.extend({
  urlRoot: 'http://rh-tiny-server.herokuapp.com/collections/todos',
  defaults: {
    description: 'Empty to do...', 
    status: 'Incomplete'
  }, 
  initialize: function(){
    console.info('Todo Model was created.')
  }
});