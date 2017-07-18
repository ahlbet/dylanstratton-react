export default function sketch(p) {

    var canvasHeight = 200;
    var canvasWidth = 300;

    var x = 0;
    var y = 0;
    // var rValue = 0;
    var num = 10;
    var sz = 5;
    // var mirror = 4;

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      // if (props.rotation){
      //   rotation = props.rotation * Math.PI / 180;
      // }
    };

    p.draw = function () {
      p.background(247, 248, 250);
      p.noStroke();

      // var t = p.frameCount / 1000.0;
      // var tt = p.frameCount;

      p.translate(p.width / 2, p.height / 2);
      // p.rotate(p.radians(rValue));

      for (var i = 0; i < num; i++) {
        p.fill(0);
        
        p.ellipse(
          p.map(p.sin(x+(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          p.map(p.cos(2*y-(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          sz, sz
        );
      
      p.ellipse(
          p.map(-p.sin(x+(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          p.map(-p.cos(2*y-(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          sz, sz
        );  
        
      p.ellipse(
          p.map(-p.sin(x+(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          p.map(p.cos(2*y-(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          sz, sz
        );
        
      p.ellipse(
          p.map(p.sin(x+(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          p.map(-p.cos(2*y-(i/num)), -1, 1, (-p.height/2)+sz, (p.height/2)-sz),
          sz, sz
        );
      }
      x += 0.015;
      y += 0.015;
      // rValue++;
    };
  }