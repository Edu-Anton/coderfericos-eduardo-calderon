const products = [
  {
    id:"1", 
    title:"Monitor FHD 24\"", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price:"200",
    pictureUrl:"monitor",
    category: {
      id: "1", 
      name:"Periféricos"
    }
  }, 
  {
    id:"2", 
    title:"Memoria ram HiperX", 
    description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    price:"250",
    pictureUrl:"memoria_ram",
    category: {
      id: "2", 
      name:"Almacenamiento"
    }
  },
  {
    id:"3", 
    title:"Memoria Usb 8Gb", 
    description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    price:"10",
    pictureUrl:"memoria_usb",
    category: {
      id: "2", 
      name:"Almacenamiento"
    }
  },
  {
    id:"4", 
    title:"Mouse Inalámbrico", 
    description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    price:"20",
    pictureUrl:"mouse",
    category: {
      id: "1", 
      name:"Periféricos"
    }
  },
  {
    id:"5", 
    title:"Impresora Multifuncional", 
    description:"Quis autem vel eum iure qui in ea voluptate.",
    price:"150",
    pictureUrl:"impresora",
    category: {
      id: "1", 
      name:"Periféricos"
    }
  },
  {
    id:"6", 
    title:"Teclado Apple Magic", 
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolo.",
    price:"400",
    pictureUrl:"teclado",
    category: {
      id: "1", 
      name:"Periféricos"
    }
  },
  {
    id:"7", 
    title:"Auriculares", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price:"100",
    pictureUrl:"auriculares",
    category: {
      id: "1", 
      name:"Periféricos"
    }
  },
  {
    id:"8", 
    title:"Disco Duro externo", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price:"170",
    pictureUrl:"disco_externo",
    category: {
      id: "2", 
      name:"Almacenamiento"
    }
  }
]

export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products)
  }, 2000);
});