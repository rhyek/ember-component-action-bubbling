import Ember from 'ember';
import log from 'dummy/log';

export default Ember.Controller.extend({
  actions: {
    ohai(value) {
      log(0, `recieved: ${value}`);
    }
  }
});