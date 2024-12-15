import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialisation de la scène, de la caméra et du renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Ajouter le renderer au conteneur
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Création d'une géométrie animée (particules)
    const particleCount = 5000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotation des particules pour un effet dynamique
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    // Ajuster la caméra
    camera.position.z = 30;
    animate();

    // Nettoyage
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen relative text-white overflow-hidden flex items-center justify-center">
      {/* Conteneur pour Three.js */}
      <div ref={mountRef} className="absolute inset-0 z-0"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Trouvez <span className="text-yellow-300">le chemin</span> vers votre prochaine opportunité avec <span className="text-teal-300">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Une plateforme innovante pour booster votre carrière et décrocher votre prochain emploi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate('/job-search')}
            className="rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Chercher un emploi
          </button>
          <Link to={'/resume'}>
            <Button variant="secondary" className="text-lg px-8 py-3">
              Créer un CV
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;
