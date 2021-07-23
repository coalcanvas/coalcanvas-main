const Profiles = {
  /**
   * Render the page content.
   */

  render: async () => {
    return /*html*/ `

<section scoped onload="scrollTop()" id='profiles' class='col-md-10 col-10 offset-md-1 text-center offset-md-1 offset-1 col-auto col-md-auto'>
  <h4 class="title-tag text-center blur-bg pt-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">Profiles</h4>
        <hr class='ultralight-border text-center w-25 higher' />

<canvas id='dcanvas'>  

 
</canvas>



 
</section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */

  after_render: async () => {
    var scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({
      canvas: dcanvas,
    });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); //width, height e.g. 500, 400

    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const material = new THREE.MeshBasicMaterial({
      color: "#706ecaa1",
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      let max = 0.05;
      cube.rotation.x += Math.sin(0.08 * Math.PI * max);
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const kanva = document.getElementById("dcanvas");

    anime({
      targets: kanva,
      translateX: 550,
      translateY: Math.sin(120 * Math.PI * 8),
      direction: "alternate",
      loop: true,
      easing: "spring(4, 80, 10, 0)",
    });

    //setTimeout(() => window.location.reload(), 5500);
  },
};
export default Profiles;
