import Head from 'next/head'
import Image from 'next/image'
import styles from '@component/styles/Home.module.css'
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { Html } from "@react-three/drei"

export default function Cylinder3d(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <Html>
        <div className={'title'}>
          <span className={'slogan'}>Slogan</span>
        </div>
      </Html>
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}