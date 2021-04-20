const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getProducts(productId) {
  try {
    const response = await fetch(
      'http://api.martinbols.tech/wp-json/wc/store/products/' + productId
    );
    const jsonResults = await response.json();
    const productsArray = jsonResults;
    console.log(productsArray);

    document.title = productsArray.value.name;

    document.querySelector(
      '.product__info--name'
    ).innerHTML = `${productsArray.name}`;
    document.querySelector(
      '.product__info--prize'
    ).innerHTML = `${productsArray.prices.price}`;
  } catch {
  } finally {
  }
}

getProducts(id);
