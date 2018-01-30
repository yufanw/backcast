var VideoListView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find(".video-list").empty();
    this.collection.forEach(this.renderEntry);
    return this;
  },

  renderEntry: function(video) {
    var view = new VideoListEntryView({model: video});
    this.$(".video-list").append(view.render());
  },

  template: templateURL('src/templates/videoList.html')

});



//get video list view to render
// pass data from example Video Data to Video list view

//Refactor the VideoListView to dynamically render one VideoListEntryView for each video object in exampleVideoData, passing in the video data to VideoListEntryView
//Refactor the VideoListEntryView to dynamically render based on the video object it receives
//Make sure the tests for VideoListView and VideoListEntryView are passing.