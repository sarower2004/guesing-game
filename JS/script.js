// ============ Player one Veriable part===========
let player_one = document.querySelector ('.player_one')
let player_one_input = document.querySelector ('.player_one_input')
let player_one_button = document.querySelector('.player_one_button')

// ===========Player two Verible part ==============
let player_two = document.querySelector ('.player_two')
let player_two_input = document.querySelector ('.player_two_input')
let player_two_button = document.querySelector('.player_two_button')
//=============others Verible part ==============
let error = document.querySelector('.error')
let head  = document.querySelector('.head')
let win = document.querySelector ('.win')
let chance = document.querySelector ('.chance')
let increas = document.querySelector ('.increas')
let i = 0

player_one_button.addEventListener('click' , ()=>{
   if(player_one_input.value == ''){
      error.innerHTML = 'Enter your preferred number.'
   }else {
      if(player_one_input.value >10) {
         error.innerHTML = 'Confirm between 1-10!'
      }else {
         error.innerHTML = ''
         player_one.style = 'display: none'
         player_two.style = 'display: block'
         head.innerHTML = 'Player two'

      }
   }
})

increas.innerHTML = '0'
player_two_button.addEventListener('click' , ()=>{
   if(player_two_input.value == ''){
      error.innerHTML = 'Enter your guessed number.'
      }else{
         if(player_two_input.value > 10){
            error.innerHTML = 'Guess between 1-10!'
         }else{
            error.innerHTML = ''
            if(player_two_input.value == player_one_input.value){
               win.style = 'display: block'
              win.innerHTML += 'PLAYER 2 HAS WON'
              player_two.style = 'display: none'
              head.style = 'display: none'
            }else {
               error.innerHTML = ''
               i++
               increas.innerHTML = i
               if (i==5){
                  win.style = 'display: block'
                  win.innerHTML += 'PLAYER 1 HAS WON'
                  player_two.style = 'display: none'
                  head.style = 'display: none'
               }else{
                  
               }
         }
         
            
         }
      }
   })
