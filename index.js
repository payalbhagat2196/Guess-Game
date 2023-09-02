console.log('connected');
//random
const randnum =parseInt(Math.random ()*10+1) ;
//console.log('randnum');
//accessing btn
const btn = document.getElementsByClassName('btn')[0];
// access form 
const form = document.getElementsByClassName('border')[0];
//access notice
const notice = document.getElementById('notice');
//access score class
const score = document.getElementsByClassName('score')[0];
// insted of kebab case ----> go with camel case
//border-color ---> borderColor
var count=0;


btn.addEventListener('click', function(e) {
    e.preventDefault();
    const num = document.getElementById('num').value;
    
    console.log(num);
    if(randnum > num){
        
        notice.innerText = "Try Bigger Number 🙌"
        form.style.borderColor ="Red"
        count++;
        score.innerText=count;
    }
    else if(randnum == num){
      
        notice.innerText = "Congrats 🎉"
        form.style.borderColor ="Green"
    }
    else{
        count++;
        notice.innerText = "Try Smaller Number 🙌"
        form.style.borderColor ="Red"
        score.innerText=count;
    }
   
    
    
})