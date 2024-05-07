function showSideBar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSideBar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


var cart = {}

const product = [
  {
    id: 1,
    name: 'Heirloom tomato',
    image:
      'https://www.figma.com/file/QAzjZfVeef9gTmfRssJmBh/image/d343320d53ff6db3442c23537fe73d0771cdb929',
    price: '5.99',
    description: 'Grown in San Juan Capistrano, CA',
  },
  {
    id: 2,
    name: 'Sweet onion',
    image:
      'https://s3-alpha-sig.figma.com/img/706c/77bb/200aaa186b03d756f101124f8f921a28?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCW5J72qbLA48GTZmJsn86bhP61xQZbVgaw35AuyloR7O~KKxQyNmF~u-C~hENF6xYzP7ZDsS~2ax4HInpWeFMI1Z6u8IGkp-qH~7Sbfpj79gmh2CMf~4xvi269oSkt9rETYZTmKJw5C1EyVhInbszqC5KhhVFsE7KFqABT0jDZi2ChzwIyo4DbT5iybuiffRqktHFLrcST6eZP6wHrhH4cUtIK7becFivU3CzieWBtn724ZxvD6rhbbrZcz2qfquPNnI8QIEz2iE2sfOwkqxR1~XDjUgSeooYpj6Q6G5F4M5DGaEmWWRHU4VUkvmDvFazRpkXdYz5sEj8AqRXHATg__',
    price: '2.99',
    description: 'Grown in San Juan Capistrano, CA',
  },
  {
    id: 3,
    name: 'Organic ginger',
    image:
      'https://s3-alpha-sig.figma.com/img/8a61/5eb8/356467b743fd267765421ebcf3f00ae7?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P4~RIoh0HsIRZdlI2J7e9pPfQNlgqZwXVkzD-TuWbTHadZFzGFkt2Z~clSOZh3oUtJebz4PkPwbwOB44s-loutHEM3xpAouxEWKjLWjHAW4h-7rscDDv8pGNrVTtATkx0sl4xd1yiAsaFWb3RQ-snLCVCOyB8ZRnDH6d5J1ta2PNCDIYf7UhXwLRAu~IQzCuzqQkw2-LzaRMFYvel-CI-vp4EXyYSkh8ljVIFrYc2ZAeIjlPE66rqDUdGa~02-mVZGQQ82hZywjiLb-TpOfhJjlJ0roPERxyrxOm7b9fTiJzCRxn~dE4InMb~I9CQuYcDKzOw7GDSp3X7i6B~aoJkw__',
    price: '12.99',
    description: 'Grown in San Juan Capistrano, CA',
  },
]

let cartCount = JSON.parse(localStorage.getItem('cart'))
if (cartCount === null) {
  cartCount = {}
} else {
  cart = cartCount
}

const addToCart = (product) => {
  if (cart[product.id] !== undefined && cart[product.id].quantity > 0) {
    cart[product.id].quantity += 1
  } else {
    cart[product.id] = { ...product, quantity: 1 }
  }
  
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCartCount()
  // console.log(cart)
}

const updateCartCount = () => {
  const cartCounts = document.getElementsByClassName('cartCount');
  const numberOfUniqueProducts = Object.keys(cart).length;
  
  for (let i = 0; i < cartCounts.length; i++) {
    cartCounts[i].innerText = numberOfUniqueProducts;
  }
}
console.log(cart)

updateCartCount()
