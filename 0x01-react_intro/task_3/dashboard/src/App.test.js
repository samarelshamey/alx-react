import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('<App />', () => {
test('renders without crashing', () => {
render(<App />);
// No assertion needed here, if this test runs, it means the component renders
});

test('renders a div with the class App-header', () => {
render(<App />);
const headerDiv = screen.getByRole('banner'); // Use role for semantic meaning
expect(headerDiv).toHaveClass('App-header');
});

test('renders a div with the class App-body', () => {
render(<App />);
// Find the element containing the text and then check the parent
const bodyDiv = screen.getByText(/Login to access the full dashboard/i);
expect(bodyDiv).toBeInTheDocument();
// Ensure the div's class
expect(bodyDiv.closest('div')).toHaveClass('App-body');
});

test('renders a div with the class App-footer', () => {
render(<App />);
// Find the element containing the text and then check the parent
const footerDiv = screen.getByText(/©/i);
expect(footerDiv).toBeInTheDocument();
// Ensure the div's class
expect(footerDiv.closest('div')).toHaveClass('App-footer');
});
});
