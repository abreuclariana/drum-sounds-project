//document.querySelector('.set').addEventListener('click' , handleClick {


//function handleClick() {
   // alert('Clicou!')

//let resul = document.querySelectorAll('.drum')

//for (let i = 0; i &lt;= resul.length; i++) {
   // resul[i].addEventListener('click', handleClick)
//}


   //outra forma de fazer

   let numberOfDrumButtons = document.querySelectorAll('.drum').length
   let colors = ['#52BE80', '#F0B27A', '#F1C40F', '#707B7C', '#76448A', '#1A5276' ]
               //0 <  7
   for(let i = 0; i < numberOfDrumButtons; i++){
      document.querySelectorAll('button')[i].addEventListener('click', function(){
        // console.log(this.innerHTML)

       let randomColors =  Math.floor(Math.random() * colors.length)
       this.style.color = colors[randomColors]
         // this.style.color = 'white' 

         let buttonInnerHTML = this.innerHTML
         makeSounds(buttonInnerHTML) // w
         buttonAnimation(buttonInnerHTML)
         
      })
   }
  
   document.addEventListener('keydown', function(event){
     makeSounds(event.key) // w
     buttonAnimation(event.key) // nos dois casos passa os parâmetros
   })

   function makeSounds(key){   // essa função foi criada para reutilizar o código inserino sons e eventos de teclado simultaneamente
      switch (key) {
         case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
            
         case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

         case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

         case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
         
         case 'j':
            let tom5 = new Audio('./sounds/snare.mp3');
            tom5.play();
            break;

         case 'k':
            let tom6 = new Audio('./sounds/crash.mp3');
            tom6.play();
            break;

         case 'l':
            let tom7 = new Audio('./sounds/kick-bass.mp3');
            tom7.play();
            break;

         default:
            break;
      }
   }

   function buttonAnimation(currentKey){
      let activeButton = document.querySelector('.' + currentKey) // .k ou .w
      
      activeButton.classList.add('pressed')

      setTimeout(function(){
         activeButton.classList.remove('pressed')
      }, 100)
   }
   
  
   /*
      let audio = new Audio('./sounds/tom-1.mp3');
          audio.play();

   */

   /*
    Outra forma de resolver
    
   document.addEventListener('keydown',function(event){
    let evento=(event.key)

    switch(evento){
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break

        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break

        case's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        break
        
        case 'd':
  
        let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break
        
        case 'j':   
            let tom5 = new Audio('./sounds/snare.mp3');
            tom5.play();
        break

        case 'k':
            let tom6 = new Audio('./sounds/crash.mp3');
            tom6.play();
        break
        case 'l':
            let tom7 = new Audio('./sounds/kick-bass.mp3');
            tom7.play();
            break

        default:
            console.log(buttoninnerHtml)  ;
    }

});


   */