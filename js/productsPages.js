import {products} from '../data/product.js'
const product =document.querySelector('.products');
const search = document.querySelector(".search");
//search from other pages
const params = new URLSearchParams(window.location.search)
const searchVal = params.get('search')||""
 search.value = searchVal


const filtered = searchVal ? products.filter(item =>(item.name.includes(searchVal))) : products

//search  
search.addEventListener("input",()=>{
    
const searchInput =document.querySelector('.search').value;
const newTemp =  products.filter(item => (item.name.includes(searchInput)))


product.innerHTML= newTemp.length>0 ? newTemp.map(item => `<div class="productsCard">
             <img src="${item.images}">
             <p class="productName">${item.name}</p>
             <p class="productPrice">${item.price}</p>
             ${item.stock ? '<p>موجود</p>' : '<p>اتمام موجودی</P>'}
    </div>`).join('')
      :
     products.map(item=>`<div class="productsCard">
             <img src="${item.images}">
             <p class="productName">${item.name}</p>
             <p class="productPrice">${item.price}</p>
             ${item.stock ? '<p>موجود</p>' : '<p>اتمام موجودی</P>'}
    </div>`).join('')
 
})


//create element for products
product.innerHTML=filtered.map(item=>`<div class="productsCard">
             <img src="${item.images}">
             <p class="productName">${item.name}</p>
             <p class="productPrice">${item.price}</p>
             ${item.stock ? '<p>موجود</p>' : '<p>اتمام موجودی</P>'}
    </div>`).join('')
console.log(product);

