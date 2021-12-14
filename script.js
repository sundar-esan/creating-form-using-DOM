var form = document.createElement('from');
document.body.append(form);
var lab= document.createElement('label');
lab.setAttribute('class','fname');
lab.innerHTML='First Name'
form.append(lab);

var br=createbr();
form.append(br);

var inp = document.createElement('input');
inp.setAttribute('type','text');
form.append(inp);

var br=createbr();
form.append(br);



var lab1=document.createElement('label');
lab1.setAttribute('class','mname');
lab1.innerHTML='Middle Name'
form.append(lab1);

var br=createbr();
form.append(br);

var inp1=document.createElement('input');
inp1.setAttribute('type','text');
form.append(inp1);

var br=createbr();
form.append(br);


var lab2=document.createElement('label');
lab2.setAttribute('class','lname');
lab2.innerHTML='Last Name'
form.append(lab2);

var br=createbr();
form.append(br);

var inp2=document.createElement('input')
inp2.setAttribute('type','text');
form.append(inp2);

var br=createbr();
form.append(br);

var lab3=document.createElement('label');
lab3.setAttribute('class','Email');
lab3.innerHTML='Email'
form.append(lab3);

var br=createbr();
form.append(br);

var inp3=document.createElement('input');
inp3.setAttribute('type','email');
form.append(inp3);

var br=createbr();
form.append(br);


var btn = document.createElement('button');
btn.setAttribute('onclick','foo()');
btn.innerHTML='submit'
form.append(btn);



function foo(){
    let res=document.querySelectorAll('input');
    console.log(res);
    for(let i = 0; i < res.length; i++) {
        console.log(res[i].value)
      }}

      function createbr(){

        var br=document.createElement('br');
        return br;
      }



















