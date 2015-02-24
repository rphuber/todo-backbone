// TodoList Collection
var TodoList = Backbone.Collection.extend({
  url: 'http://rh-tiny-server.herokuapp.com/collections/todos',
  model:TodoItem
})