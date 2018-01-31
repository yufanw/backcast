var VideoListEntryView = Backbone.View.extend({

  initialize: function(){
    this.model.on('sync', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function(event) {
    this.model.select($(event.target));
  },

  template: templateURL('src/templates/videoListEntry.html')

});

