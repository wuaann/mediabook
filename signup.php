<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--    <link rel="shortcut icon" href="./images/logo.png" type="image/x-icon">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="./style/signup.css">
    <title>Ocean</title>
</head>


<body>
<div class="header">
    <div class="layout container">
        <p>Ocean</p>
        <button type="button" id="btn_login"><a href="login.html">Login</a></button>
    </div>
</div>

<div class="login-form">

    <form action="">
        <div class="text">
            <p>Getting Started</p>
            <p>Create an account to continue and connect with the people</p>
        </div>
        <div class="input-container">
            <i class="fa-solid fa-user icon"></i>
            <input class="input-field" type="text" value="" name="username" placeholder="Username">
        </div>
        <div class="input-container">
            <i class="fa-solid  icon">@</i>
            <input class="input-field" type="text" value="" name="Email" placeholder="Email">
        </div>
        <div class="input-container">
            <i class="fa-sharp fa-solid fa-lock icon"></i>
            <input class="input-field" type="text" value="" name="Password" placeholder="Password">
        </div>
        <div class="input-container">
            <i class="fa-sharp fa-solid fa-lock icon"></i>
            <input class="input-field" type="text" value="" name="Password2" placeholder="comfirm Password">
        </div>
        <div class="button-container">
            <button id="btn" style="width: 100%;
  height: 60px;"> Sign Up
            </button>
        </div>
        <div class="end-container">
            <p>Do you have an account?</p>
            <p><a href="login.html" >Login</a></p>
        </div>

    </form>

</div>
</body>
</html>