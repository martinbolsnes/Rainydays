const productsUrl = '';

async function getProducts() {
  try {
    const response = await fetch(
      'https://api.martinbols.tech/wp-json/wc/store/products'
    );
    const jsonFromServer = await response.json();
    const productsResults = jsonFromServer;
    console.log(productsResults);

    for (let i = 0; i < productsResults.length; i++) {
      document.querySelector('.newArrivals').innerHTML += `  
      <div class card1>
      <img class="jacket1" src="${productsResults[i].images[0].src}">
      <h4 class="jacket__gender">${productsResults[i].categories[0].name}</h4>
      <a href="product.html?id=${productsResults[i].id}">
      <h5 class="jacket__name">${productsResults[i].name}</h5>
      </a>
      <h6 class="jacket__prize">${productsResults[i].prices.price} ${productsResults[i].prices.currency_symbol}</h6>
        </div>`;

      if (i === 3) {
        break;
      }
    }
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
