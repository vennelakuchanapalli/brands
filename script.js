document.getElementById('totalregdiv').style.display = 'block'
// document.getElementById('totallogindiv').style.display = 'none'
// document.getElementById('totaldashboarddiv').style.display = 'none'


// registration div function starts from here 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^\d{6}$/;

function register() {
    var rnamev = document.getElementById('rname').value
    var rmailv = document.getElementById('rmail').value
    var rpasswordv = document.getElementById('rpassword').value
    if (rnamev === "" && rmailv === "" && rpasswordv === "") {
        alert('Please fill Details')
    }
    //    const email = "user@example.com";
    if (!emailRegex.test(rmailv)) {
        alert("Invalid email address");
    }
    //    const password = "123456";

    if (!passwordRegex.test(rpasswordv)) {
        alert("Invalid password");
    }
    else {
        var userdetails = {
            Name: rnamev,
            Email: rmailv,
            Password: rpasswordv
        }
        localStorage.setItem('LSDetails', JSON.stringify(userdetails))
        document.getElementById('rpara').innerText = "Registered successfully !!"
        document.getElementById('rpara').style.color = green;

        // here is settimeout function starts 
        setTimeout(function () {
            document.getElementById('totalregdiv').style.display = 'none';
            document.getElementById('totallogindiv').style.display = 'block';

        }, 1000)
    }
}


// hear is about direct redirecting to login page with out registering 
function goToLogin() {

    document.getElementById('totalregdiv').style.display = 'none';
    document.getElementById('totallogindiv').style.display = 'block';

}

// from here loginsections starts here 
function register() {
    var lmailv = document.getElementById('lmail').value;
    var lpasswordv = document.getElementById('lpassword').value;
    //getvalueLs ...means gettingvalues from localstorage in variable 
    var getvalueLs = JSON.parse(localStorage.getItem('LSDetails'));
    if (lmailv === "" && lpasswordv === "") {
        alert("Please fill details")
    } else if (lmailv == getvalueLs.Name && lpasswordv == getvalueLs.Password) {
document.getElementById('lpara').innerText = 'Login successful !!';
document.getElementById('lpara').style.color = green;

document.getElementById('totalregdiv').style.display = 'none';
document.getElementById('totallogindiv').style.display = 'none';

setTimeout(function() {
    document.getElementById('totaldashboarddiv').style.display = 'block'

},1000)
    }
}

