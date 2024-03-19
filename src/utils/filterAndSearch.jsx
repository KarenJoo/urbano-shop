export function filterProducts(products, searchTerm, displaySale) {
  return products.filter((product) => {
    const displaySearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    if (displaySale) {
      return (
        displaySearch &&
        product.discountedPrice &&
        product.discountedPrice !== product.price
      )
    } else {
      return displaySearch
    }
  })
}

export function searchProducts(products, searchTerm) {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
}
