var SearchView = Backbone.View.extend({

  initialize: function(){
    this.render();
    this.collection.search('dog');
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  event: {
    'click button': 'handleClick',
  },

  handleClick: function(event) {
    var searchFor = this.$('input').val().trim();
    this.collection.search(searchFor);
    this.$('input').val('');
  },



  template: templateURL('src/templates/search.html')

});


