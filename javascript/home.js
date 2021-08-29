const API_URL = "http://127.0.0.1:8000";

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

function get_currentUser() {

    var token = localStorage.getItem('token')

    const config = {
        Authorization: `Bearer ${token}`
    }

    callApi('users/current_user/', 'GET', null, config).then((res) => {
        const current_user = res.data;
        return current_user;
    })
        .then(currentUser => {
            let client_name = '';
            client_name += '<img class="profile" onclick="pro()" src="http://127.0.0.1:8000/' + currentUser.avatar + '" alt="">';
            document.getElementById('client_name1').innerHTML = client_name;
            document.getElementById('client_name2').innerHTML = client_name;
            client_name += '<p onclick="pro()" >' + currentUser.last_name + ' ' + currentUser.first_name + '</p>';
            document.getElementById('client_name').innerHTML = client_name;
        })
}

get_currentUser()

function show() {
    var post = [];
    callApi('posts/', 'GET', null).then((res) => {
        post = res.data;
        var a = '';
        for (let i = 0; i <= post.length; i++) {

            axios.get(`${API_URL}/users/${post[i].user}/`).then(res => {
                var user = res.data;

                a += '<div class="post">';
                a += '<div class="post-top">';
                a += '<div class="dp">';
                a += '<img  src="' + user.avatar + '" alt="">';
                a += '</div>';
                a += '<div class="post-info">';
                a += '<p class="name">' + user.last_name + ' ' + user.first_name + '</p>';
                a += '<span class="time"></span></div>';

                a += '<i class="fas fa-ellipsis-h bacham" id="idpost">';
                a += '<ul class="options">'
                a += '<li><i class="fa-solid fa-pen"></i> edit</li>'
                a += '<li onclick="getId(' + post[i].id + ')"><i class="fa-solid fa-trash-can"></i> delete</li>'
                a += '</ul></i></div>';


                if (post[i].img != null) {
                    let anh_post = '<img src="' + post[i].img + '">';
                    a += '<div class="post-content">' + post[i].post_content + anh_post + '</div>';
                } else {
                    a += '<div class="post-content">' + post[i].post_content + '</div>';

                }
                a += '<div class="post-bottom">';
                a += '<div class="action">';
                a += '<i class="far fa-thumbs-up"></i>';
                a += '<span>Like</span>';
                a += '</div>';
                a += '<div class="action">';
                a += '<i class="far fa-comment"></i>';
                a += '<span>Comment</span>';
                a += '</div>';
                a += '<div class="action">';
                a += '<i class="fa fa-share"></i>';
                a += '<span>Share</span>';
                a += '</div>';
                a += '</div>';
                a += '</div>';
                document.getElementById('posthaha').innerHTML = a;

            })
        }
    })
}

show()
function show_friend() {
    var d = [];

    callApi('users/', 'GET', null).then((res) => {
        d = res.data
        var friends = '';

        for (let i = 0; i <= d.length; i++) {

            friends += '<a class="friend" href="/home">';
            friends += '<div class="dp">';
            friends += '<img src="' + d[i].avatar + '" alt="">';
            friends += '</div>';
            friends += '<p class="name">' + d[i].last_name + ' ' + d[i].first_name + '</p>';
            friends += '</a>';
            document.getElementById('show_fri').innerHTML = friends;
        }
    })
}

show_friend()

function logout(){
    window.location = 'index.php';
}