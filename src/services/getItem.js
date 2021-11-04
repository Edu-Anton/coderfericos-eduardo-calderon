const products = [
  {
    id:"1", 
    title:"Monitor FHD 24\"", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
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
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
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
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
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
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
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
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
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
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
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
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
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
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"170",
    pictureUrl:"disco_externo",
    category: {
      id: "2", 
      name:"Almacenamiento"
    }
  }
]

export const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products)
  }, 2000);
});