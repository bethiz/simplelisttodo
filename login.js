//for login html & indexhtml

const myform=document.querySelector('#my-form');
const IDnameinput=document.querySelector('#IDname');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    //form validation
    if( IDnameinput.value === '' || emailinput.value ===''){
        msg.classList.add('error');
        msg.innerHTML='* please enter all field';
        setTimeout(()=>msg.remove(),3000);
    }else{
        console.log("success");
        window.location="task.html";
        //clear fields
        IDnameinput.value='';
        emailinput.value='';

        }
}

