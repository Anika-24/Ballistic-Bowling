class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(1000,500,2000,0,options);
      World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position;
     push()
      fill("pink");
      rectMode(CENTER);
      rect(pos.x, pos.y, 2000, 20);
      pop()
    }
  };
