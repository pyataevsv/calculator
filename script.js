
// add event on digit click

const html = document.querySelector('html');
let x, y;
let operation = '';
let num = document.querySelector('.entered');
let exp = document.querySelector('.expression');
let newNumber = false, existX = false;


html.addEventListener('click', (e) => {
    let act = e.toElement.getAttribute('data-key');

    if('0123456789.'.includes(act)){
        write(act);
    } else if ('b'.includes(act)){
        backspace(act);
    } else if ('*/-+'.includes(act)){
        operate(act);
    } else if ('='.includes(act)){
        calculate(operation, '=');
    } else if ('c'.includes(act)){
        operation = '';
        newNumber = false
        existX = false;
        x=0;
        y=0;
        num.textContent = '0';
    };
});

function write(act){
    if(newNumber == true){ 
        num.textContent = '0';
        newNumber = false;
    }
    if(num.textContent.length == 10) return;
    if(num.textContent == '0' && act == '0') {
        return;
    } else if(num.textContent == '0' && '0987654321'.includes(act)){
        num.textContent = act;
    } else {
        let a = num.textContent.split('');
        a.push(act);
        if(a.join('').match(/(^0\.\d*$|^[^0]\d*\.*\d*$)/)){
            num.textContent = a.join('');
        }
    }
}      
    
    

function backspace(act){   
    if (num == '0') return;
    if ('*/+-'.includes(num.textContent.split('').pop())) return;
    if (num.textContent.length == 1) {
        num.textContent = '0';
        return;
    }   
    let a = num.textContent.split('');   
    a.pop();
    num.textContent = a.join('');
}

function operate(act){
    let z = num.textContent.split('').pop();
    if('*-/+'.includes(z)) {
        let a = num.textContent.split('');
        a.pop();
        console.log(a);
        a.push(act);
        num.textContent = a.join('');
        operation = act;
        return;
    };
    if(existX == false){
        x = Number(num.textContent);
        existX = true;
        newNumber = true;
        operation = act;
        num.textContent += act;
    } else {
        calculate(operation);
        operation = act;
        num.textContent += act;
    }
    
}

function calculate(o, cur){
    let z = num.textContent.split('').pop();
    if('*-/+'.includes(z) && cur == '=') return;
    let res = 0;
    y = num.textContent;
    y = Number(y);
    x = Number(x);
    console.log(y);
    switch(o){
        case '*':
            res = x*y;
            break;
        case '/':
            res = x/y;
            break;  
        case '+':
            res = x+y;
            console.log(res);
            break;
        case '-':
            res = x-y;
            break;  
    }
    if(cur == '=') existX = false;
    //let t = ;
    num.textContent = String(res).match(/^.{1,9}/g)[0];
    x = res;
    
    newNumber = true;
}


