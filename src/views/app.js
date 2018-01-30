var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();

    var videoList = new VideoListView({el: $('.list'), collection: this.videos});

    var videoPlayer = new VideoPlayerView({el: $('.player'), collection: this.videos});

    var searchBar = new SearchView({el: $('.search'), collection: this.videos});

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});


//render Video player view
//expected render to have been called once

//render a Video list view
//expected render to have been called once

