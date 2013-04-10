var templateLoader = function (templateName) {
    $.get(templateName,
        function (template){
            $('.content').html(Mustache.render(template));
        }
    );
}

var Workspace = Backbone.Router.extend({

  routes: {
    "": "home",
    "examples": "examples",
    "list": "list"
  },

  home: function() {
      templateLoader('index.mustache');
  },

  examples: function() {
      templateLoader('examples.mustache');
  },

  list: function() {
      templateLoader('the-list.mustache');
  },
});

var apiRouter = new Workspace;

Backbone.history.start();
