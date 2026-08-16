export async function searchProducts(query , mySignal) {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
      method: "GET", signal: mySignal,
    });

    const result = await response.json();

    return result.products;

  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Previous search was cancelled");
      return [];
    }

    console.log(error);
  }
}
