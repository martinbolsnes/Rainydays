const productsUrl = '';

async function getProducts() {
  try {
    const response = await fetch(
      'https://api.martinbols.tech/wp-json/wc/store/products'
    );
    const jsonFromServer = await response.json();
    const productsResults = jsonFromServer;
    console.log(productsResults);

    document.querySelector('.loading').classList.add('hide');

    productsResults.forEach(function (value) {
      document.querySelector('.products').innerHTML += `  
      <div class products__box>
            <img class="products__jacket1" src="${value.images[0].src}">
            <h4 class="products__jacket--gender">${value.categories[0].name}</h4>
            <a href="product.html?id=${value.id}"
            <h5 class="products__jacket--name">${value.name}</h5>
            </a>
            <h6 class="products__jacket--prize">${value.prices.price} ${value.prices.currency_symbol}</h6>
        </div>`;
    });
  } catch {
  } finally {
  }
}

getProducts(productsUrl);
