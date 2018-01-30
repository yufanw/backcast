var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.collection.on('select', function(event){
      this.model = event;
      this.render();
    }, this);
  },



  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});


