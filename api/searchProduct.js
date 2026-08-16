export async function searchProducts(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${id}`, {
      method: "GET",
    });

    const result = await response.json();

    return result.products;

  } catch (error) {
    console.log(error);
  }
}
