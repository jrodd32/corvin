const filters = [
  {
    slug: '/',
    title: 'Floor style',
    options: []
  },
  {
    slug: '/',
    title: 'Category',
    options: []
  },
  {
    slug: '/',
    title: 'Color',
    options: []
  },
  {
    slug: '/',
    title: 'Price',
    options: []
  },
  {
    slug: '/',
    title: 'Brand',
    options: []
  }
];

const products = [
  {
    brand: 'Bella Cerra',
    category: '',
    color: 'Golden Oak',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/bella-cerra',
    title: 'Church Hill Oak',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  },
  {
    brand: 'Bruce',
    category: '',
    color: 'Gunstock',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/',
    title: 'Waltham Plank',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  },
  {
    brand: 'Johnson',
    category: '',
    color: 'Burlap',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/',
    title: 'Maple Distressed',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  },
  {
    brand: 'Johnson',
    category: '',
    color: 'Toscana',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/',
    title: 'Renaissance Hickory',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  },
  {
    brand: 'Shaw',
    category: '',
    color: 'Sugar Cane 295',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/',
    title: 'Barlow Road',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  },
  {
    brand: 'Timeless Designs',
    category: '',
    color: 'Durango',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/',
    title: 'Solid Maple',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  },
  {
    brand: 'Timeless Designs',
    category: '',
    color: 'Bronze Blend',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/',
    title: 'Acacia',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  },
  {
    brand: 'WFS Flooring',
    category: '',
    color: 'Gunstock',
    description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod fugit, iste sequi omnis nostrum soluta, possimus ratione molestias eius repellendus est.'],
    goodFor: [],
    image: {
      alt: '',
      src: 'https://satyr.io/400x400'
    },
    slug: '/',
    title: 'Sanibel Oak',
    price: '',
    productCare: [],
    styleNumber: '',
    width: ''
  }
];

const productCategories = [
  {
    title: 'Carpet',
    description: ['Rich and inviting, hardwood makes a distinctive statement. Because of a great range of natural variations—from boards with extreme character, graining, and …'],
    image: {
      alt: 'Carpet image',
      src: '../../images/shop/carpet.jpg'
    },
    slug: '/shop/carpet'
  },
  {
    title: 'Solid Hardwood',
    description: [' Carpet has so many things going for it. It’s soft, safe, warm and quiet. It’s stain-resistant and gives excellent value for the price—and it saves energy. Carpet is …'],
    image: {
      alt: 'image',
      src: '../../images/shop/solid-hardwood.jpg'
    },
    slug: '/shop/solid-hardwood'
  },
  {
    title: 'Engineered Hardwood',
    description: ['We need someone to write a three line sentence about engineered hardwood for this space. Can really just be an introduction to another paragraph describing …'],
    image: {
      alt: 'image',
      src: '../../images/shop/engineered-hardwood.jpg'
    },
    slug: '/shop/engineered-hardwood'
  },
  {
    title: 'Laminate',
    description: ['Appealing hardwood visuals and marvelous slate and stone looks are the hallmark of today’s laminate. Laminate is great for busy families and simply looks…'],
    image: {
      alt: 'image',
      src: '../../images/shop/laminate.jpg'
    },
    slug: '/shop/laminate'
  },
  {
    title: 'Tile & Stone',
    description: ['Carpet has so many things going for it. It’s soft, safe, warm and quiet. It’s stain-resistant and gives excellent value for the price—and it saves energy. Carpet is also prov…'],
    image: {
      alt: 'image',
      src: '../../images/shop/tile-stone.jpg'
    },
    slug: '/shop/tile-stone'
  },
  {
    title: 'Vinyl Plank',
    description: ['We need someone to write a three line sentence about engineered hardwood for this space. Can really just be an introduction to another paragraph describing …'],
    image: {
      alt: 'image',
      src: '../../images/shop/vinyl-plank.jpg'
    },
    slug: '/shop/vinyl-plank'
  }
];

const profiles = [
  {
    email: 'title@corvinfurniture.com',
    name: 'Employee Name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  },
  {
    email: 'title@corvinfurniture.com',
    name: 'Employee name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  },
  {
    email: 'title@corvinfurniture.com',
    name: 'Employee Name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  },
  {
    email: 'name@corvinfurniture.com',
    name: 'Employee Name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  },
  {
    email: 'name@corvinfurniture.com',
    name: 'Employee Name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  },
  {
    email: 'name@corvinfurniture.com',
    name: 'Employee Name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  },
  {
    email: 'name@corvinfurniture.com',
    name: 'Employee Name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  },
  {
    email: 'name@corvinfurniture.com',
    name: 'Employee Name',
    phone: '(502) - 555-5555',
    title: 'Employee Title'
  }
];

export {
  filters,
  products,
  productCategories,
  profiles
};
