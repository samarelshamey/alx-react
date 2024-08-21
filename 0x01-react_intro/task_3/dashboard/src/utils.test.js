import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility Functions', () => {
test('getFullYear returns the current year', () => {
// Get the current year
const currentYear = new Date().getFullYear();
// Assert that getFullYear returns the current year
expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns correct string based on argument', () => {
// Test with isIndex true
expect(getFooterCopy(true)).toBe('Holberton School');
// Test with isIndex false
expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct notification string', () => {
const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
expect(getLatestNotification()).toBe(expectedNotification);
});
});
