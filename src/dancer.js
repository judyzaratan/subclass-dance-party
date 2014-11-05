// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.kitmorph();
  // var thisClass = "dancer";
  // this.$node.mouseenter(function(event)
  //   {
  //       //var thisClass = $(this).attr("class");
  //       //console.log($(this));
  //       //console.log(this.className);
  //       $(this).removeClass(this.className);
  //       //console.log($(this));

  //       $(this).addClass("kitty");




  //   }).mouseleave(function(event)
  //   {
  //       //event.stopPropagation()
  //       $(this).addClass("dancer");
  //       $(this).removeClass("kitty");

    //})
};

makeDancer.prototype.kitmorph = function() {
  this.$node.mouseenter(function(event)
  {
      //var thisClass = $(this).attr("class");
      //console.log($(this));
      //console.log(this.className);
      $(this).removeClass("dancer");
      //console.log($(this));
      $(this).addClass("kitty");
  }).mouseleave(function(event)
  {
      //event.stopPropagation()
      $(this).addClass("dancer");
      $(this).removeClass("kitty");
  })
};


makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //var that = this;
  // setTimeout(function() {that.step();}, this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  setTimeout(this.near.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.styleSettings = {
    'top': top,
    'left': left
  };
  this.$node.css(this.styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.left = 0;
  this.styleSettings = {
    'top': this.top,
    'left': this.left
  };
  this.$node.css(this.styleSettings);
};

makeDancer.prototype.near = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    if (this !== window.dancers[i]) {
      var a = Math.abs(window.dancers[i].top - this.top);
      var b = Math.abs(window.dancers[i].left - this.left);
      if(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) < 200) {
          this.$node.fadeToggle();
      }
    }
  }
};

