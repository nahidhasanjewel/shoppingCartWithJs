let productList=[
    {ID:1,ProductName:'Ford Mustang ',Price:5308080,PhotoURL:'img/ford.jpg'},
    {ID:2,ProductName:'Maserati-GranTurismo ',Price:4378080,PhotoURL:'img/maecedes.jpg'},
    {ID:3,ProductName:'Mercedes-Benz ',Price:3358080,PhotoURL:'img/ford.jpg'},
    {ID:4,ProductName:'Lamborghini ',Price:3350080,PhotoURL:'img/Maserati-GranTurismo8.png'},
    {ID:5,ProductName:'Accent ',Price:2458080,PhotoURL:'img/ford.jpg'},
    {ID:6,ProductName:'Toyota ',Price:1858080,PhotoURL:'img/Maserati-GranTurismo8.png'},
];


let cartItems=[];

let productItemtemplate=`<div class="cart">
<img class="img" src="{{PhotoURL}}" alt="">
<div class="cart-body">
    <h4>{{ProductName}}</h4>
    <h4>৳ {{Price}} </h4>
    <button class="addToCart" onclick="chosenItem({{ID}})" type="button">Add to cart</button>
</div>
</div>`;


let rowtemplate=` <tr>
<td>{{ProductName}}</td>
<td>{{Price}}</td>
</tr>`;

function createProductList()
{
   
    let ph= document.getElementById("itemsContent");
    let content="";
    productList.forEach(item=>{
        let pt=productItemtemplate;
        pt=pt.replace("{{PhotoURL}}",item.PhotoURL);
        pt=pt.replace("{{ProductName}}",item.ProductName);
        pt=pt.replace("{{Price}}",item.Price);
        pt=pt.replace("{{ID}}",item.ID);
        content+=pt;
    });
    ph.innerHTML=content;


}
function chosenItem(id){

   let selectedProduct = productList.find(c=>c.ID==id);
   //let pList = rowtemplate;

   let table = document.getElementById('tbllist');

    
    let row = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.innerText=selectedProduct.ProductName;
     let cell2 = document.createElement('td');
     cell2.innerText=selectedProduct.Price;

     row.appendChild(cell1);
     row.appendChild(cell2);

     table.appendChild(row);

     cartItems.push(selectedProduct);
    
     let sum=0;
     cartItems.forEach(item=>{
     sum+=item.Price;
     });

     document.getElementById("totalPrice").innerText=sum;

}


function OnBodyLoad()
{
    createProductList();
}
