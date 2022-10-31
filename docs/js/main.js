import "./style.js";
import "./swiper.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import * as dat from "dat.gui";

("use strict");

//THREE

var scene, ray;
var geometry, material, mesh, camera, quarter;
var sphere;

var windowHalf = new THREE.Vector2(
  window.innerWidth / 2,
  window.innerHeight / 2
);
// var gui = new dat.GUI();
// dat.GUI.toggleHide();
var world = {
  sphere: {
    radius: 15.662,
    widthSegments: 32,
    heightSegments: 16,
    phiStart: 0,
    phiLength: 6.283185,
    thetaStart: 0.565486677646163,
    thetaLength: 6.283185307179586,
  },
};
// gui.add(world.sphere, "radius", 1, 500).onChange(generateSphere);
// gui.add(world.sphere, "widthSegments", 1, 500).onChange(generateSphere);
// gui.add(world.sphere, "heightSegments", 1, 100).onChange(generateSphere);
// gui.add(world.sphere, "phiStart", 0, 1).onChange(generateSphere);
// gui.add(world.sphere, "phiLength", 0, 6.283185).onChange(generateSphere);
// gui.add(world.sphere, "thetaStart", 0, 6.283185).onChange(generateSphere);
// gui.add(world.sphere, "thetaLength", 0, 6.283185).onChange(generateSphere);

function generateSphere() {
  sphereMesh.geometry.dispose();
  sphereMesh.geometry = new THREE.SphereGeometry(
    world.sphere.radius,
    world.sphere.widthSegments,
    world.sphere.heightSegments,
    world.sphere.phiStart,
    world.sphere.phiLength,
    world.sphere.thetaStart,
    world.sphere.thetaLength
  );

  // sphereMesh.quaternion.x = (1.4 * Math.PI) / 2;
  // vertice position randomization
  var { array } = sphereMesh.geometry.attributes.position;
  var randomValues = [];
  for (var i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      var x = array[i];
      var y = array[i + 1];
      var z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 7;
    }

    randomValues.push(Math.random() * Math.PI * 2);
  }

  sphereMesh.geometry.attributes.position.randomValues = randomValues;
  sphereMesh.geometry.attributes.position.originalPosition =
    sphereMesh.geometry.attributes.position.array;

  var colors = [];
  for (var i = 0; i < sphereMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0.19, 0.4);
  }

  sphereMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  );
}
var app = document.querySelector("#tjs");
ray = new THREE.Raycaster();
scene = new THREE.Scene();
scene.background = new THREE.Color("hsla(159, 6%, 12%, 1)");
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
app.append(renderer.domElement);

var controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 100;

//console.log(camera.position);
controls.enableDamping = true;
controls.enablePan = false;
controls.minPolarAngle = 0.8;
controls.maxPolarAngle = 2.4;
controls.dampingFactor = 0.07;
controls.rotateSpeed = 0.25;
camera.updateProjectionMatrix();
controls.update();

var sphereGeometry = new THREE.SphereGeometry(
  world.sphere.radius,
  world.sphere.widthSegments,
  world.sphere.heightSegments,
  world.sphere.phiStart,
  world.sphere.phiLength,
  world.sphere.thetaStart,
  world.sphere.thetaLength
);

var sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x220000,
  opacity: 0.6,
  side: THREE.DoubleSide,
  vertexColors: true,
  wireframe: false,
});
var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphereMesh);
//sphereMesh.rotation.y = 1.57;
generateSphere();

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, -1, 1);
scene.add(light);

var backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(0, 0, -1);
scene.add(backLight);

var starGeometry = new THREE.BufferGeometry();
var starMaterial = new THREE.PointsMaterial({
  color: 0xe5e5e5,
  //specular: 0xffffff,
  //shininess: 500,
  // vertexColors: true,
  // transparent: false,
});

var starVertices = [];
for (var i = 0; i < 10000; i++) {
  var x = (Math.random() - 0.5) * 2000;
  var y = (Math.random() - 0.5) * 2000;
  var z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}

//console.log(starVertices);

starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3)
);

//console.log(starGeometry);
//console.log(starMaterial);

var stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

var target = new THREE.Vector3({
  x: 0.896,
  y: 0.794,
  z: -10,
});
var mouse = new THREE.Vector3({
  x: 0,
  y: 0,
  z: 50,
});

var frame = 0;
//console.log(camera.position);

//Listeners
var hamburger_menu = document.querySelector(".menu");
var cinema = document.querySelector(".cinematic-t");
var cinema2 = document.querySelector(".cinematic-b");
var container = document.querySelector(".swiper-pagination");
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("menu-active");
  cinema.classList.toggle("hide-t");
  cinema2.classList.toggle("hide-t");
});

var btn = document.querySelector("#explore-button");
btn.addEventListener("click", exploreBtn, false);

document.addEventListener("mousemove", onMouseMove, false);
document.addEventListener("onmousedown", onMouseDown, false);
document.addEventListener("wheel", onMouseWheel, false);
window.addEventListener("resize", onResize, false);
window.addEventListener("load", loadHandler, false);

