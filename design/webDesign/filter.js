

const CardDiv = document.querySelector('#div_2')

let cards = [
    {
    image_1:"./6775912-1588666058.jpg",
    image_2:"./6775912-1588666058.jpg",
    user:'Troller',
    text_1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti',
    icon_1:'fas fa-star',
    text_2: '(321)',    
    icon_2:'fas fa-heart',
    text_3:'1 000 P'  
    },
    {
        image_1:"./8627597-1615209010.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsum dolo elit. Delectus corrupti',
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
     },
     {
        image_1:"./9564042-1625732500.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsum dolor sit amet', 
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
     },
     {
        image_1:"./9564042-1625732500.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti',
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
    },
    {
        image_1:"./83042-1616879210.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsum dolor sit ',
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
    },
    {
        image_1:"./2510482-1630351274.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsumLorem sitolor sit f amet consectetur adipisicing elit. Delectus corrupti hello ',
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
    },
    {
        image_1:"./5505798-1588011872.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti ',
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
    },
    {
        image_1:"./8138-7.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsum dolor sctus corrupti sfgdsghsfhfs hdfndf fhdf',
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
    },
    {
        image_1:"./6775912-1588666058.jpg",
        image_2:"./6775912-1588666058.jpg",
        user:'Troller',
        text_1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti',
        icon_1:'fas fa-star',
        text_2: '(321)',    
        icon_2:'fas fa-heart',
        text_3:'1 000 P'  
        },
        {
            image_1:"./8627597-1615209010.jpg",
            image_2:"./6775912-1588666058.jpg",
            user:'Troller',
            text_1:'Lorem ipsum dolo elit. Delectus corrupti',
            icon_1:'fas fa-star',
            text_2: '(321)',    
            icon_2:'fas fa-heart',
            text_3:'1 000 P'  
         },
         {
            image_1:"./9564042-1625732500.jpg",
            image_2:"./6775912-1588666058.jpg",
            user:'Troller',
            text_1:'Lorem ipsum dolor sit amet', 
            icon_1:'fas fa-star',
            text_2: '(321)',    
            icon_2:'fas fa-heart',
            text_3:'1 000 P'  
         },
         {
            image_1:"./9564042-1625732500.jpg",
            image_2:"./6775912-1588666058.jpg",
            user:'Troller',
            text_1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti',
            icon_1:'fas fa-star',
            text_2: '(321)',    
            icon_2:'fas fa-heart',
            text_3:'1 000 P'  
        },
        {
            image_1:"./83042-1616879210.jpg",
            image_2:"./6775912-1588666058.jpg",
            user:'Troller',
            text_1:'Lorem ipsum dolor sit ',
            icon_1:'fas fa-star',
            text_2: '(321)',    
            icon_2:'fas fa-heart',
            text_3:'1 000 P'  
        },
        {
            image_1:"./2510482-1630351274.jpg",
            image_2:"./6775912-1588666058.jpg",
            user:'Troller',
            text_1:'Lorem ipsumLorem sitolor sit f amet consectetur adipisicing elit. Delectus corrupti hello ',
            icon_1:'fas fa-star',
            text_2: '(321)',    
            icon_2:'fas fa-heart',
            text_3:'1 000 P'  
        },
        {
            image_1:"./5505798-1588011872.jpg",
            image_2:"./6775912-1588666058.jpg",
            user:'Troller',
            text_1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti ',
            icon_1:'fas fa-star',
            text_2: '(321)',    
            icon_2:'fas fa-heart',
            text_3:'1 000 P'  
        },
        {
            image_1:"./8138-7.jpg",
            image_2:"./6775912-1588666058.jpg",
            user:'Troller',
            text_1:'Lorem ipsum dolor sctus corrupti sfgdsghsfhfs hdfndf fhdf',
            icon_1:'fas fa-star',
            text_2: '(321)',    
            icon_2:'fas fa-heart',
            text_3:'1 000 P'  
        },

]


function Repeat(cards){
    cards.map(card =>{
    let addCard = `
    <div class="card ">
    <div class="card-header">
    <a href="">
        <img src='${card.image_1}' alt="error" class="img_1">
    </a>
    </div>
    <div class="card-body">
    <a href="">
        <img src="${card.image_2}" alt="error" class="img_2">
    </a>
    <a href=""><p class="text_1">${card.user}</p></a>
    </div>
    <div class='card-info'>
    <a href=""><p class="text_2">
    ${card.text_1}    
    </p></a>
    </div>
    <div class='card-title'>
    <a href="">
    <p class='icones'>
    <i class=" heart ${card.icon_1}">5.0</i><b>${card.text_2}</b>
    </p>
    </a>
    <div class='border'>
    </div>
    </div>
    <div class="card-footer">
    <a href=''><i class=" heart-2 ${card.icon_2}"></i></a>    
    <a href=''><p class="text_3">${card.text_3}</p></a>
    </div>
    </div> 

    `

    CardDiv.insertAdjacentHTML('beforebegin', addCard)
    })
}

Repeat(cards)

