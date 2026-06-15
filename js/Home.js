const navbar = document.querySelector('.navbar')
        const hamburgerButton = document.querySelector('.hamburgerButton')
        const closeButton = document.querySelector(".closeButton")
         const overlay =document.querySelector('.overlay');
         const firstBrand=document.querySelector('.firstBrand');
         const secondBrand = document.querySelector('.secondBrand');
         const search = document.querySelector(".search");     
         const searchButton = document.querySelector(".searchButton")
          const myLocation = window.location.href
        const navLink = document.querySelectorAll(".nav_link");
          searchButton.addEventListener('click',()=>{
            const searchVal=document.querySelector(".search").value;
           if(searchVal){
             window.location.href=`pages/products.html?search=${encodeURIComponent(searchVal)}`
           }
            
          })

         setInterval(()=>{
           if(firstBrand.classList.contains('show')){
                firstBrand.classList.remove('show');
                secondBrand.classList.add('show')
            }else if(secondBrand.classList.contains('show')){
                secondBrand.classList.remove('show')
                firstBrand.classList.add('show')
            }
         },5000)


        hamburgerButton.addEventListener('click',()=>{
            if(navbar.classList.contains("navbar")){
                navbar.classList.toggle('active')
                 overlay.style.display='block'
            }
        })

        closeButton.addEventListener('click',()=>{
            if(navbar.classList.contains("active")){
                navbar.classList.toggle("active")
                overlay.style.display='none'

            }
        })
     
       
        navLink.forEach(item =>{
         if(item.href===myLocation){
     item.classList.add("active")

        }
       }) 