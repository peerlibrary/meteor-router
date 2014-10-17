if (typeof Handlebars !== 'undefined') {
  var renderPage = function(name, options) {
    if (! _.isString(name))
      name = Meteor.Router.page();
    
    if (Template[name]) {
      return Template[name].extend({ data: this });
    }

    return null;
  };

  var currentPage = function () {
    return Meteor.Router.page();
  };

  Handlebars.registerHelper('renderPage', renderPage);
  Handlebars.registerHelper('currentPage', currentPage);
}
