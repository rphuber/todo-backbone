var TodoView = Backbone.View.extend({
  tagName: "article",
  id: 'todo-view',
  ClassName: 'todo',
  render: function(){
    var html = '<h3>' + this.Model.get('description') + '</h3>';
    this.$el.html(html);
  }
})