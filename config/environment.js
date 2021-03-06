'use strict';

module.exports = function(environment) {
  let ENV = {
    'ember-resolver': {
      features: {
        EMBER_RESOLVER_MODULE_UNIFICATION: true,
        EMBER_GLIMMER_ANGLE_BRACKET_INVOCATION: true,
      },
    },
    modulePrefix: 'emberclear',
    environment,
    rootURL: '/',
    // locationType: 'auto', // default
    historySupportMiddleware: true,

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        EMBER_MODULE_UNIFICATION: true,
        EMBER_GLIMMER_ANGLE_BRACKET_INVOCATION: true,
        EMBER_METAL_TRACKED_PROPERTIES: true,
        EMBER_NATIVE_DECORATOR_SUPPORT: true,
      },
      EXTEND_PROTOTYPES: false,
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // Ember.run.backburner.DEBUG = true;
    ENV.host = 'http://localhost:4201';
    ENV.SW_DISABLED = process.env.SW_DISABLED;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    // github pages:
    ENV.host = process.env.HOST || 'https://emberclear.io';
    ENV.rootURL = '/';
    ENV.baseURL = '/';
  }

  return ENV;
};
