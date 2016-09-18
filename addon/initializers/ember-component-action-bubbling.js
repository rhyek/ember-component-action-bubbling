import Ember from 'ember';
const { get } = Ember;

export function initialize() {
  Ember.Component.reopen({
    bubble(actionName, ...args) {
      let target;
      let action = this.actions && this.actions[actionName];

      if (action) {
        let shouldBubble = action.apply(this, args) === true;
        if (!shouldBubble) { return; }
      }

      target = get(this, 'target') || get(this, '_targetObject');

      if (target) {
        if (target.bubble) {
          target.bubble(...arguments);
        } else if (target instanceof Ember.Controller) {
          target.send(...arguments);
        }
      }
    }
  });
}

export default {
  name: 'ember-component-action-bubbling',
  initialize
};
