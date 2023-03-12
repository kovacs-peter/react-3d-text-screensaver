import React, { useEffect, useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import tahoma from './Tahoma_Regular.json';
import { TextProperties } from '../types';

interface RotatingTextProps {
  text: string;
  textProps: TextProperties;
}

const RotatingText = ({ text, textProps }: RotatingTextProps) => {
  const { size, height, position, rotationSpeed, direction } = textProps;

  const font = new FontLoader().parse(tahoma);
  extend({ TextGeometry });
  const textRef = useRef<any>();
  useEffect(() => {
    if (textRef.current) textRef.current.geometry.center();
  }, [textRef]);

  useFrame(({ clock }) => {
    textRef.current.rotation.y = clock.elapsedTime * rotationSpeed * direction;
  });

  return (
    <mesh ref={textRef} position={[position.x, position.y, position.z]}>
      {/* @ts-ignore */}
      <textGeometry attach="geometry" args={[text, { font, size, height }]} />
      <meshPhysicalMaterial attach="material" color="white" metalness={1} roughness={0.15} />
    </mesh>
  );
};

export default RotatingText;
