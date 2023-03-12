import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useIdleTimer } from 'react-idle-timer';
import type { TextProperties } from '../types';
import { Direction } from '../types';
import RotatingText from './RotatingText';
import style from './ScreenSaver.module.css';

interface ScreenSaverProps {
  timeout?: number; // Seconds after the screensaver activates automatically, can't be used if visible prop is used
  text: string; // Text to rotate
  textProps?: TextProperties;
  visible?: boolean; // If this prop is used the visibility is controlled by the app
  className?: string; // If this is set the default canvas styles will be overwritten
}

const defaultTextProps: TextProperties = {
  direction: Direction.clockwise,
  rotationSpeed: 1.2,
  position: { x: 0, y: 0, z: -30 },
  size: 3,
  height: 1.5,
};

const defaultTimeout = 30;

const ScreenSaver = ({
  children,
  className,
  text,
  textProps = defaultTextProps,
  timeout = defaultTimeout,
  visible,
}: PropsWithChildren<ScreenSaverProps>) => {
  const [internalVisible, setInternalVisible] = useState<boolean>(!!visible);

  const { start } = useIdleTimer({
    startOnMount: false,
    onIdle: () => setInternalVisible(true),
    onActive: () => setInternalVisible(false),
    timeout: timeout * 1000,
  });

  useEffect(() => {
    if (typeof visible === 'undefined') start();
  }, []);

  if (internalVisible)
    return (
      <div className={className || style.canvas}>
        <Canvas>
          <Environment background={false} blur={0.8} preset="sunset" />
          <mesh>
            <RotatingText text={text} textProps={textProps} />
          </mesh>
        </Canvas>
        {children}
      </div>
    );
  return null;
};

export default ScreenSaver;