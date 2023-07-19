//for task html
const mytask=document.querySelector('#my-task');
const taskinput=document.querySelector('#task');
const list=document.querySelector('#tasklist');


mytask.addEventListener('submit' , onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(taskinput.value === ''){
        taskinput.style.borderColor='red';
    }else{
        //create element li
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${taskinput.value}`));
        list.appendChild(li);
        const newElement=list.appendChild(li);

        //create element button delete
        const deletebtn=document.createElement('button');
        deletebtn.textContent="delete";
        deletebtn.classList.add('deletebtn');
        li.appendChild(deletebtn);

        //create element button done
        const done=document.createElement('button');
        done.textContent="done";
        done.classList.add('done');
        li.appendChild(done);
        

        taskinput.value='';

        //event click delete
        deletebtn.addEventListener('click',function(){
            const elementToRemove=list.appendChild(li);
            elementToRemove.remove();
           
    
        });

        //event click done
        done.addEventListener('click',function(){
            const elementToDone=newElement;
            elementToDone.style.textDecoration="line-through ";
            elementToDone.style.color="grey";
        });
        
    

        }     
}