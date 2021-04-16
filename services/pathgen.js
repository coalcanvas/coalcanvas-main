var s = Snap("#svg");
var direction = {
  x: 0,
  y: 0,
};
var size = {
  x: 200,
  y: 100,
};

function Coords() {
  this.history = [
    {
      x: -1,
      y: -1,
    },
  ];
  this._x = 0;
  this._y = 0;
  this.x = 0;
  this.y = 0;
}
Coords.prototype.generate = function (direction, step) {
  this._x = this.x;
  this._y = this.y;
  this.x = limit([0, size.x], (this.x += direction.x * step));
  this.y = limit([0, size.y], (this.y += direction.y * step));
  return this;
};

Coords.prototype.store = function (direction, step) {
  this.history.push({
    x: this.x,
    y: this.y,
  });
  return this;
};
// var step = function() {
// 	return 1;
// };
// var step = function() {
// 	return Math.random() * 30
// };
var step = function (n) {
  return n * Math.round(Math.random() * 1 + 1);
};
var line;
var hasDuplicateCoords = function (c) {
  var d = c.history.filter(function (elem) {
    return elem.x === c.x && elem.y === c.y;
  });
  return d.length > 5;
};
Math.sine = function (w) {
  return parseFloat(Math.sin(w).toFixed(10));
};
Math.cosine = function (w) {
  return parseFloat(Math.cos(w).toFixed(10));
};
var RandomDir = {
  old_radian: 4,
  get: function () {
    var f = Math.round;
    var f = function (x) {
      return x;
    };
    var radian = f(Math.random() * 4) * (Math.PI / 2);
    if (Math.abs(this.old_radian - radian) === Math.PI) {
      radian += Math.PI / 2;
    }
    this.old_radian = radian;
    return {
      x: Math.sine(radian),
      y: Math.cosine(radian),
    };
  },
};
var limit = function (limits, number) {
  var M = Math.max,
    m = Math.min;
  return m(limits[1], M(limits[0], number));
};
var drawIt = function (obj) {
  var points = [];
  obj.history.forEach(function (el) {
    points.push(el.x);
    points.push(el.y);
  });
  return s
    .polyline(points)
    .attr({
      stroke:
        "rgba(" +
        [
          Math.round(Math.random() * 22),
          Math.round(Math.random() * 33),
          Math.round(Math.random() * 200),
        ].join(",") +
        ",0.1)",
      strokeWidth: 0.1,
      "stroke-dasharray": 0.5,
      "stroke-width": 0.1,
      // 'stroke-dashoffset': 100,
      fill: "transparent",
    })
    .animate({ "stroke-dashoffset": 0 }, 1000000);
};
var coords = [];
var iterations = 10000;
var paths = 20;

while (paths--) {
  coords.push(new Coords());
}

while (iterations--) {
  coords.forEach(function (coord, i) {
    coord.generate(RandomDir.get(), step(4 / i)).store();
  });
}
coords.forEach(function (coord) {
  drawIt(coord);
});
