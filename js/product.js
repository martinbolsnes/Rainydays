const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getProducts(productId) {
  try {
    const response = await fetch(
      'https://api.martinbols.tech/wp-json/wc/store/products/' + productId
    );
    const jsonResults = await response.json();
    const productsObject = jsonResults;
    console.log(productsObject);

    document.title = productsObject.name;
    document.querySelector(
      '.product__info--name'
    ).innerHTML = `${productsObject.name}`;
    document.querySelector(
      '.product__info--prize'
    ).innerHTML = `${productsObject.prices.price} ${productsObject.prices.currency_symbol}`;
    document.querySelector(
      '.product__info--gender'
    ).innerHTML = `${productsObject.categories[0].name}`;

    document.querySelector(
      '.product__img--container'
    ).innerHTML = `<img class="product__img" src="${productsObject.images[0].src}">`;
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

getProducts(id);
