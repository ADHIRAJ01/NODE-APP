// SETTING UP LOCAL STORAGE COOKIE , NEVER EXPIRES , SAVED ON BROWSER
localStorage.setItem("name", "adhiraj");
localStorage.getItem("name");
localStorage.removeItem("name");


// ----------------SESSION ----------------
// SESSION STORAGE COOKIE , WORKS TILL TAB IS OPEN , SAVED ON BROWSER THEN GETS DELETED
sessionStorage.setItem("name", "ADHIRAJ");
let data = sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();


// Get the text field that we're going to track
let field = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
field.addEventListener("change", function() {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});



//------------------COOKIES----------------
// COOKIES SAVED ON BROWSER AND SERVER , SAVES  INFO 
document.cookie = 'name=adhiraj ; expires = '+ new Date(2020,1,3).toUTCString();
document.cookie = 'lname=pratap singh; expires = '+ new Date(9999,1,1).toUTCString();

console.log(document.cookie);
