//
// Dojo Backbone App
// -----------------------------------------------------------------------------
//
// sch@rw-dev.com

(function ($, Backbone) {

  var app = {
    classes: {
      views: {},
      models: {},
      collections: {},
      Router: null
    },
    models: {},
    controllers: {},
    router: {},
    helpers: {},
    init: function () {}
  };

  app.helpers.analytics = function (href) {};

  app.classes.Router = Backbone.Router.extend({

    routes: {
      'index.html': 'showIndex',
      'examples.html': 'showExamples',
      'the-list.html': 'showList'
    },

    showIndex: function () {
      this.fetchContent('index.html');
    },

    showExamples: function () {
      this.fetchContent('examples.html');
    },

    showList: function () {
      this.fetchContent('the-list.html');
    },

    changeNav: function (href) {
      $('.masthead li').removeClass('active');
      $('.masthead a[href$="' + href + '"]').closest('li').addClass('active');
    },

    fetchContent: function (href) {
      this.changeNav(href);
      app.helpers.analytics(href);
      $.get(href).done(function (data) {
        var $main = $('#Main'),
            $div = $('<div />').html(data).find('#Main');

        $main.html($div.html());
      });
    }

  });

  app.init = function () {

    app.router = new app.classes.Router();

    Backbone.history.start({ pushState: true });

    // `<a href='' rel='external'>link</a>` will force a link to open in an
    // external window without any special window settings.
    $(document).on('click', '[rel*=external]', function (evt) {
      evt.preventDefault();
      window.open(this.href);
      return false;
    });

    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a data-bypass
    // attribute, bypass the delegation completely.
    $(document).on('click', 'a:not([data-bypass])', function (evt) {
      // Get the anchor href and protcol
      var href = $(this).attr('href'),
          protocol = this.protocol + '//';

      // Ensure the protocol is not part of URL, meaning it's relative.
      if (href && href.slice(0, protocol.length) !== protocol &&
          href.indexOf('javascript:') !== 0
      ) {
        // Stop the default event to ensure the link will not cause a page
        // refresh.
        evt.preventDefault();

        // `Backbone.history.navigate` is sufficient for all Routers and will
        // trigger the correct events. The Router's internal `navigate` method
        // calls this anyways.
        Backbone.history.navigate(href, true);
      }
    });
  };

  // jQuery page load, init the application
  $(function () { app.init(); });

})(window.jQuery, window.Backbone);

