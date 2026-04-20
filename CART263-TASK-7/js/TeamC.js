import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js' //import gltf loader

// Planet class for Team C
export class PlanetC {
    constructor(scene, orbitRadius, orbitSpeed) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;

        //Create planet group
        this.group = new THREE.Group()
              
        // Create planet
        //STEP 1:
        //TODO: Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).

            //material
        const geometryC = new THREE.SphereGeometry(2,15,12)
        const geometryC1 = new THREE.SphereGeometry(1,15,12)
        
        //TODO: Give it a custom material using THREE.MeshStandardMaterial.
        const materialC = new THREE.MeshStandardMaterial({ color: "#64ff56" }) 
        const materialC1 = new THREE.MeshStandardMaterial({ color: "#43f9ff" }) 

        const mesh = new THREE.Mesh(geometryC,materialC)
        const mesh2 = new THREE.Mesh(geometryC1,materialC1)

        //position
        // mesh.position.set(0, 0, -20);
        // mesh2.position.set(0, 3.4, -2);

            //add light
        const ambientLight = new THREE.AmbientLight()
            scene.add(ambientLight)
        //intensity and color
        
        ambientLight.color = new THREE.Color("#ffffff")
        ambientLight.intensity = 0.5;
        
        //TODO: Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
       
       
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        //TODO: Add the planet mesh to the planet group.

        this.group.add(mesh)

        
        //STEP 2: 
        //TODO: Add from 1 to 3 orbiting moons to the planet group. 

        // mesh.add(mesh2)

        //TODO: The moons should rotate around the planet just like the planet group rotates around the Sun.

        //STEP 3:
        //TODO: Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.

            //initate GLTF
        
            this.loadModels()
            //TODO: Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.
            
            //STEP 4:
            //TODO: Use raycasting in the click() method below to detect clicks on the models, and make an animation happen when a model is clicked.
            //TODO: Use your imagination and creativity!
            this.scene.add(this.group);
            
        }
        async loadModels(){

        const gltfLoader = new GLTFLoader();

         //null cuz theyre not loaded yet
        let gltfUfo = null;



        try {
           gltfUfo = await gltfLoader.loadAsync('models/ufo/ufo.gltf')
           console.log(gltfUfo)
           this.model = gltfUfo.scene.children[0]
           this.group.add(this.model)

           //position for model
        //    model.position.y = 10
        //    model.position.z = 10
        //    model.position.x = 10
        
        }

        catch (error){
        console.log(error.message)
        }

        }


   
    update(delta) {
        // Orbit around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;

        this.model.position.z = Math.sin(this.angle) * (this.orbitRadius/4);
        this.model.position.x = Math.sin(this.angle) * (this.orbitRadius/4);
        
        // Rotate planet
        this.group.rotation.y += delta*0.5;

        //TODO: Do the moon orbits and the model animations here.
    }

    click(mouse, scene, camera) {
        //TODO: Do the raycasting here.
        const raycaster = new THREE.Raycaster()

        
        //ray will start somewhere on left of the spheresx
        //set direction only (has length ==1)
        rayDirection.normalize()
        console.log(rayDirection.length())
        raycaster.set(rayOrigin, rayDirection) //raycaster has been oriented

        //cast a ray - check intersection with obj1, obj2 and obj 3 
        const intersects = raycaster.intersectObjects([mesh, mesh2, this.model])
        console.log(intersects)


        const mouse = new THREE.Vector2();
        window.addEventListener("mousemove", function(event) {
        mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
        mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
        //console.log(mouse);
  });
    }
}

