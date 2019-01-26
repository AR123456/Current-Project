// add contact functionality

$("#addContact").on("submit", function(event) {
  event.preventDefault();
  var newContact = {
    firstName: $("#firstName")
      .val()
      .trim(),
    lastName: $("#lastName")
      .val()
      .trim(),
    contactType: $("#contactTy[e").val(),
    phoneNumber: $("#phoneNumber")
      .val()
      .trim(),
    emailAddress: $("#emailAddress")
      .val()
      .trim()
  };
  $.ajax({
    method: "POST",
    url: "/api/contacts",
    data: newContact
  }).then(function(contact) {
    console.log("new contact added", contact);
    location.href = "/";
  });
});

// filter contact by type functionality
$("#filterContacts").on("change", function() {
  var type = $(this)
    .val()
    .toLowerCase();
  location.href = `/${type}`;
});

// delete contact functionality
$(".delete").on("click", function() {
  var id = $(this)
    .parents("tr")
    .data("id");
  $.ajax({
    method: "DELETE",
    url: `/api/contacts/${id}`
  }).then(function(contact) {
    console.log("contact deleted", contact);
    location.href = "/";
  });
});
