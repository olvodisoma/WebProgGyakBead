import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

const PhoneModel = () => {
  const { scene } = useGLTF("/phone.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const materialName = child.material.name;

        // Üveg anyagok (sötét fényes)
        if (materialName === "Material.029" || materialName === "Material.036") {
          child.material = new MeshStandardMaterial({
            color: 0x050505,     // Nagyon sötét fekete
            metalness: 0.9,
            roughness: 0.1,
            transparent: false,
          });
        }

        // Telefon burkolat, általános anyagok (fényes fekete)
        else {
          child.material = new MeshStandardMaterial({
            color: 0x111111,    // Fényes fekete
            metalness: 0.8,
            roughness: 0.2,
          });
        }
      }
    });
  }, [scene]);

  return (
    <primitive object={scene} scale={1} rotation={[0.3, -0.5, 0]} />
  );
};

export default PhoneModel;
