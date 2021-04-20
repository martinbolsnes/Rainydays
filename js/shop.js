const productsUrl = '';

async function getProducts() {
  try {
    const response = await fetch(
      'http://api.martinbols.tech/wp-json/wc/store/products'
    );
    const jsonFromServer = await response.json();
    console.log(jsonFromServer);
    const productsResults = jsonFromServer;

    productsResults.forEach(function (value) {
      document.querySelector('.products').innerHTML += `
      <a class="products_link" href="product.html?id=${value.id}"  
      <div class products__box>
            <img class="products__jacket1" src="${value.images.src}">
            <h4 class="products__jacket--gender">${value.categories.name}</h4>
            <h5 class="products__jacket--name">${value.name}</h5>
            <h6 class="products__jacket--prize">${value.prices.price} ${value.prices.currency_symbol}</h6>
        </div>
        </a>`;
    });
  } catch {
  } finally {
  }
}

getProducts(productsUrl);
