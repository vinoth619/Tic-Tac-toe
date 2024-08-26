var events=document.querySelectorAll('.kd')
let player1=document.getElementById('player1')
let player2=document.getElementById('player2')
let turn1=document.getElementById('turn1')
let turn2=document.getElementById('turn2')
let playername1=document.getElementById('playername1')
let playername2=document.getElementById('playername2')
let show_win=document.getElementById('show_win')
var hide=document.getElementById('hide')
  hide.style.display="none"


events.forEach((e)=>{
  e.disabled=true;
})

const playgame=()=>{
 if(player1.value!='' &&player1.value!=player2.value &&player2.value!=''){
           playername1.innerHTML=player1.value+' : '+'(X)'
           playername2.innerHTML=player2.value+' : '+'(O)'
           events.forEach((e)=>{
            e.disabled=false;
            show_win.innerHTML=""

            a=='X'?turn1.innerHTML='turn':turn1.innerHTML='---'
          })}
 else{
  show_win.innerHTML="please enter the valid players list"
  events.forEach((e)=>{
    e.disabled=true;
  })
 }

 
}

let a='X'
let finish=false;
let fini=false;
let diafini=false;
let draw=false;
let clicks=0;

//   .............Array initialaztion
let Arr=[['','',''],['','',''],['','','']]
let col=[['','',''],['','',''],['','','']]
let dar=[['','',''],['','','']]

  function place(i){
    events[i].innerHTML=a;
    events[i].disabled=true
    updateAr();
    a=='X'?a='O':a='X'
    a=='X'?turn1.innerHTML="turn":turn1.innerHTML="---"
    a=='O'?turn2.innerHTML="turn":turn2.innerHTML="---"
    clicks++;
  }

// function for Array every
const x_f=(e)=>{
    return e=='X'
}

const colours=(()=>{
  {color:"red"}
})
  
const o_f=(e)=>{
   return e=='O'
}
// game ................ Reset
const reset=(()=>{
  if(player1.value!='' &&player1.value!=player2.value &&player2.value!=''){
    a='X'
    a=='X'?turn1.innerHTML="turn":turn1.innerHTML="---"
    a=='O'?turn2.innerHTML="turn":turn2.innerHTML="---"
    show_win.innerHTML=''
    clicks=0;
    hide.style.display="none"

    events.forEach((e)=>{
      e.style.color="aquamarine"
    })

    const element= document.querySelectorAll('.kd')
    element.forEach(e => {
         e.innerText=""
         e.disabled=false;
         show_win.innerHTML=""

    });
  }
  else{
    show_win.innerHTML="please enter the valid players list"
    events.forEach((e)=>{
      e.disabled=true;
    })
  }})

// update the duplicate Array
 const updateAr=()=>{
    Arr=[[events[0].innerHTML,events[1].innerHTML,events[2].innerHTML],
   [events[3].innerHTML,events[4].innerHTML,events[5].innerHTML] , 
   [events[6].innerHTML,events[7].innerHTML,events[8].innerHTML]]
   rows_x()
   rows_o()
   column_push()
   column()
   diagoanal_push()
   diagonal()
   drawcheck()
   
  }
// set colors fo rwiining
const setcolors=(m)=>{
  events.forEach((e,i)=>{
  if(m==0){
    for(let i=0; i<3;i++){
      events[i].style.color="red"
    }
  }
  if(m==1){
    for(let i=3; i<6;i++){
    events[i].style.color="red"

    }
  }
  if(m==2){
   for(let i=6;i<9;i++) {
    events[i].style.color="red"}
  }


  })
}

// check row  for o
const rows_o=(()=>{
for(let m=0; m<3;m++){
finish=Arr[m].every(o_f)
if(finish==true){
stop(playername2.innerHTML+' '+'Win 🎉')
 setcolors(m)
draw=false;
hide.style.display="block"

  break;
  }
  else{
   draw=true
   
  }
    
    }
      })
//checks  row for X
const rows_x=(()=>{
for(let m=0;m<3;m++){
finish=Arr[m].every(x_f) 
if(finish==true){
 stop(playername1.innerHTML+' '+'Win 🎉')
 setcolors(m)

 draw=false;
 hide.style.display="block"

 

 break;
  }
else{
  draw=true;
  
}
        }})


// columns check
const column_push=()=>{
  for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    if(i==0){
    col[i][j]=Arr[j][i]
    }
    if(i==1){
      col[i][j]=Arr[j][i]
    }
    if(i==2){
      col[i][j]=Arr[j][i]
    }
  }}
}


// columns check Row..........

const column=()=>{
  for(let m=0;m<3;m++){
    fini=col[m].every(x_f) 

    if(fini==true){
       
  stop(playername1.innerHTML+' '+'Win 🎉')
  draw=false;
  setcolorscols(m)
  hide.style.display='block'

  break;
    }
    else{draw=true}
    
    fini=col[m].every(o_f)

    if(fini==true){
      
  stop(playername2.innerHTML+' '+'Win 🎉')
  draw=false;
  setcolorscols(m)
  hide.style.display="block"
 break;
    }
  else{draw=true;
    
  }}}

  // diagonalpush.........
   const diagoanal_push=()=>{
    for(let i=0; i<2; i++){
    for(let j=0; j<3;j++){
    if(i==0){
    dar[i][j]=Arr[j][j]
    }
    if(i==1){
    var gh=0
    for(let K=2; K>=0;K--){
    dar[i][gh]=Arr[gh][K]
    gh++;
    }}
    }}
  }
// diagonal check
      const diagonal=()=>{
      for(let i=0; i<dar.length;i++){
       diafini=dar[i].every(x_f)
       if(diafini==true){
        stop(playername1.innerHTML+' '+'Win 🎉')
        draw=false;
        setcolorsdia(i)
        hide.style.display='block'
        break;
       }
       else{draw=true
        
       }
       diafini=dar[i].every(o_f)
       if(diafini==true){
        stop(playername2.innerHTML+' '+'Win 🎉')
        setcolorsdia(i)

        draw=false;
        hide.style.display='block'

       break;
       }else{
        draw=true
        
       }
    }
  }


  const drawcheck=()=>{
    console.log(draw)
    if (clicks==8&&draw==true){
      show_win.innerHTML="MATCH DIE"
      hide.style.display='block'

    }
 
  }
// end game
const stop=(a)=>{
  show_win.innerHTML=a
  events.forEach((e,i)=>{
    e.disabled=true
   })
   turn1.innerHTML='---'
   turn2.innerHTML='---'

}



//  dtfyghjkl

 const setcolorsdia=((i)=>{
  if(i==0){
    events[0].style.color="red"
    events[4].style.color="red"
    events[8].style.color="red"
 }

 if(i==1){
  events[2].style.color="red"
  events[4].style.color="red"
  events[6].style.color="red"

 }
 })

 const setcolorscols=((i)=>{
  if(i==0){
    events[0].style.color="red"
    events[3].style.color="red"
    events[6].style.color="red"
  }
    if(i==1){
      events[1].style.color="red"
      events[4].style.color="red"
      events[7].style.color="red"}
    if(i==2){
      events[2].style.color="red"
      events[5].style.color="red"
      events[8].style.color="red"
    }
    }

  )




