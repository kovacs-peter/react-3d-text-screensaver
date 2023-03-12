# React 3D Text Screensaver

The super useful package you always wished you had.

## Features

- It can dispaly a rotating 3d text mimicking the one you could set in Windows.
- You can control the visibility of it with the `visible` prop.
- Set an inactivity timeout in seconds with the `timeout` prop to start the animation. Defaults to 30 sec (Only available if the `visible` prop is NOT set).

## Installation

### Yarn

```
yarn add react-3d-text-screensaver
```

### NPM

```
npm install react-3d-text-screensaver
```

## Usage

```
import { ScreenSaver } from react-3d-text-screensaver';

function Component() {
  ...
  return (
    <ScreenSaver text="Save the Screen" timeout={3} />
  );
}
```

## Properties

### `timeout` - number

Optional  
Default: `30`  
Time in seconds before the screensaver is displayed.
Available only if `visible` is `undefined`.

### `text` - string

Required  
The text of the screensaver.

### `textProps` - TextProperties

Otional  
Properties controlling the aspects of the 3D text. By default the text is in the middle.  
`TextProperties`:

```
TextProperties = {
  direction: Direction;
  rotationSpeed: number;
  position: { x: number; y: number; z: number };
  size: number;
  height: number;
};

enum Direction {
  clockwise = -1,
  counterClockwise = 1,
}
```

### `visible` - boolean

Optional  
If set it controls the visibility of the component.

### `className` - string

Optional  
If set the default class and styles are not applied to the container of the Component.
By default the container has these styles:

```
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
```

### `children` - ReactNode

Otional  
Children are displayed under the text. It is advised to control the appearence with `fixed` positioning, to keep the rotating text in the middle of the screen.

## Author

[Peter Kovacs](https://github.com/kovacs-peter)
