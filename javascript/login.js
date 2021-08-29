
function login() {
    const username1 = document.getElementById('username1').value;
    const password1 = document.getElementById('password1').value;
    callApi('oauth2_info/','GET', null)
        .then((res) => {
            const client = res.data;
            const data = new FormData();
            data.append('username', username1);
            data.append('password' , password1);
            data.append('client_id', client.client_id);
            data.append('client_secret', client.client_secret);
            data.append('grant_type', 'password');
            return data;
        })
        .then(data => {
            callApi('o/token/','POST',data)
                .then((res) => {
                var token = res.data.access_token
                localStorage.setItem('token', token);
                window.location = 'home.php';
            })
        })

}
