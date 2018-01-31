var SearchView = Backbone.View.extend({


  events: {
    'click button': 'handleClick',
    'keyup input': 'handleEnter'
  },

  initialize: function(){
    this.render();
    this.collection.search('dog');
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },


  handleClick: function(event) {
    var searchFor = this.$('input').val().trim();
    if (searchFor) {
      this.collection.search(searchFor);
    }
    this.$('input').val('');
  },

  handleEnter: function(event) {
    console.log('key pressed', event.keyCode);
    if (event.keyCode === 13) {
      var searchFor = this.$('input').val().trim();
      if (searchFor) {
        this.collection.search(searchFor);
      }
      this.$('input').val('');
    }
  },


  template: templateURL('src/templates/search.html')

});


