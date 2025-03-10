import * as THREE from "three";
import { Wireframe } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	50,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0, 5, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//#region renderizando linha
/*
const material = new THREE.LineBasicMaterial({ color: 0xffffff });

const ptSeta = [];
ptSeta.push(new THREE.Vector3(-10, -10, 0));
ptSeta.push(new THREE.Vector3(0, 0, 0));
ptSeta.push(new THREE.Vector3(10, -10, 0));

const geoSeta = new THREE.BufferGeometry().setFromPoints(ptSeta);

const seta = new THREE.Line(geoSeta, material);
scene.add(seta);

const ptLinha = [];
ptLinha.push(new THREE.Vector3(0, 0, 0));
ptLinha.push(new THREE.Vector3(0, -50, 0));

const geoLinha = new THREE.BufferGeometry().setFromPoints(ptLinha);

const linha = new THREE.Line(geoLinha, material);
scene.add(linha);

const quaternion = new THREE.Quaternion();
quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, -1), 0.01);

function animate() {
	seta.applyQuaternion(quaternion);
	linha.applyQuaternion(quaternion);
	renderer.render(scene, camera);
}
*/
//#endregion

//#region cubo

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

const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

//cube.position.z = -10;
//camera.position.z = 5;

//#endregion

// const quaternion = new THREE.Quaternion();
// quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, -1), 0.01);

function animate() {
	cube.rotation.z += 0.01;
//	cube.applyQuaternion(quaternion);
	renderer.render(scene, camera);
}
