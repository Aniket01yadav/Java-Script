const name= document.getElementById("name");

const loggedInUserDetails = JSON.parse(localStorage.getItem("loggedinuser"));

name.innerHTML = loggedInUserDetails.name;
