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
        <div class products__box>
            <img src="${value.images.src}">
            <h4 class="products__jacket--gender">${value.categories.name}</h4>
            <h5 class="products__jacket--name">${value.name}</h5>
            <h6 class="products__jacket--prize">${value.prices.price} ${value.prices.currency_symbol}</h6>
        </div>`;
    });
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}

getProducts(productsUrl);
