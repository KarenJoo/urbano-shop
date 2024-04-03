import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

// Mock the react-router-dom Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ to, children }) => <a href={to}>{children}</a>, // Mock Link as anchor element
}))

describe('ProductCard', () => {
  test('renders product information correctly', () => {
    const product = {
      id: 1,
      image: { url: 'image.jpg' },
      title: 'Product title',
      description: 'Product Description',
      price: '100.00',
      discountedPrice: '80.00',
    }

    render(<ProductCard product={product} />)

    expect(screen.getByAltText('Product Image')).toBeTruthy()
    expect(screen.getByText('View Product')).toBeTruthy()
    expect(screen.getByText('View Product')).toHaveAttribute(
      'href',
      `/product/${product.id}`,
    )
  })
})
