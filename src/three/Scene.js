import * as THREE from 'three';

export function init3DScene() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  document.body.prepend(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Geometric 3D Mesh
  const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0xff5522, wireframe: true });
  const torusKnot = new THREE.Mesh(geometry, material);
  torusKnot.position.x = 12;
  scene.add(torusKnot);

  // Background Particles
  const particlesGeo = new THREE.BufferGeometry();
  const count = 700;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
  }

  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMat = new THREE.PointsMaterial({ size: 0.15, color: 0xffffff });
  const particles = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particles);

  // Responsive Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.005;
    torusKnot.rotation.y += 0.005;
    particles.rotation.y -= 0.0008;
    renderer.render(scene, camera);
  }

  animate();
}