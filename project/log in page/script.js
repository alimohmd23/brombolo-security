function showForm(formId) {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}
function signUp() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  if (email && password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      alert("Email already registered! Please use another email.");
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    let signupalert= document.getElementById("lelo");
    signupalert.style.display="flex";
    // showForm("login-form");
    // signupalert.style.display="none";
  } else {
    alert("Please fill in all fields.");
  }
}
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    alert(`Welcome back, ${user.name}! Login successful.`);
    let btn=document.getElementById("btn")
    btn.style.display="block";
  } else if (users.length === 0) {
    alert("No accounts found! Please sign up first.");
    showForm("signup-form");
  } else {
      alert("Invalid email or password.");
  }
}

  function forgetPassword() {
    const email = document.getElementById("forget-email").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);

    if (user) {
      let forgot = document.getElementById("pass")
      forgot.style.display="flex";
      forgot.textContent+= user.password
    } else {
      alert("Email not found! Please make sure you are registered.");
    }
  }
function forsot(){
  let forgot = document.getElementById("pass")
  if(forgot.style.display="flex"){
    forgot.style.display="none";
    
  }
  
}
function jangle(){
  showForm("login-form");
  let signupalert= document.getElementById("lelo");
  signupalert.style.display="none";
  clearData()

}
function clearData(){
  var name1 = document.getElementById("signup-name").value;
  var email1 = document.getElementById("signup-email").value;
  var password1 = document.getElementById("signup-password").value;
  name1.textContent="";
  email1.textContent="";
  password1.textContent="";
  // email1.value="";
  // password1.value="";
}