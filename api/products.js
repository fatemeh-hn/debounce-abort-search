export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const result = await response.json();

    console.log(result);

    return result.products;

  } catch (error) {
    console.log(error);
  }
}