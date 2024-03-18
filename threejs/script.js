/* import * as THREE from "./three.module.min.js";
// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1;
// mesh.scale.x = 2;
// mesh.scale.y = 3;
// mesh.position.x = 1;
// mesh.position.y = 1;
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 1.2;
// scene.add(mesh);

// Mesh Two
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.y = 2;
// scene.add(meshT);

group.add(mesh, meshT);
group.position.x = 1;
scene.add(group);

//AxesHelper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// near value is 1 far value is 2000
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGL1Renderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer  size
renderer.render(scene, camera); //display what the camera in the scene captured
 */

////////////////////////////////////////////////////////////////////////////////

import * as THREE from "./three.module.min.js";
//Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene();

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = -3;

scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// near value is 1 far value is 2000
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGL1Renderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer  size

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
  //GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  //Update Rotation on X Axis
  mesh.rotation.y = elapsedTime * Math.PI * 2;

  //Renderer
  renderer.render(scene, camera); //display what the camera inside the scene captured

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();

//function will get called 60 time per second on some devices 0.01 * 60 = 0.6 on X
//function will get called 120 time per second on some devices 0.01 * 120 = 1.2 on X
//fps stands for frame per second
