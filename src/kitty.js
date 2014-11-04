var makeKitty = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer");
  this.$node.addClass("kitty");
  //this.$node.className = $('<span class="kitty"></span>');
  //this.$node.prepend($('<img src= "./src/kittyDancer.gif"/>').height(150).width(150));
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
   var height = $("body").height();
   var or = Math.random()*150-75;
   var or2 = Math.random()*150-75;
   this.left = this.left+ or;
   if (this.left > width) {
     this.left = 0;
   }
   if (this.left < 0) {
     this.left = width-150;
   }
   this.top = this.top+ or;
   if (this.top > height) {
     this.top = 0;
   }
   if (this.top < 0) {
     this.top = height-150;
   }
   makeDancer.prototype.setPosition.call(this, this.top, this.left);

};
