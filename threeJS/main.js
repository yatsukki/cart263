// library ref: because we are loading a module
// the asterisk means "everything", so import everything as THREE from three inside my html file script
import * as THREE from 'three';

//SCENE
const scene = new THREE.Scene() 


//TURN ON AXES HELPER
//https://threejs.org/docs/?q=Axes#AxesHelper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;

//A: the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
//B: the material
// const material = new THREE.MeshBasicMaterial({ color: 0x800080 })
// //C: put together
// const mesh = new THREE.Mesh(geometry, material)

// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5
// // just use Math.PI for rotations and dont question it
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25


// //D: ADD TO THE SCENE
// scene.add(mesh)


const sizes = {
    ///think of it as a comp in AE
    width: 800,
    height: 600
}
//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

//move camera
camera.position.z = 3




//Access the Canvas
const canvas = document.querySelector('canvas#three-ex')
//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)

// const mesh_2 = new THREE.Mesh(geometry, material)
// scene.add(mesh_2)
// mesh_2.position.x = 1.5
// mesh_2.position.y = 1.25
// mesh_2.position.z = -1

// const material = new THREE.MeshBasicMaterial()

// //loading texture
// const loader = new THREE.TextureLoader();
// const water_texture = await loader.loadAsync( 'textures/Ice002_1K-JPG_Color.jpg' );
// //need to ensure that the textures are encoded correctly - mapping the colors correctly.
// water_texture.colorSpace = THREE.SRGBColorSpace;

// //for applying texture
//   const material = new THREE.MeshBasicMaterial({
//     map: water_texture
// })

// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     material
// )
// sphere.position.x = - 1.5

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1),
//     material
// )
  const group = new THREE.Group()
  scene.add(group)


const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000,wireframe: false })
)
cube1.position.x = 1.5
group.add(cube1)
/*https://threejs.org/docs/#SphereGeometry*/

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry( .75, 32 , 16 ),
  new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: false})
)
sphere.position.y = 1
sphere.position.x = 1
// group.add(sphere)
scene.add(sphere)

group.position.x = -2
group.rotation.x = Math.PI *.25
// group.scale.x = .5
// group.scale.y = .5
// group.scale.z = .5
group.scale.set(.5,.5,.5)
//could do
//camera.lookAt(group.position)

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.5, 0.3, 16, 32),
//     material
// )
// torus.position.x = 1.5

// scene.add(sphere, plane, torus)


// camera.lookAt(mesh_2.position)
let elapsedtime = 0
window.requestAnimationFrame(animate)
function animate(timer){

    
    let deltaTime = timer - elapsedtime
    console.log(deltaTime)
    elapsedtime = timer 
    cube1.rotation.y+=0.1
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
    // Update objects -> elapsed time increases ...
  sphere.position.x = Math.cos(elapsedtime/1000)
  sphere.position.y = Math.sin(elapsedtime/1000)
}

//we just commented out the render down there and put it inside the animation function that way it calls the renderer every single frame

//render:
// renderer.render(scene, camera)


