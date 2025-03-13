import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Main3d() {
    const modelRef = useRef();
    const { scene } = useGLTF("/duckcoin.glb"); // Helyes útvonal

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={3} />;
}

export default Main3d;