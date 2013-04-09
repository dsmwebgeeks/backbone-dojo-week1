
$(function() {




        var App = function() {
            return {
                settings: {
                    apiURL : 'http://api.cwg.prod.billing'
                },
                routers: {
                    appRouter: null
                },
                initialize: function initialize(options) {




                   var AppRouter =  Backbone.Router.extend({

                        // MAPPINGS
                        'routes': {
                            '': 'index',
                            'the-list': 'theList',
                            'examples': 'examples'
                        },

                        // FUNCTIONS
                        'index': function indexRoute() {

                            var IndexView = Backbone.View.extend({
                              render: function () {
                                var template = $('#index-template').html();
                                var that = this;
                                $('#page > div').fadeOut({
                                    complete: function(){
                                        $(this).remove();
                                        $('#page').prepend(that.$el.html(template));
                                    }
                                });
                              }
                            });
                            var indexView = new IndexView();
                            indexView.render();

                        },
                        'theList': function loginRoute(){

                            var TheListView = Backbone.View.extend({
                              render: function () {
                                var template = $('#the-list-template').html();
                                var that = this;
                                $('#page > div').fadeOut({
                                    complete: function(){
                                        $(this).remove();
                                        $('#page').prepend(that.$el.html(template));
                                    }
                                });
                              }
                            });
                            var theListView = new TheListView();
                            theListView.render();
                        },
                        'examples': function accountListRoute(startPage){

                            var Examples = Backbone.View.extend({
                              render: function () {
                                var template = $('#examples-template').html();
                                var that = this;
                                $('#page > div').fadeOut({
                                    complete: function(){
                                        $(this).remove();
                                        $('#page').prepend(that.$el.html(template));
                                    }
                                });
                              }
                            });
                            var examples = new Examples();
                            examples.render();
                        }
                    });

                    this.routers.appRouter = appRouter = new AppRouter();


                    // App view
                    var AppView = Backbone.View.extend({
                        events: {
                            'click ul#mainNav a': 'doNavigation'
                        },
                        router: null,
                        el: '#webGeeksApp',
                        initialize: function (options) {
                            this.router = options.router;
                        },
                        doNavigation: function doNavigation (event) {
                            event.preventDefault();
                            $('ul#mainNav li').removeClass('active');
                            $(event.target).parent('li').addClass('active');
                            this.router.navigate($(event.target).attr('href').substring(1), {trigger: true, replace: false});
                        }
                    });

                    var appView = new AppView({router:appRouter});


                }
            };
        }


        var app = new App();

        app.initialize();
        Backbone.history.start({pushState: true});

});