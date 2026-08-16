export async function searchProducts(query) {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
      method: "GET",
    });

    const result = await response.json();

    return result.products;

  } catch (error) {
    console.log(error);
  }
}
