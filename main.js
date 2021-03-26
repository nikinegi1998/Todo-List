const btn = document.getElementById('add-btn');
const input = document.getElementById('input');
const ol_list = document.getElementById('list');



btn.onclick = (e)=>{

    const v= input.value;
    // console.log(v);
    if(v==""){
        alert("Items field empty!! Please try again...");
    }
    else{
        
    const li = document.createElement('li');
    li.innerText=v;

    li.classList.add('p-3');
    const new_div = document.createElement('div');

    new_div.classList.add('float-end');
    const del_button = document.createElement('i');
    del_button.classList.add('fas');
    del_button.classList.add('fa-trash-alt');
    del_button.classList.add('del-color');
    
    const edit_button = document.createElement('i');
    edit_button.classList.add('fas');
    edit_button.classList.add('fa-pencil-alt');
    edit_button.classList.add('margin-between');
    edit_button.classList.add('edit-color');
    
    ol_list.append(li);
    li.append(new_div);
    new_div.append(edit_button);
    new_div.append(del_button);
    input.value ="";


    del_button.onclick = (e)=>{
        // console.log(li);
        li.remove();
    }

    edit_button.onclick = (e)=>{
        input.value = li.innerText;
        const tmp = input.value;
    }
    }   
}
