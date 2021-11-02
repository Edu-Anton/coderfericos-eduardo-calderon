const product = {
    id:"1", 
    title:"Monitor 24 pulgadas FHD", 
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error quas eaque facilis aspernatur corrupti, ullam vitae esse, rem porro id ipsam similique tempore enim, sequi hic iure perspiciatis excepturi!",
    price:"200",
    pictureUrl:"monitor1x1"
} 

export const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(product)
  }, 2000);
});