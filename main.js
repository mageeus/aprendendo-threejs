import * as THREE from "three";
import { Wireframe } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    Wireframe: true,
});
const shadow = new THREE.ShadowMaterial();
shadow.opacity = 0.2;

const cube = new THREE.Mesh(geometry, material);
cube.receiveShadow = true;
scene.add(cube);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

//cube.position.z = -10;
camera.position.z = 5;

function animate() {
    //   cube.position.z += 1;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
