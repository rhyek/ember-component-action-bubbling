import Ember from 'ember';
import log from 'dummy/log';

export default Ember.Component.extend({
  value: 'test',
  actions: {
    test() {
      const value = this.get('value');
      log(4, `sending: ${value}`);
      this.bubble('ohai', value);
    }
  }
});