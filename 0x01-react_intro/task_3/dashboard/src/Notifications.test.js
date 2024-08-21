import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notifications from './Notifications';

describe('<Notifications />', () => {
test('renders without crashing', () => {
render(<Notifications />);
// No assertion needed here, if this test runs, it means the component renders
});

test('renders three list items', () => {
render(<Notifications />);
// Find all list items within the Notifications component
const listItems = screen.getAllByRole('listitem');
expect(listItems).toHaveLength(3);
});

test('renders the text "Here is the list of notifications"', () => {
render(<Notifications />);
const paragraph = screen.getByText(/Here is the list of notifications/i);
expect(paragraph).toBeInTheDocument();
});
});
