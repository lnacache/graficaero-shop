const products = [
  {
    id: 1,
    title: "CAJITAS TEMÁTICAS DECORADAS",
    category: "Cajitas",
    price: "1.000",
    description:
      "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
    image: "img/img1.jpg",
    stock: 13,
  },
  // {
  //   id: 2,
  //   title: "Cojines de Tela Personalizados, sin estampado",
  //   category: "Cajitas",
  //   price: "2.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img2.jpg",
  //   stock: 12,
  // },
  // {
  //   id: 3,
  //   title: "Copas de Vino Decoradas con Nombres",
  //   category: "Cajitas",
  //   price: "3.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img3.jpg",
  //   stock: 11,
  // },
  // {
  //   id: 4,
  //   title: "Toppers Temáticos personalizados",
  //   category: "Cajitas",
  //   price: "4.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img4.jpg",
  //   stock: 10,
  // },
  // {
  //   id: 5,
  //   title: "Mini Toppers Temáticos personalizados",
  //   category: "Cajitas",
  //   price: "5.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img5.jpg",
  //   stock: 9,
  // },
  // {
  //   id: 6,
  //   title: "Vinilo Decorativos - Superficies Interiores",
  //   category: "Cajitas",
  //   price: "6.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img6.jpg",
  //   stock: 8,
  // },
  // {
  //   id: 7,
  //   title: "Cajitas Variadas Personalizada para Eventos",
  //   category: "Cajitas",
  //   price: "7.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img7.jpg",
  //   stock: 7,
  // },
  // {
  //   id: 8,
  //   title: "Cajitas Decoradas de Cumpleaños",
  //   category: "Cajitas",
  //   price: "8.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img8.jpg",
  //   stock: 6,
  // },
  // {
  //   id: 9,
  //   title: "Toppers Temáticos personalizados",
  //   category: "Cajitas",
  //   price: "9.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img9.jpg",
  //   stock: 5,
  // },
  // {
  //   id: 10,
  //   title: "Toppers Temáticos personalizados",
  //   category: "Cajitas",
  //   price: "10.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img10.jpg",
  //   stock: 4,
  // },
  // {
  //   id: 11,
  //   title: "Cajitas Decoradas de Cumpleaños",
  //   category: "Cajitas",
  //   price: "11.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img11.jpg",
  //   stock: 3,
  // },
  // {
  //   id: 12,
  //   title: "Toppers Temáticos personalizados",
  //   category: "Cajitas",
  //   price: "12.000",
  //   description:
  //     "Cajitas temáticas del personaje que desees. Una belleza especialmente para todo tipo de eventos. Medidas: 45cm de alto y su proporcional de ancho. Ideal para Cumpleaños, Bautizos, Baby Showers, Despedidas, Aniversarios, Bodas, en fin.",
  //   image: "img/img12.jpg",
  //   stock: 2,
  // },
];

export default products;
