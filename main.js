const liNavEmail = document.querySelector('li.navbar-email');
let divContainerDesktopMenu = document.querySelector('.desktop-menu');
let menuHamIcon = document.querySelector('.menu');
let menuCarIcon = document.querySelector('.navbar-shopping-cart');
let mobileMenu = document.querySelector('.mobile-menu');
let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
let cardsContainers = document.querySelector('.card-container');


liNavEmail.addEventListener('click', toggleContainerDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside)

function toggleContainerDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  divContainerDesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'iPhone XS',
  price: 390,
  image: 'https://i.pinimg.com/564x/81/52/6f/81526fe0554c6539b501f5f538e93e2b.jpg',
});
productList.push({
  name: 'iPhone 11',
  price: 480,
  image: 'https://i.pinimg.com/564x/b6/6e/01/b66e0150d45f01045130b89a5b910848.jpg',
});
productList.push({
  name: 'iphone 11 Pro Max',
  price: 500,
  image: 'https://i.pinimg.com/564x/3c/9e/31/3c9e31903b3ee6c1f4e71a0f8451e43a.jpg',
});
productList.push({
  name: 'iPhone 13 Pro',
  price: 1000,
  image: 'https://i.pinimg.com/564x/0c/aa/0a/0caa0adcafc3d171cfb11f7fe9fa5ea5.jpg',
});
productList.push({
  name: 'Apple Watch Serie 7',
  price: 439,
  image: 'https://i.pinimg.com/564x/06/83/14/068314dd27c9973c9f9dd98b37e36294.jpg',
});
productList.push({
  name: 'Mac Book Pro',
  price: 1200,
  image: 'https://i.pinimg.com/564x/ac/4c/ec/ac4cec46ed0858dc0a691afec072a604.jpg',
});

function renderProducts(products) {
  for (product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `${product.price}$`;

    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;

    productInfoDiv.append(productPrice, productName);

    const productFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');

    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productFigure);

    productCard.append(productImg, productInfo);

    cardsContainers.appendChild(productCard);

  }
}

renderProducts(productList);