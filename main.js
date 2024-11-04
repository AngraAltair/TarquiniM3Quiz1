import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Lights
const light = new THREE.HemisphereLight(0x84c2ff, 0x00192a, 0.25);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0x7a838d, 1);
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0x0096ff, 200, 100);
scene.add(pointLight);

//Load texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/textures/tiles.jpg');
const pooltexture = textureLoader.load('assets/textures/pool.jpg');
const wtrrflltexture = textureLoader.load('assets/textures/waterfall.jpg');
const walls = textureLoader.load('assets/textures/wall.jpg');

//Floor wiht textures
const floorGeometry = new THREE.BoxGeometry(9.75, 20, 0.75);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x84c2ff, map: pooltexture });  // Apply texture as map
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

//Walls with textures
const rightWallGeometry = new THREE.BoxGeometry(10, 10, 0.1);
const rightWallMaterial = new THREE.MeshPhongMaterial({ color: 0x7fe3cf, map: walls });
const rightWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
rightWall.position.set(0, 5, -10);
scene.add(rightWall);

const leftWallGeometry = new THREE.BoxGeometry(10, 10, 0.1);
const leftWallMaterial = new THREE.MeshPhongMaterial({ color: 0x7fe3cf, map: walls });
const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
leftWall.position.set(0, 5, 10);
scene.add(leftWall);

const backWallGeometry = new THREE.BoxGeometry(0.1, 10, 20);
const backWallMaterial = new THREE.MeshPhongMaterial({ color: 0x7fe3cf, map: walls });
const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
backWall.position.set(-5, 5, 0);
scene.add(backWall);

//Objects with textures
const sideGeometry = new THREE.BoxGeometry(8, 1, 2);
const sideMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, normalMap: texture });
const sidePool = new THREE.Mesh(sideGeometry, sideMaterial);
sidePool.position.set(-1, 0.25, 9);
scene.add(sidePool);

const side2Geometry = new THREE.BoxGeometry(8, 1, 2);
const side2Material = new THREE.MeshStandardMaterial({ color: 0xffffff, normalMap: texture });
const side2Pool = new THREE.Mesh(side2Geometry, side2Material);
side2Pool.position.set(-1, 0.25, -9);
scene.add(side2Pool);

const side3Geometry = new THREE.BoxGeometry(2, 1, 16);
const side3Material = new THREE.MeshStandardMaterial({ color: 0xffffff, normalMap: texture });
const side3Pool = new THREE.Mesh(side3Geometry, side3Material);
side3Pool.position.set(4, 0.25, 0);
scene.add(side3Pool);

const side4Geometry = new THREE.BoxGeometry(2, 1, 10.75);
const side4Material = new THREE.MeshStandardMaterial({ color: 0xffffff, normalMap: texture });
const side4Pool = new THREE.Mesh(side4Geometry, side4Material);
side4Pool.position.set(-4, 0.25, 0);
scene.add(side4Pool);

const decorGeometry = new THREE.BoxGeometry(1, 5, 10);
const decorMaterial = new THREE.MeshStandardMaterial({ color: 0x2b2f33, normalMap: texture });
const decor = new THREE.Mesh(decorGeometry, decorMaterial);
decor.position.set(-4, 6, 0);
scene.add(decor);

const wtrfllGeometry = new THREE.BoxGeometry(0.2, 5, 2);
const wtrfllMaterial = new THREE.MeshPhongMaterial({ color: 0x7fe3cf, map: wtrrflltexture });
const wtrfll = new THREE.Mesh(wtrfllGeometry, wtrfllMaterial);
wtrfll.position.set(-3, 4, 6);
scene.add(wtrfll);

const wtrfll2Geometry = new THREE.BoxGeometry(0.2, 5, 2);
const wtrfll2Material = new THREE.MeshPhongMaterial({ color: 0x7fe3cf, map: wtrrflltexture });
const wtrfll2 = new THREE.Mesh(wtrfll2Geometry, wtrfll2Material);
wtrfll2.position.set(-3, 4, -6);
scene.add(wtrfll2);

//Animate and render
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

//Camera position
camera.position.set(15, 12, 0);
camera.lookAt(0, 0, 0);

animate();
