// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#contact-image')
//                 .attr('src', e.target.result)
//                 .width(150)
//                 .height(200);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// window.onload = function() {
//     var showAddButton = document.getElementById("showAdd");
//     var addButton = document.getElementById("addContact");
//     var cancelButton = document.querySelector("addForm");
    
//     var name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var image = document.getElementById('image');
//     var mobile = document.getElementById('mobile');
// }

// function addContact() {
//         // Create a new contact object with the user's input.
//     var contact = {
//         "name": document.getElementById('name').value,
//         "email": document.getElementById('email').value,
//         "image": document.getElementById('image').value,
//         "mobile": document.getElementById('mobile').value
//     };
// }

function removeContact() {

}

function viewContacts() {
    document.getElementById('contacts').style.display = "block";
}

function addContacts() {
    document.getElementById('add-contacts').style.display = "block";
}

function hideContacts() {
    document.getElementById('contacts').style.display = "none";
    document.getElementById('add-contacts').style.display = "none";
}