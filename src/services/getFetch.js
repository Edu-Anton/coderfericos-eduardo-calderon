const products = [
  {
    id:"1", 
    title:"Monitor", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price:"200",
    pictureUrl:"monitor"
  }, 
  {
    id:"2", 
    title:"Mouse Pad", 
    description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    price:"10",
    pictureUrl:"mousepad"
  },
  {
    id:"3", 
    title:"Mouse", 
    description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    price:"20",
    pictureUrl:"mouse"
  },
  {
    id:"4", 
    title:"Impresora", 
    description:"Quis autem vel eum iure qui in ea voluptate.",
    price:"150",
    pictureUrl:"impresora"
  },
  {
    id:"5", 
    title:"Teclado", 
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolo.",
    price:"400",
    pictureUrl:"teclado"
  },
  {
    id:"6", 
    title:"Auriculares", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price:"100",
    pictureUrl:"auriculares"
  }
]

export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products)
  }, 2000);
});