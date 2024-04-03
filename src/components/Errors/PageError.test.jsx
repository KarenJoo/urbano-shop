import React from "react";
import { render } from "@testing-library/react";
import PageError from './PageError';

describe('PageError component', () => {
    test('renders error message', () => {
        const { getByText } = render(<PageError />);

        const errorMessage = getByText(/Page not found/i);

        expect(errorMessage).toBeTruthy();
    });
});