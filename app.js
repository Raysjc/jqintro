
function createToDo(){
    var text = $('#txtToDo').val();
    // document.getElementById('txtToDo').value = "";
    $('#txtToDo').val('');

    // create li inside ul
    var li = '<li>' + text + '</li>';
    $('#pendingList').append(li);

    //set the focus back to the input field
    $('#txtToDo').focus();
}

function init(){
    console.log('init of todo app')
    // document.getElementById('btnSave').onclick = createToDo;
    $('#btnSave').click(createToDo);
}


// when the browser finish rendering my html
// execute the init function
window.onload = init;