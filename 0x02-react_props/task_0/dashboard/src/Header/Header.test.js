import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('should render an img tag', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Holberton')).toBeInTheDocument();
  });

  it('should render an h1 tag', () => {
    const { getByText } = render(<Header />);
    expect(getByText('School dashboard')).toBeInTheDocument();
  });
});