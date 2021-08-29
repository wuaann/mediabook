<link rel="stylesheet" href="./style/profile.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
      crossorigin="anonymous" referrerpolicy="no-referrer"/>

<header>
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
            <a class="hoho">
                <i class=" fas fa-ellipsis-h">
                    <div class="btn_logout" onclick="logout()"><i class=" fa-solid fa-right-from-bracket"></i>Logout
                    </div>
                </i>
            </a>
        </div>
    </nav>
    <div class="container">
        <div class="profile">
            <div class="profile-image" id="profile-image">
            </div>
            <div class="profile-user-settings">
                <h1 class="profile-user-name" id="uname"></h1>
                <button id="btn_edit"  onclick="showedit()" class="btn profile-edit-btn">Edit Profile</button>
                <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog"
                                                                                          aria-hidden="true"></i>
                </button>
            </div>
            <div class="profile-stats">
                <ul>
                    <li><span class="profile-stat-count" id="countpost"></span> posts</li>
                    <li><span class="profile-stat-count">188</span> followers</li>
                    <li><span class="profile-stat-count">206</span> following</li>
                </ul>
            </div>
        </div>
    </div>
</header>
<main>

        <div id="editform" class="container3">
            <div id="anh">
                <img src="http://127.0.0.1:8000//img_profiles/23/01/prolie_default.png" alt="">
                <i class="fa-solid fa-camera camera"></i>
            </div>
            <div class="info">
                <div class="edit">
                    <i class="fa-solid fa-envelope"></i>
                    <input class="field" type="text" value="" id="" placeholder="Email">
                </div>
                <div class="edit">
                    <i class="fa-solid fa-user"></i>
                    <input class="field" type="text" value="" id="" placeholder="firstname">
                </div>
                <div class="edit">
                    <i class="fa-solid fa-user"></i>
                    <input class="field" type="text" value="" id="" placeholder="lastname">
                </div>
            </div>
            <div>
                <button>submit</button>
            </div>
        </div>

    <div class="container">
        <div class="gallery" id="post_is">
        </div>
    </div>
</main>
<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
<script src="javascript/home.js"></script>
<script src="javascript/profile.js"></script>
<script src="javascript/upload.js"></script>
