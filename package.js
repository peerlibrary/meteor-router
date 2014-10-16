Package.describe({
  summary: "A reactive router built on page.js",
  version: "0.6.1",
  git: "https://github.com/tmeasday/meteor-router.git"
});

Npm.depends({
  'connect': '2.9.0'
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('deps', 'client');
  api.use('startup', 'client');
  api.use('templating', 'client');
  api.use('handlebars', 'client');
  api.use("tmeasday:page-js-ie-support@1.3.5", 'client');
  api.use('underscore', ['client', 'server']);
  
  // for backward compat before Meteor linker changes
  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
    // Disabled to not cause errors on Meteor < 0.8
    //api.use('ui', 'client', {weak: true}); //For helpers
    api.use("tmeasday:html5-history-api@4.1.2", 'client', {weak: true});
  }
  
  api.add_files('lib/router_client.js', 'client');
  api.add_files('lib/router_helpers.js', 'client');
  api.add_files('lib/router_server.js', 'server');
  api.add_files('lib/router_common.js', ['client', 'server']);
});


Package.on_test(function (api) {
  api.use("meteor-router-new", ['client', 'server']);
  api.use('test-helpers', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  
  api.use('session', 'client');
  api.add_files('tests/router_client_tests.js', 'client');
  
  api.use('http', 'server');
  api.add_files('tests/router_server_tests.js', 'server');
  
  api.add_files('tests/router_common_tests.js', ['client', 'server']);
});
