import Ember from 'ember';
import log from 'dummy/log';

export default Ember.Component.extend({
  checked: true,
  actions: {
    ohai(val) {
      log(3, `recieved: ${val}`);
      return this.get('checked');
    }
  }
});