let scene, camera, renderer, controls;

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x222222);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1, 1.5);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const light = new THREE.HemisphereLight(0xffffff, 0x444444);
  light.position.set(0, 20, 0);
  scene.add(light);

  // precisa ser alterado conforme a extensão do arquivo. Agora lendo MTL e OBJ...
  
  const mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath('modelos/');
  mtlLoader.load('apple_final.mtl', function (materials) {
  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath('modelos/');
  objLoader.load('apple_final.obj', function (object) {
    scene.add(object);
  }, undefined, function (error) {
    console.error('Deu ruim no load do modelo OBJ/MTL:', error);
  });

  // ...carregando arquivo até aqui

}, undefined, function (error) {
  console.error('Deu ruim no load do MTL:', error);
});

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