function loadHandler(e) {
  var target = document.querySelector("canvas");

  if (document.readyState === "compvare") {
    var wheelEvent = new WheelEvent("wheel", {
      deltaY: 100,
      deltaMode: 0,
    });
    var clickEvent = new Event("click");
    target.dispatchEvent(wheelEvent);
    target.dispatchEvent(clickEvent);

    console.log(wheelEvent);
    console.log(clickEvent);
  }
}

var x = 5;
var y = 300;

var interval = 3000;

for (var i = 0; i < x; i++) {
  setTimeout(loadHandler, i * interval);
}

//functions
function exploreBtn(e) {
  e.preventDefault();

  var target = e.target;
  var app = document.querySelector("#app");

  if (target) {
    /* camera.rotation.x += 1.57;

                    camera.position.z = 25;
                    camera.updateMatrixWorld(); */

    gsap.to(camera.position, {
      z: 15,
      ease: "power4.out",
      duration: 1.5,
    });

    gsap.to(camera.rotation, {
      x: 1.2,
      y: 0.4,
      z: 0.15,
      ease: "power3.inOut",
      duration: 1.5,
      delay: 0.8,
    });

    gsap.to(camera.position, {
      y: 1000,
      ease: "power4.in",
      duration: 3,
      delay: 1,
      onCompvare: () => {
        window.location = "https://coalcanvas.github.io";
      },
    });

    console.log(e.target && app.style.opacity == 1);

    app.style.opacity = 0;
    app.style.transform =
      "rotateX(80deg) translate(0px, 0px,-`15px) scaleZ(0.5)";
    app.style.transition = "all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    //camera.rotation.x = 1.57;
    // camera.position.z = 25;
    console.log(camera.position);
  } else if (!target) {
    console.log("nope");
  }
}

function onMouseMove(e) {
  mouse.x = e.clientX - windowHalf.x;
  mouse.y = e.clientY - windowHalf.x;
  // mouse.x = e.clientX;
  // mouse.y = e.clientY;
}

function onMouseDown(e) {
  e.preventDefault();
  mouse.x = (e.clientX / innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / innerHeight) * 2 + 1;
  console.log(mouse.y);
}

function onMouseWheel(e) {
  var bod = document.querySelector("#app");
  var target = e.target;

  // var canvas = document.querySelector("canvas");

  console.log(camera.position);
  //console.log(bod.offsetY);

  camera.position.z += e.deltaY * 0.1; // move camera along z-axis
}

function onResize(e) {
  var app = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var needResize = app.width !== width || app.height !== height;
  windowHalf.set(width / 2, height / 2);

  camera.aspect = app.width / app.height;
  camera.updateProjectionMatrix();
  if (needResize) {
    renderer.setSize(width, height);
  }
}

function animate() {
  target.x = (1 - mouse.x) * 0.001;
  target.y = (1 - mouse.y) * 0.001;

  //  camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
  camera.rotation.y += 0.005 * (target.x - camera.rotation.y);

  requestAnimationFrame(animate);

  ray.setFromCamera(target, camera);
  frame += 0.01;

  var { array, originalPosition, randomValues } =
    sphereMesh.geometry.attributes.position;
  for (var i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01;

    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.001;
  }

  sphereMesh.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);

  var intersects = ray.intersectObject(sphereMesh);
  if (intersects.length > 0) {
    var { color } = intersects[0].object.geometry.attributes;

    // vertice 1
    color.setX(intersects[0].face.a, 0.1);
    color.setY(intersects[0].face.a, 0.5);
    color.setZ(intersects[0].face.a, 1);

    // vertice 2
    color.setX(intersects[0].face.b, 0.1);
    color.setY(intersects[0].face.b, 0.5);
    color.setZ(intersects[0].face.b, 1);

    // vertice 3
    color.setX(intersects[0].face.c, 0.1);
    color.setY(intersects[0].face.c, 0.5);
    color.setZ(intersects[0].face.c, 1);

    intersects[0].object.geometry.attributes.color.needsUpdate = true;

    var initialColor = {
      r: 0.6,
      g: 0,
      b: 1,
    };

    var hoverColor = {
      r: 0.3,
      g: 0,
      b: 1,
    };

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r);
        color.setY(intersects[0].face.a, hoverColor.g);
        color.setZ(intersects[0].face.a, hoverColor.b);

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r);
        color.setY(intersects[0].face.b, hoverColor.g);
        color.setZ(intersects[0].face.b, hoverColor.b);

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r);
        color.setY(intersects[0].face.c, hoverColor.g);
        color.setZ(intersects[0].face.c, hoverColor.b);
        color.needsUpdate = true;
      },
    });
  }
  stars.rotation.x += 0.0005;
}

animate();

//contact form
var YOUR_PUBLIC_KEY = "OELFukrApYjYBWuwP";
var contact_service = "service_f11zj7x";
var contact_form = "template_zoh9myc";
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(YOUR_PUBLIC_KEY);
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm(contact_service, contact_form, this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
