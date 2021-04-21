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

    productsArray.forEach(function (value) {
      document.querySelector('.product__info--container').innerHTML += `
        <div class="product__info--headings">
            <h4 class="product__info--gender">${value.categories[0].name}</h4>
            <h1 class="product__info--name">${value.name}</h1>
            <h6 class="product__info--prize">${value.prices.price}</h6>
        </div>`;
    });
  } catch {
  } finally {
  }
}

getProducts(id);
