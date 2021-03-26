const btn = document.getElementById('add-btn');
const input = document.getElementById('input');
const ol_list = document.getElementById('list');



btn.onclick = (e)=>{

    const v= input.value;
    // console.log(v);

    // check whether the input box is not empty
    if(v==""){
        alert("Items field empty!! Please try again...");
    }
    else{

    // adding list item
    const li = document.createElement('li');
    li.innerText=v;
    
    // creating a new div
    const new_div = document.createElement('div');    
    new_div.classList.add('float-end');

    // delete button 
    const del_button = document.createElement('i');
    del_button.classList.add('fas');
    del_button.classList.add('fa-trash-alt');
    del_button.classList.add('del-color');
    
    // edit button
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
    
    // delete button functionality
    del_button.onclick = (e)=>{
        // console.log(li);
        li.remove();
    }

    // edit button functionality
    edit_button.onclick = (e)=>{
        input.value = li.innerText;
        const tmp = input.value;
        li.remove();
    }
}
}

