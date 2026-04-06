
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}
//setting up camera then attaching it to scene
const canvas = document.querySelector('canvas#three-ex')//selecting canvas in index
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)//creating camera
camera.position.z = 3;//moving it from 0,0,0 position
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas //deciding where it should be displayed, in this case, the canvas element in the html
})
renderer.setSize(sizes.width, sizes.height)
const controls = new OrbitControls(camera, canvas)
//material
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshStandardMaterial({}) 
//objects

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -2

//NEW for casting shadows add a plane:)
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)


scene.add(plane)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = -.5;
plane.position.z = 1;
plane.position.x = -1;

//add light
const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)
//intensity and color

ambientLight.color = new THREE.Color(0xff0000)
ambientLight.intensity = 1.5;    

//add another light
const directionalLight = new THREE.DirectionalLight()
directionalLight.color = new THREE.Color(0xFFFFF)
scene.add(directionalLight)
directionalLight.position.set(-5,5, 0)

// //add another light
//  const pointLight = new THREE.PointLight(0xff9000, 1.5)
//   scene.add(pointLight)
//   console.log(pointLight.position) // default position is 0,0,0
//     //position
//     pointLight.position.set(0,1,0)
//      //set the intensity too
//       pointLight.intensity = 2

//add another light
const spotLight = new THREE.SpotLight(0x78ff00, 4.5, 10, Math.PI * 0.1, 0.25, 1)
spotLight.position.set(0, 2, 3)
scene.add(spotLight)
scene.add(spotLight.target) // first add the target to the scene
//u update by simply changing its position
spotLight.target.position.x = -2

window.requestAnimationFrame(animate);

 function animate(timer) {
  controls.update();

   let x = directionalLight.position.x
  x+=.02
  directionalLight.position.set(x,5, 0)
  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
  
}

  const mouse = new THREE.Vector2();
  window.addEventListener("mousemove", function(event) {
  mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
  mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
  //console.log(mouse);
  });