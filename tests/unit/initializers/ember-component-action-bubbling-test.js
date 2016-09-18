import Ember from 'ember';
import EmberComponentActionBubblingInitializer from 'dummy/initializers/ember-component-action-bubbling';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | ember component action bubbling', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  EmberComponentActionBubblingInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
