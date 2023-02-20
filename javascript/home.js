const API_URL = "http://127.0.0.1:8000"



function callApi(endpoit, method, body) {
    return axios({
        method : method,
        url: `${API_URL}/${endpoit}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });

}
function show_pro() {
    var client_name ='';
    callApi('user/1/','GET',null).then((res) => {
        quan = res.data
        client_name +='<img class="profile" src="'+ quan.avatar+ '" alt="">';
        document.getElementById('client_name1').innerHTML = client_name;
        document.getElementById('client_name2').innerHTML = client_name;
        client_name +='<p>'+ quan.last_name+ ' ' + quan.first_name +  '</p>';
        document.getElementById('client_name').innerHTML = client_name;
    })
}

show_pro()


function show() {
    var post = [];
    callApi('post/', 'GET', null).then((res) => {
        post=res.data;
        var a= '';
        for (let i = 0; i <= post.length; i++){
            a += '<div class="post">';
            a += '<div class="post-top">';
            a += '<div class="dp">';
            a += '<img src="'+ post[i].user.avatar+'" alt="">';
            a += '</div>';
            a += '<div class="post-info">';
            a += '<p class="name">'+ post[i].user.last_name+ ' ' + post[i].user.first_name +  '</p>';
            a += '<span class="time"></span>';
            a += '</div>';
            a += '<i class="fas fa-ellipsis-h"></i>';
            a += '</div>';
            a += '<div class="post-content">' + post[i].post_content +'<img src="' +post[i].img +'" alt="Mountains"></div>';
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
        }
    })
}
show()
function show_friend() {
    var d = [];

    callApi('user/','GET',null).then((res) => {
        d = res.data
        var friends ='';

        for( let i = 0; i <= d.length; i++){
            console.log(d[i].avatar);

            friends +='<a class="friend" href="/home">';
            friends +='<div class="dp">';
            friends +='<img src="'+ d[i].avatar +'" alt="">';
            friends +='</div>';
            friends +='<p class="name">'+ d[i].last_name+ ' ' + d[i].first_name +'</p>';
            friends +='</a>';
            document.getElementById('show_fri').innerHTML = friends;
        }
    })

}
show_friend()