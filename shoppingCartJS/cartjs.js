let productList=[
    {ID:1,ProductName:'Ford Mustang ',Price:5308080,PhotoURL:'img/ford.jpg',Amount:1},
    {ID:2,ProductName:'Maserati-GranTurismo ',Price:4378080,PhotoURL:'img/maecedes.jpg',Amount:1},
    {ID:3,ProductName:'Mercedes-Benz ',Price:3358080,PhotoURL:'img/ford.jpg',Amount:1},
    {ID:4,ProductName:'Lamborgghini ',Price:3350080,PhotoURL:'img/Maserati-GranTurismo8.png',Amount:1},
    {ID:5,ProductName:'Accent ',Price:2458080,PhotoURL:'img/ford.jpg',Amount:1},
    {ID:6,ProductName:'Toyota ',Price:1858080,PhotoURL:'img/Maserati-GranTurismo8.png',Amount:1},
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


let rowtemplate=` <div>
<tr>
<td>{{ProductName}}</td>
<td>{{Price}}</td>
<td>{{Amount}}</td>
</tr>

</div>`;

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

let cartRowTemplate=`  <tr>             
<td >{{ProductName}}</td>
<td >{{Price}}</td>
<td >{{Amount}}</td>
</tr>`;

let cartheadTemplate=`<tr>
<th style="width:140px">Product Name</th>
<th>Price</th>
<th>Amount</th>
</tr>`;

function createCartList()
{
   
    let ph= document.getElementById("tbllist");
    let content="";
    cartItems.forEach(item=>{
        let pt=cartRowTemplate;
        pt=pt.replace("{{ProductName}}",item.ProductName);
        pt=pt.replace("{{Price}}",item.Price);
        pt=pt.replace("{{Amount}}",item.Amount);
        content+=pt;
    });
    ph.innerHTML=cartheadTemplate+content;


}

function chosenItem(id){

   let selectedProduct = productList.find(c=>c.ID==id);
   //let pList = rowtemplate;

   let table = document.getElementById('tbllist');
   //let ProductName = document.getElementById('ProductName');
    //let Price = document.getElementById('Price');
    
    let row = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.innerText=selectedProduct.ProductName;

     let cell2 = document.createElement('td');
     cell2.innerText=selectedProduct.Price;

     let count =0;
     cartItems.forEach(
         item=>
         {
             if(item.ID==selectedProduct.ID)
             {
                count++;
             }
         }
         );
         


     let cell3 = document.createElement('td');
     cell3.innerText=count +1;
     //Amount = cell3.innerText;
 
    

     row.appendChild(cell1);
     row.appendChild(cell2);
     row.appendChild(cell3);

     table.appendChild(row);

     if(count==0) //new item
     {
         cartItems.push(selectedProduct);
     }
     else
     {
         cartItems.forEach(item=>{
        if(item.ID==selectedProduct.ID)
        {
            item.Amount=item.Amount+1;
            
        }
       });
    }
   

    createCartList();

    
     let sum=0;

     if(cartItems==1)
     {

         cartItems.forEach(item=>{
         sum+=item.Price;
        });

     }
     else {

        cartItems.forEach(item=>{
            sum+=(item.Price*item.Amount);
           });


     }
     
     document.getElementById("totalPrice").innerText=sum;
     

}




function OnBodyLoad()
{
    createProductList();
}
