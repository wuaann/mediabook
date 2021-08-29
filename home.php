<?php
include_once 'part/header.php';
?>

<body>
<nav>
    <div class="nav-left">
        <p onclick="home()" id="header_logo">Ocean</p>
        <input type="text" placeholder="Search Mediabook..">
    </div>

    <div class="nav-middle">
        <a href="#" class="active">
            <i class="fa fa-home"></i>
        </a>

        <a href="#">
            <i class="fa fa-user-friends"></i>
        </a>

        <a href="#">
            <i class="fa fa-play-circle"></i>
        </a>

        <a href="#">
            <i class="fa fa-users"></i>
        </a>
    </div>

    <div class="nav-right">
        <div id="client_name1">
        </div>

        <a href="#">
            <i class="fa fa-bell"></i>
        </a>

        <a  class="hoho" >
            <i class=" fas fa-ellipsis-h">
                <div class="btn_logout" onclick="logout()"><i class=" fa-solid fa-right-from-bracket"></i>Logout</div>
            </i>
        </a>
    </div>
</nav>

<img src="" alt="">
<div class="container">
    <div class="left-panel">
        <ul>
            <li id="client_name">
            </li>
            <li>
                <i class="fa fa-user-friends"></i>
                <p>Friends</p>
            </li>
            <li>
                <i class="fab fa-facebook-messenger"></i>
                <p>Messages</p>
            </li>
        </ul>
    </div>

    <div class="middle-panel">
        <div class="post create">
            <div>
                <div class="post-top">
                    <div class="dp" id="client_name2">
                    </div>
                    <input id="post_content" type="text" placeholder="What's on your mind ?"/>
                </div>
                <div>
                    <img src="" alt="" id="img_priview" height="200">
                </div>
            </div>

            <div>
                <div class="post-bottom">
                    <div class="action">
                        <i class="fa fa-video"></i>
                        <span>Live video</span>
                    </div>
                    <div class="action">
                        <input type="file" id="img_post" onchange="preview_file()"/>
                        <label for="img_post"/>Photo</label>
                    </div>
                    <div class="action">
                        <span onclick="post()">Post</span>
                    </div>
                </div>
            </div>
            <div id="file-upload-filename">
            </div>
        </div>

        <div id="posthaha">
            <div class="post">
                <div class="post-top">
                    <div class="dp"><img src="http://127.0.0.1:8000/img_profiles/23/02/IMG_1427_V07K1EY.JPG" alt="">
                    </div>
                    <div class="post-info"><p class="name">Dang Quan</p><span class="time"></span></div>
                    <i class="fas fa-ellipsis-h bacham" id="idpost">
                        <ul class="options">
                            <li><i class="fa-solid fa-pen"></i> edit</li>
                            <li><i class="fa-solid fa-trash-can"></i> delete</li>
                        </ul>
                    </i></div>
                <div class="post-content">anh yeu em</div>
                <div class="post-bottom">
                    <div class="action"><i class="far fa-thumbs-up"></i><span>Like</span></div>
                    <div class="action"><i class="far fa-comment"></i><span>Comment</span></div>
                    <div class="action"><i class="fa fa-share"></i><span>Share</span></div>
                </div>
            </div>
        </div>


    </div>
    <div class="right-panel">
        <div class="friends-section">
            <h4>Friends</h4>
            <div id="show_fri">
            </div>

        </div>
    </div>
</div>


</body>
<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
<script src="javascript/home.js"></script>
<script src="javascript/profile.js"></script>
<script src="javascript/upload.js"></script>

</html>