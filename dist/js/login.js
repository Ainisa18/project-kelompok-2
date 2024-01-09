function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("pw").value;

    if(email === "kelompok2@gmail.com" && password === "0110"){
        document.getElementById("form").action = "blank.html";
    } else {
        window.alert("Email atau Password salah!");
    }
}