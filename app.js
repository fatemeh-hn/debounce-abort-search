const myInput = document.getElementById("myInput");
const productContainer = document.getElementById("productsContainer");


async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    const result = await response.json();

    console.log(result);

    renderProducts(result.products);

  } catch (error) {
    console.log(error);
  }
}

function renderProducts(products) {
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");

    const image = document.createElement("img");
    image.src = product.images;
    image.width = 150;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const brand = document.createElement("p");
    brand.textContent = product.brand;

    const rating = document.createElement("p");
    rating.textContent =`🌟 ${product.rating}`;


    const availabilityStatus = document.createElement("p");
    availabilityStatus.textContent = product.availabilityStatus;

    const description = document.createElement("span");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;


    

    card.append(image, title,brand, price ,rating,availabilityStatus,description);

    productContainer.appendChild(card);
  });
}

fetchProducts()





// function debounce(callback, delay) {
//   let timeout;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(callback, delay);
//   };
// }

// myInput.addEventListener(
//   "input",
//   debounce(() => {
//     fetchProducts();
//   }, 3000)
// );

// let controller;
// async function fetchProducts() {
//   if (controller) {
//     controller.abort();
//   }

//   controller = new AbortController();

//   try {
//     const response = await fetch("https://dummyjson.com/products", {
//       signal: controller.signal,
//     });

//     const result = await response.json();

//     console.log(result);
//   } catch {
//     console.log("Request Cancelled");
//   }
// }

