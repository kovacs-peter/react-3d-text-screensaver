import { render } from '@testing-library/react';
import React from 'react';
import 'jest-canvas-mock';
import ScreenSaver from '../components/ScreenSaver';

class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
}

window.ResizeObserver = ResizeObserver;

describe('<ScreenSaver />', () => {
  it('renders correctly', () => {
    const { container } = render(<ScreenSaver visible text="test text" />);
    expect(container).toMatchSnapshot();
  });
});
