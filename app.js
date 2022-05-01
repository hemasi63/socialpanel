
const manuItem = document.querySelectorAll('.menu-item')
/*****Messages */
const messageNotificaion= document.querySelector('#message-notifications')
const messages = document.querySelector('.messages')
const message= document.querySelectorAll('.message')
const messageSearch= document.querySelector('#message-search')
//them var
const theme =  document.querySelector("#theme")
const themeModal = document.querySelector('.customize-theme')
const closeBtn= document.querySelector(".clos-btn")
var root = document.querySelector(':root')

//Font size

const fontsize = document.querySelectorAll('.choose-size span')

//color

const colorPalette = document.querySelectorAll('.chose-color span')

//background color
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

/*==============Sidebar==============================*/

/***Remove active class*****/

const changeActiveitem=()=>{
    manuItem.forEach(item=>{
   item.classList.remove('active')
})
}

/**********************Show message box************************* */
manuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveitem()
        item.classList.add('active')
        if(item.id!="notifications"){
            document.querySelector('.notification-popup').style.opacity="0"
            document.querySelector('.notification-popup').style.transform ="translateX(-10%)"
        }
        else{
            document.querySelector('.notification-popup').style.opacity="1"
            document.querySelector('.notification-popup').style.transform ="translateX(0)"
            document.querySelector('.notification-counts').style.display="none"
        }
    })
})


/********************Hilight Message box************************ */
messageNotificaion.addEventListener('click',()=>{
    messages.style.boxShadow = "0 0 1rem var(--color-primary)"
    messageNotificaion.querySelector('.notification-counts').style.display= 'none'
    setTimeout(()=>{
        messages.style.boxShadow ='none'
    },2000)
})
 

/***************Search message**************** */
const searchMessage=()=>{
 const val= messageSearch.value.toLowerCase()
  message.forEach(chat=>{
     let name = chat.querySelector('h5').textContent.toLowerCase()
     if (name.indexOf(val)!=-1){
         chat.style.display="flex"
     }
     else{
         chat.style.display="none"
     }
 })
}
messageSearch.addEventListener("keyup",searchMessage)





/*************Them customization************* */
const openModal=()=>{
    themeModal.style.display= 'grid'
}

const closeModal=(e)=>{
    if (e.target.classList.contains='customize-theme'){
        themeModal.style.display= 'none'
    }
}

closeBtn.addEventListener('click',closeModal)
theme.addEventListener('click', openModal)


//////change font size

const removeSelector =()=>{
    fontsize.forEach(size=>{
    size.classList.remove('active')
})
}

fontsize.forEach(size => {
  
   size.addEventListener('click',()=>{
    removeSelector()
    let fontsize
    size.classList.toggle('active')

    if (size.classList.contains('font-size1')){
        fontsize = '10px'
        root.style.setProperty(' --sticky-top-left', '5.4rem')
        root.style.setProperty(' --sticky-top-right', '5.4rem')
    }
    else if(size.classList.contains('font-size2')){
    fontsize = '13px'
    root.style.setProperty(' --sticky-top-left', '5.4rem')
    root.style.setProperty(' --sticky-top-right', '-7rem')
    }
    else if(size.classList.contains('font-size3')){
        fontsize = '15px'
        root.style.setProperty(' --sticky-top-left', '2rem')
        root.style.setProperty(' --sticky-top-right', '-17rem')
        }
   else if(size.classList.contains('font-size4')){
         fontsize = '17px'
         root.style.setProperty(' --sticky-top-left', '-5rem')
         root.style.setProperty(' --sticky-top-right', '-25rem')
            }

   else if(size.classList.contains('font-size5')){
                fontsize = '21px'
                root.style.setProperty(' --sticky-top-left', '-10rem')
                root.style.setProperty(' --sticky-top-right', '-35rem')
                }

                document.querySelector('html').style.fontSize =   fontsize 
   })

     
})

//remove active 
const removeActive =()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active')
    })
}

colorPalette.forEach(color=>{
 color.addEventListener('click',()=>{
    removeActive()
    if (color.classList.contains('color1')){
        primaryHue=252
    }
    else if(color.classList.contains('color2')){
        primaryHue=52
    }
    else if(color.classList.contains('color3')){
        primaryHue=352
    }
    else if(color.classList.contains('color4')){
        primaryHue=152
    }
    else if(color.classList.contains('color5')){
        primaryHue=202
    }
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue',primaryHue)
 })
})



let whitecolorLightness;
let darkcolorLightness;
let lihgtcolorLightness;

const changeBG = ()=>{
    root.style.setProperty('--dark-color-lighness',darkcolorLightness)
    root.style.setProperty('--light-color-lighness',lihgtcolorLightness)
    root.style.setProperty('--white-color-lighness',whitecolorLightness)
}

bg1.addEventListener('click', () => {


    bg1.classList.add('active')
    bg2.classList.remove('active')
    bg3.classList.remove('active')
   window.location.reload()
})

bg2.addEventListener('click', () => {
    darkcolorLightness='95%';
    whitecolorLightness='20%';
    lihgtcolorLightness ='15%'

    bg2.classList.add('active')
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBG()
})

bg3.addEventListener('click', () => {
    darkcolorLightness='95%';
    whitecolorLightness='10%';
    lihgtcolorLightness ='0%'

    bg3.classList.add('active')
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBG()
})



