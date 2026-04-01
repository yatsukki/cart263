
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
const controls = new OrbitControls(camera, canvas)

//objects

const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object1.position.x = -2

const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object2.position.x = .5


const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

scene.add(object1,object2,object3)

//to update positions for intersection checking
  object1.updateMatrixWorld()
  object2.updateMatrixWorld()
  object3.updateMatrixWorld()


//raycast
const raycaster = new THREE.Raycaster()
// const rayOrigin = new THREE.Vector3(- 3, 0, 0)
const rayDirection = new THREE.Vector3(10, 0, 0)//reduce magnitude BUT keep direction
console.log(rayDirection.length())
//set direction only (has length ==1)
rayDirection.normalize()
console.log(rayDirection.length())
// raycaster.set(rayOrigin, rayDirection) //raycaster has been oriented

 //then we gotta cast a ray - check intersection with ONLY object 1 with the help if intersectobject and intersectObjects for multpiple ones, and make sure it's in an array bracket
const intersect = raycaster.intersectObjects([object1, object2, object3])
console.log(intersect)


/// FOR MOUSE ENTER AND MOUSE LEAVE
let currentIntersectedObj = null



window.requestAnimationFrame(animate);

 function animate(timer) {
  controls.update();
raycaster.setFromCamera(mouse,camera)
    // object1.position.y = Math.sin(timer/1000 *.5 ) * 3
    // object2.position.y = Math.sin(timer/1000  *.4) * 3
    // object3.position.y = Math.sin(timer/1000 *.3) *  3


    // const objectsToTest = [object1, object2, object3]
    // const intersects = raycaster.intersectObjects(objectsToTest)

    
    const objectsToTest = [object1, object2, object3]
    const intersects = raycaster.intersectObjects(objectsToTest)

    

    for(const object of objectsToTest)
    {
        object.material.color.set('#ff0000')
    }

    for(const intersect of intersects)
    {
        intersect.object.material.color.set('#0000ff')
    }


  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
  
}

  const mouse = new THREE.Vector2();
  window.addEventListener("mousemove", function(event) {
  mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
  mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
  //console.log(mouse);
  });