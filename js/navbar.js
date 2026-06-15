//Dom controll
 const navbar = document.querySelector('.navbar')
        const hamburgerButton = document.querySelector('.hamburgerButton')
        const closeButton = document.querySelector(".closeButton")
         const overlay =document.querySelector('.overlay');
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
         const myLocation = window.location.href
        const navLink = document.querySelectorAll(".nav_link");
        navLink.forEach(item =>{
         if(item.href===myLocation){
       item.classList.add("active")

        }
       }) 
        