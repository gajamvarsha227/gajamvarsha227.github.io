const prod=[
    {id:1,"name":"prod1",price:100},
    {id:2,"name":"prod2",price:200},
    {id:3,"name":"prod3",price:300}
]
const newarray=prod.map(x=>({name:x.name,price:x.price+5}));
newarray.forEach(x1=>{
    console.log(x1.name+" "+x1.price);
})