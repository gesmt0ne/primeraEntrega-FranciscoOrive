const products = [
    {
      id: "1",
      name: "Bootstrap",
      dificult: 4/10,
      category: "Library",
      img: "./boostrap.png",
      description: "Front-end UI framework for building responsive web applications"
    },
    {
      id: "2",
      name: "Meterialize",
      dificult: 5/10,
      category: "Library",
      img: "",
      description: "Responsive CSS framework for modern web design with Material Design."
    },
    {
      id: "3",
      name: "MUI",
      dificult: 6/10,
      category: "Library",
      img: "",
      description: "MUI: React components library for Material Design interface."
    }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
      const filteredProducts = products.filter((item) => item.category === categoryId);
      setTimeout(() => {
        resolve(filteredProducts);
      }, 500);
    });
  };