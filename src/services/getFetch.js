export const products = [
  {
    id:"x8R1w5XUVEeR0Pw9czO3",
    brand:"Apple", 
    title:"Monitor FHD 24\"", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"200",
    pictureUrl:"monitor",
    category_id:"1", 
    category_name:"Periféricos"
  }, 
  {
    id:"Bb3AVJv2Rzi90FLrhawE",
    brand:"Kingston", 
    title:"Memoria ram HiperX", 
    description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"250",
    pictureUrl:"memoria_ram",
    category_id: "2", 
    category_name:"Almacenamiento"
  },
  {
    id:"ypsTrxWvNve2rq8QGCL9",
    brand:"Sony", 
    title:"Memoria Usb 8Gb", 
    description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"20",
    pictureUrl:"memoria_usb",
    category_id:"2", 
    category_name:"Almacenamiento"
  },
  {
    id:"Nq1c9GavJXm3VYMR1XNK",
    brand:"HP", 
    title:"Mouse Inalámbrico", 
    description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"20",
    pictureUrl:"mouse",
    category_id: "1", 
    category_name:"Periféricos"
  },
  {
    id:"5TwepWyQ2YTttq73ZLLm",
    brand:"HP", 
    title:"Impresora Multifuncional", 
    description:"Quis autem vel eum iure qui in ea voluptate.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"150",
    pictureUrl:"impresora",
    category_id: "1",
    category_name:"Periféricos"
  },
  {
    id:"J1cDoCGQVHRy1ii4HUN0",
    brand:"Apple", 
    title:"Teclado Apple Magic", 
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolo.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"400",
    pictureUrl:"teclado",
    category_id: "1", 
    category_name:"Periféricos"
  },
  {
    id:"jaY4fsHA6nZ9EnrZpPqC",
    brand: "Sony", 
    title:"Auriculares", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"100",
    pictureUrl:"auriculares",
    category_id: "3", 
    category_name:"Audio y Sonido"
  },
  {
    id:"yASjmQbDMfV67pQ4Y5WE",
    brand:"Kingston", 
    title:"Disco Duro externo", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"170",
    pictureUrl:"disco_externo",
    category_id: "2", 
    category_name:"Almacenamiento"
  },
  {
    id:"YhcyaA8ldpkEQ6n9aVtg",
    brand:"Halion", 
    title:"Cámara Web USB Full HD 1080p", 
    description:"Quis autem vel eum iure qui in ea voluptate.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"50",
    pictureUrl:"webcam",
    category_id: "4", 
    category_name:"Video"
  },
  {
    id:"aiW94cLZBNknvR4rAIj3",
    brand:"Halion", 
    title:"Parlantes USB Bluetooth 2.1", 
    description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"221",
    pictureUrl:"parlantes",
    category_id: "3", 
    category_name:"Audio y Sonido"
  },
  {
    id:"z0NbT3bprWwHgIHVHKiF",
    brand:"Halion", 
    title:"Micrófono para PC", 
    description:"Vero error quas eaque facilis aspernatur ullam vitae esse.",
    longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"15",
    pictureUrl:"microfono",
    category_id: "3", 
    category_name:"Audio y Sonido"
  },
]

export const getItemById = (id) => products.find( el => el.id == id);

export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products)
  }, 2000);
});