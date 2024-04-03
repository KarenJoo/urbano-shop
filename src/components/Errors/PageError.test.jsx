import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import PageError from './PageError';

describe('PageError component', () => {
    test('renders error message', () => {
        const { getByText } = render(<PageError />);
        const expectedErrorMessage = 'Page not found. The page you are looking for does not exist or has been moved';

        const errorMessage = getByText(/Page not found/i);

        expect(errorMessage).toBeTruthy();
        expect(errorMessage).toHaveTextContent(expectedErrorMessage);
    });
});