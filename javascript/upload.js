function preview_file() {
    const fileEle = document.querySelector('#img_post');
    const preview = document.querySelector('#img_priview');
    const file = fileEle.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function () {
        preview.src = reader.result;
    }, false);
    if (file) {
        reader.readAsDataURL(file)
    }
}

function post() {
    var token = localStorage.getItem('token')
    const header = {
        Authorization: `Bearer ${token}`
    }
    callApi('users/current_user/', 'GET', null, header).then((res) => {
        const current_user = res.data;
        return current_user;
    })
        .then(current_user => {
            const fileEle = document.querySelector('#img_post');
            const post_content = document.getElementById('post_content').value;
            let file = fileEle.files[0];
            const data = new FormData();
            data.append("user", current_user.id);
            data.append("post_content", post_content);

            if (file) {
                data.append('img', file);
            }

            callApi('posts/', 'POST', data).then((res) => {
                document.getElementById('img_priview').src = '';
                document.getElementById('img_post').value = null;
                document.getElementById('post_content').value = null;
                console.log("upload post", res)
                show();
            })
        })

}

function callApi(endpoit, method, body = {}, config = {}) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoit}`,
        data: body,
        headers: config
    }).catch((err) => {
        console.log(err);
    });

}

function getId(id) {
    let token = localStorage.getItem('token')
    const header = {
        Authorization: `Bearer ${token}`
    }
    callApi('users/current_user/', 'GET', null, header).then((res) => {
        const current_user = res.data;
        return current_user;
    })
        .then(current_user => {
                callApi(`posts/${id}/`, 'GET', null).then((res) => {
                    var user_id = res.data.user;
                    if(current_user.id == user_id ){
                        callApi(`posts/${id}/`, 'DELETE', null).then((res) => {
                            show();
                        })
                    }
                })
            }
        )
}

function home() {
    window.location = 'home.php'

}




