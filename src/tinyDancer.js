var makeTinyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="tiny"></span>');
  this.$node.removeClass("dancer");
  this.$node.addClass("tiny");
  //this.settings = {'border': 5px solid blue, 'border-radius': 5px};
  //this.border-radius =
  //this.$node.css(this.settings);
};

makeTinyDancer.prototype = Object.create(makeDancer.prototype);

makeTinyDancer.prototype.constructor = makeTinyDancer;

makeTinyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var width = $("body").width();
  this.$node.fadeToggle();
  this.left = this.left+ 50;
  if (this.left > width) {
    this.left = 0;
  }
  makeDancer.prototype.setPosition.call(this, this.top, this.left);
};
