var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Mustache = require('mustache');
var homeTemplate = require('../mustache/mustache.js').home;
var list = require('../mustache/mustache.js').list;
var examples = require('../mustache/mustache.js').examples;

var app = Backbone.Router.extend({
  target: '#app',
  routes: {
    "bob": "home",
    "list": "list",
    "examples": "examples"

  },
  home: function(){
    console.log('homeTemplate:');
    console.log(homeTemplate);
    console.log('/hometemplate');
    var appContainer = $('body ' + this.target);
    if(!appContainer.length > 0) {
      $('body').prepend('<div id="'+ this.target.replace("#","")  +'"></div>');
      appContainer = $('body ' + this.target);
    }
    appContainer.html(Mustache.render(homeTemplate));
    $('body #copy').remove()
    $('body').append('<div id="copy" class ="container-narrow"><p id="footer">© 2013<br /></p></div>');
  },
  list: function(){
    var appContainer = $('body ' + this.target);
    if(!appContainer.length > 0) {
      $('body').prepend('<div id="'+ this.target.replace("#","")  +'"></div>');
      appContainer = $('body ' + this.target);
    }
    appContainer.html(Mustache.render(list));
    $('body #copy').remove()
    $('body').append('<div id="copy" class ="container-narrow"><p id="footer">© 2013<br /></p></div>');

  },
  examples: function(){
    var appContainer = $('body ' + this.target);
    if(!appContainer.length > 0) {
      $('body').prepend('<div id="'+ this.target.replace("#","")  +'"></div>');
      appContainer = $('body ' + this.target);
    }
    appContainer.html(Mustache.render(examples));
    $('body #copy').remove()
    $('body').append('<div id="copy" class ="container-narrow"><p id="footer">© 2013<br /></p></div>');

  }
});

$(function(){
  var application = new app()
  Backbone.history.start();
  application.navigate("bob", {trigger:true, replace:true});
});

