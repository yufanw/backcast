var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.collection.on('reset', () => {
      this.model = this.collection.at(0);
      this.render();
    });
    this.collection.on('select', function(event){
      this.model = event;
      this.render();
    }, this);
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});


