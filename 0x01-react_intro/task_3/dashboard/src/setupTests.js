// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';
import { createSerializer } from 'enzyme-to-json';

// Configure Enzyme with the React 18 adapter
configure({ adapter: new Adapter() });

// Optionally, add a serializer for prettier snapshots
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));