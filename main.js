import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup
var aboutTablinks = document.querySelectorAll("#about .tab-links");
        var aboutTabcontents = document.querySelectorAll("#about .tab-contents");
        var personalTablinks = document.querySelectorAll("#personal .tab-links");
        var personalTabcontents = document.querySelectorAll("#personal .tab-contents");
      
        function openTab(tabname, tablinks, tabcontents) {
          for (tablink of tablinks) {
            tablink.classList.remove("active-link");
          }
          for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
          }
          event.currentTarget.classList.add("active-link");
          document.getElementById(tabname).classList.add("active-tab");
        }
      
        for (aboutTablink of aboutTablinks) {
          aboutTablink.addEventListener("click", function () {
            openTab(this.getAttribute("data-tab"), aboutTablinks, aboutTabcontents);
          });
        }
      
        for (personalTablink of personalTablinks) {
          personalTablink.addEventListener("click", function () {
            openTab(
              this.getAttribute("data-tab"),
              personalTablinks,
              personalTabcontents
            );
          });
        }

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

const container = document.getElementById('sphere-container');
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Create sphere
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshPhongMaterial({
    color: 0x27bbbb,
    wireframe: true,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 25, 25);
scene.add(pointLight);

// Position camera
camera.position.z = 15;

// Animation
function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

animate();
