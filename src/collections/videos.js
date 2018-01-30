var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function(video) {
    this.on('sync', function() {
      this.at(0).select();
    });
  },

  search: function(text) {
    this.fetch({
      data: {
        q: text,
        maxResults: '5',
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
