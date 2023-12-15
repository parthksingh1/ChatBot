import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WaveAnimation: React.FC = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const wave = new THREE.Object3D();

  useEffect(() => {
    const init = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Set up a simple plane as a background
      const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      // Customize the wave geometry here
      const wavesMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const wavesGeometry = new THREE.BufferGeometry();
      const wavesVertices = [];

      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          const x = i - 50;
          const y = j - 50;
          const z = Math.sin((x * x + y * y) / 100) * 5;
          wavesVertices.push(x, y, z);
        }
      }

      wavesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(wavesVertices, 3));
      const wavesMesh = new THREE.Line(wavesGeometry, wavesMaterial);
      wave.add(wavesMesh);

      scene.add(wave);

      camera.position.z = 5;

      animate();
    };

    const animate = () => {
      wave.rotation.z += 0.005;

      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    init();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div />;
};

export default WaveAnimation;
