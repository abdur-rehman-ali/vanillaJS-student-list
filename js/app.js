


//Now i want to add dummy value in array
//This code is used to add value in table

let displayValue = () => {
    let storage = JSON.parse(localStorage.getItem('student_list'));
    storage.forEach((value) => {
        let body = document.getElementById('output_table_body');
        let tr = document.createElement('tr');
        tr.innerHTML = `
                            <th>${value.reg_no}</th>
                            <td>${value.name}</td>
                            <td>${value.contact}</td>
                            <td>${value.profession}</td>
                            <td><span class="btn btn-danger delete">X</span></td>
        `;
        body.append(tr);
    })


}
let addValueToTable = () => {
    let storage = JSON.parse(localStorage.getItem('student_list'));
    console.log(storage[storage.length - 1]);


    let body = document.getElementById('output_table_body');
    let tr = document.createElement('tr');
    tr.innerHTML = `
                            <th>${storage[storage.length - 1].reg_no}</th>
                            <td>${storage[storage.length - 1].name}</td>
                            <td>${storage[storage.length - 1].contact}</td>
                            <td>${storage[storage.length - 1].profession}</td>
                            <td><span class="btn btn-danger delete">X</span></td>
        `;
    body.append(tr);



}

//This line of code is used to clear values after it is submitted
let clearValue = () => {
    document.getElementById('reg_no').value = '';
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('contact_no').value = '';

}

//This lines of code are used to show alert
let showAlert = (val, message) => {
    let div = document.createElement('div');
    div.className = `alert alert-${val}`;
    let text = document.createTextNode(`${message}`);
    div.append(text);

    let form = document.getElementById('submit_form');
    form.insertAdjacentElement('beforeBegin', div);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 1000)


}


//----------------------------------------------------

//Targeting submit btn and then it take value from form and add it to table
let submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    let reg_no = document.getElementById('reg_no').value;
    let name = document.getElementById('name').value;
    let profession = document.getElementById('profession').value;
    let contact_no = document.getElementById('contact_no').value;
    if (reg_no === '' || name === '' || profession === '' || contact_no === '') {
        showAlert('danger', 'All fields are required');
    }
    else {
        let obj =
        {
            reg_no: `${reg_no}`,
            name: `${name}`,
            contact: `${contact_no}`,
            profession: `${profession}`

        }
        let storage = JSON.parse(localStorage.getItem('student_list'));
        storage.push(obj);
        localStorage.setItem('student_list', JSON.stringify(storage));
        clearValue();
        showAlert('success', 'Successfully added values');
        addValueToTable();




        //This line of code are used to select all delete buttons and adding click event to them
        delete_btn_array = document.querySelectorAll('.delete');
        console.log(delete_btn_array);
        delete_btn_array.forEach((delete_btn) => {
            delete_btn.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove();
            })
        })
    }
});
displayValue();
let delete_btn_array = document.querySelectorAll('.delete');
console.log(delete_btn_array);
delete_btn_array.forEach((value,index)=>
{
    value.addEventListener('click',()=>
    {
        
        let storage_value = JSON.parse(localStorage.getItem('student_list'));
        console.log(storage_value);
        storage_value.splice(index,1);
        localStorage.setItem('student_list',JSON.stringify(storage_value));
        value.parentElement.parentElement.remove();
      
    
    })
})





