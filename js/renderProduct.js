import { fetchProducts } from "../api/products.js";
import { searchProducts } from "../api/searchProduct.js";

const myInput = document.getElementById("myInput");
const productContainer = document.getElementById("productsContainer");

let debounceTimer;


export function renderProducts(products) {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "w-[340px] rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col";
    card.style.fontFamily = "Poppins, sans-serif";

    const image = document.createElement("img");
    image.src = product.images[0]
    image.className = "h-64 w-full object-contain bg-gray-100 p-6";

    const content = document.createElement("div");
    content.className =
      "p-6 flex flex-col flex-1";

    const title = document.createElement("h3");
    title.textContent = product.title;
    title.className =
      "text-2xl font-bold text-gray-900 min-h-[72px]";

    const brand = document.createElement("p");
    brand.textContent = product.brand;
    brand.className = "text-gray-500 mt-2";

    const rating = document.createElement("p");
    rating.textContent = `🌟 ${product.rating}`;
    rating.className = "text-yellow-300 font-medium";


    const availabilityStatus = document.createElement("p");
    availabilityStatus.textContent = product.availabilityStatus;
    if (product.availabilityStatus === "In Stock") {
      availabilityStatus.className = "text-green-600 font-medium";

    } else {
      availabilityStatus.className = "text-red-600 font-medium";

    }

    const description = document.createElement("p");
    description.textContent = product.description;
    description.className =
      "mt-4 text-gray-600 text-sm leading-7 flex-1";

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    price.className = "text-3xl font-bold text-gray-900";

    const priceRating = document.createElement("div");
    priceRating.className =
      "flex justify-between items-center";




    content.append(
      title,
      brand,
      priceRating,
      availabilityStatus,
      description
    );
    priceRating.append(price, rating);
    card.append(image, content);

    productContainer.appendChild(card);
  });
}
async function initProduct() {
  const product = await fetchProducts();
  renderProducts(product);



}

await initProduct()

myInput.addEventListener("input", async () => {
  clearTimeout(debounceTimer);
  const query = myInput.value.trim();

  debounceTimer = setTimeout(async () => {
    if (!query) {
    await initProduct();
    return
  }

  const products = await searchProducts(query);
  renderProducts(products);

  }, 500);
});
