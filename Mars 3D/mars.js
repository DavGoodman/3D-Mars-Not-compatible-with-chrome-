console.log("heu")
//Setting Up Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//Adding Mars to the Scene
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshPhongMaterial();
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Rendering the scene
const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    mesh.rotation.y -= 0.001;
}

animate();


camera.position.z = 3


const light = new THREE.DirectionalLight(0xcccccc, 1)

light.position.set(5, 3, 5)
scene.add(light)


//Adding Materials
material.map = new THREE.TextureLoader().load('./textures/marsTexturejpg.jpg')
material.bumpMap = new THREE.TextureLoader().load('./textures/marsBump.jpg')
material.bumpScale = 0.015;

const starsGeometry = new THREE.SphereGeometry(4, 32, 32)
const starsMaterial = new THREE.MeshBasicMaterial();
const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);

starsMaterial.map = new THREE.TextureLoader().load('./textures/stars.avif')
starsMaterial.side = THREE.BackSide;

scene.add(starsMesh)

//Adding interactivity
document.addEventListener("mousemove", (e) => {
    camera.position.x = (e.x - (window.innerWidth / 2)) * 0.005;
    camera.lookAt(scene.position)
})