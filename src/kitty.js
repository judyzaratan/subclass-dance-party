var makeKitty = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="kitty"></span>');
  //this.$node.className = $('<span class="kitty"></span>');
  this.$node.prepend($('<img src= "./src/kittyDancer.gif"/>').height(50).width(50));
  //this.setPosition(top, left);
};

makeKitty.prototype = Object.create(makeDancer.prototype);

makeKitty.prototype.constructor = makeKitty;

makeKitty.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
   var width = $("body").width();


   this.left = this.left+ 50;
   if (this.left > width) {
     this.left = 0;
   }
   makeDancer.prototype.setPosition.call(this, this.top, this.left);
};
