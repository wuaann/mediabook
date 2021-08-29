function callApi(endpoit, method, body) {
    return axios({
        method : method,
        url: `${API_URL}/${endpoit}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}
function signup1() {
    const usernamesu = document.getElementById('namesu').value;
    const firstnamesu = document.getElementById('firstnamesu').value;
    const lastnamesu = document.getElementById('lastnamesu').value;
    const emailsu = document.getElementById('emailsu').value;
    const passwordsu = document.getElementById('passwordsu').value;
    const password2su = document.getElementById('password2su').value;
    if (emailsu == null){
        document.getElementById('loi').innerText = 'khong duoc bo trong email';
    }
    else if ((firstnamesu == null) && (lastnamesu == null)){
        document.getElementById('loi').innerText = 'khong duoc bo trong first name hoac last name';
    }
    else if ((passwordsu != null) && (passwordsu == password2su)) {
        var data_signup = {
            "first_name": firstnamesu,
            "last_name": lastnamesu,
            "email": emailsu,
            "username": usernamesu,
            "password": passwordsu
        };
        console.log(data_signup);
        callApi('users/', 'POST', data_signup).then((res) => {
            window.location = 'index.php';
        })
    }
    else {
        document.getElementById('loi').innerText = 'ten dang nhap ton tai hoac mat khau khong chinh xac'
    }
}
