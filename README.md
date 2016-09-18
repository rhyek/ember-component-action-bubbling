# Ember Component Action Bubbling

This addon allows you to call an action from a nested component
and have it bubble up the hierarchy all the way to the root component, then
on to the current controller, its route, eventually reaching the application
route, simliar to how Controller and Route's `send()` works in Ember:

* Bubbling will continue until reaching the application route, or an action
returns nothing or a falsy value anywhere along the chain.

* If a component along the chain does not implement the action, bubbling will
skip to its parent.

The addon is very simple and all it does is reintroduce behaviour that was
already present thanks to this lovely little
[bug](https://github.com/emberjs/ember.js/issues/14275).

## Installation

* `ember install ember-component-action-bubbling`

## Code Example

```js
// parent
export default Ember.Component.extend({
  actions: {
    say(something) {
      console.log('repeating', something); // stops here
    }
  }
});

//child
export default Ember.Component.extend({
  actions: {
    say(something) {
      console.log('saying', something);
      return true; // continues
    }
  }
});

// grand child
export default Ember.Component.extend({
  click() {
    this.bubble('say', 'Hello!');
  }
});
```

## Demo

Check out this [twiddle](https://ember-twiddle.com/bad336b20fad4008b2e49ed8a656605a) or
the [demo page](https://rhyek.github.io/ember-component-action-bubbling/).