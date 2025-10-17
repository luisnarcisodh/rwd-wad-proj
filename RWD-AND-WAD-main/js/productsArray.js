// Data for menu
const drinks = [
  {
    name: 'Caffe Latte',
    img: '../assets/cafe-latte.jpg',
    desc: 'Rich espresso with steamed milk and a light layer of foam',
    price: 150,
    sizes: [
      { label: 'Small', price: 150 },
      { label: 'Medium', price: 180 },
      { label: 'Large', price: 210 }
    ],
    addons: [
      { name: 'Vanilla Syrup', price: 20 },
      { name: 'Hazelnut Syrup', price: 20 },
      { name: 'Caramel Syrup', price: 20 }
    ],
    condiments: ['White Sugar', 'Brown Sugar']
  },
  {
    name: 'Cappuccino',
    img: '../assets/cappucino.jpg',
    desc: 'Classic Italian coffee with equal parts espresso, steamed milk, and foam',
    price: 160,
    sizes: [
      { label: 'Small', price: 160 },
      { label: 'Medium', price: 190 },
      { label: 'Large', price: 220 }
    ],
    addons: [
      { name: 'Vanilla Syrup', price: 20 },
      { name: 'Hazelnut Syrup', price: 20 },
      { name: 'Caramel Syrup', price: 20 }
    ],
    condiments: ['White Sugar', 'Brown Sugar']
  },
  {
    name: 'Espresso',
    img: '../assets/espresso.jpg',
    desc: 'Bold and intense shot of pure coffee perfection',
    price: 120,
    sizes: [
      { label: 'Single', price: 120 },
      { label: 'Double', price: 150 }
    ],
    addons: [
      { name: 'Vanilla Syrup', price: 20 },
      { name: 'Hazelnut Syrup', price: 20 }
    ],
    condiments: ['White Sugar', 'Brown Sugar']
  }
];

const pastries = [
  {
    name: 'Croissant',
    img: '../assets/cross.png',
    desc: 'Buttery, flaky pastry',
    price: 95,
    sizes: [{ label: 'Regular', price: 95 }],
    addons: [{ name: 'Chocolate', price: 25 }],
    condiments: []
  },
  {
    name: 'Blueberry Muffin',
    img: '../assets/b-muffin.jpg',
    desc: 'Sweet muffin loaded with blueberries',
    price: 85,
    sizes: [{ label: 'Regular', price: 85 }],
    addons: [{ name: 'Extra Blueberry', price: 20 }],
    condiments: []
  },
  {
    name: 'Pain au Chocolat',
    img: '../assets/pain-au.jpg',
    desc: 'Flaky pastry filled with rich chocolate',
    price: 110,
    sizes: [{ label: 'Regular', price: 110 }],
    addons: [],
    condiments: []
  }
];
