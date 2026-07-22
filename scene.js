window.weatherScene = {
  scene: null,
  camera: null,
  renderer: null,

  init() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
  }
};
