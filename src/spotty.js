var makeDotty = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer");
  this.$node.addClass("dotty");

};

makeDotty.prototype = Object.create(makeDancer.prototype);

makeDotty.prototype.constructor = makeDotty;

makeDotty.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  makeDancer.prototype.step.call(this);
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
