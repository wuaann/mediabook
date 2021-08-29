function showprofile() {
    console.log("run here")
    var token = localStorage.getItem('token')

    const config = {
        Authorization: `Bearer ${token}`
    }
    callApi(`users/current_user/`, 'GET', null, config).then((res) => {
        const current_user = res.data;
        return current_user;
    })
        .then(currentUser => {
            let avatar = '<img src="http://127.0.0.1:8000/' + currentUser.avatar + '"alt="">';
            document.getElementById('profile-image').innerHTML = avatar
            let username = `${currentUser.last_name} ${currentUser.first_name}`;
            document.getElementById('uname').innerText = username;
            callApi(`profile/?user_id=${currentUser.id}`, 'GET').then((res) => {
                let postprofile = res.data;
                document.getElementById('countpost').innerText = `${postprofile.length}`;
                var dspost = '';
                for (let i = 0; i <= postprofile.length; i++) {
                    if (postprofile[i].img != null) {
                        dspost += '<div class="gallery-item"  tabindex="0">';
                        dspost += '<img src="' + postprofile[i].img + '" class="gallery-image" alt="">';
                        dspost += '<div class="gallery-item-info">';
                        dspost += '<ul>';
                        dspost += '<li class="gallery-item-likes">';
                        dspost += '<span class="visually-hidden">Likes:</span>';
                        dspost += '<i class="fas fa-heart" aria-hidden="true"></i> 56';
                        dspost += '</li>';
                        dspost += '<li class="gallery-item-comments">';
                        dspost += '<span class="visually-hidden">Comments:</span>';
                        dspost += '<i class="fas fa-comment" aria-hidden="true"></i> 2';
                        dspost += '</li>';
                        dspost += '</ul>';
                        dspost += '</div>';
                        dspost += '</div>';
                        document.getElementById('post_is').innerHTML = dspost;
                    }
                }

            })

        })
}

function pro() {
    window.location = 'profiles.php';
}

function showprofiles(id) {
    callApi(`users/${id}/`, 'GET', null).then((res) => {
        const current_user = res.data;
        return current_user;
    })
        .then(currentUser => {
            let avatar = '<img src="' + currentUser.avatar + '"alt="">';
            document.getElementById('profile-image').innerHTML = avatar
            let username = `${currentUser.last_name} ${currentUser.first_name}`;
            document.getElementById('uname').innerText = username;
            callApi(`profile/?user_id=${currentUser.id}`, 'GET').then((res) => {
                let postprofile = res.data;
                document.getElementById('countpost').innerText = `${postprofile.length}`;
                var dspost = '';
                for (let i = 0; i <= postprofile.length; i++) {
                    if (postprofile[i].img != null) {
                        dspost += '<div class="gallery-item"  tabindex="0">';
                        dspost += '<img src="' + postprofile[i].img + '" class="gallery-image" alt="">';
                        dspost += '<div class="gallery-item-info">';
                        dspost += '<ul>';
                        dspost += '<li class="gallery-item-likes">';
                        dspost += '<span class="visually-hidden">Likes:</span>';
                        dspost += '<i class="fas fa-heart" aria-hidden="true"></i> 56';
                        dspost += '</li>';
                        dspost += '<li class="gallery-item-comments">';
                        dspost += '<span class="visually-hidden">Comments:</span>';
                        dspost += '<i class="fas fa-comment" aria-hidden="true"></i> 2';
                        dspost += '</li>';
                        dspost += '</ul>';
                        dspost += '</div>';
                        dspost += '</div>';
                        document.getElementById('post_is').innerHTML = dspost;
                    }
                }
            })
        })
}

showprofile()


function showedit() {
    document.getElementById('btn_edit').addEventListener("click", function () {
        document.getElementById('editform').style.display = "flex"})


}

function editprofile() {

}