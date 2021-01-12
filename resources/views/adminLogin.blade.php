<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    {{-- <link rel="stylesheet" href="D:\Project\merged\PHP-G2-SHOUTZONE\resources\css\login.css"> --}}
<style>
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;
     width: 50%;
     margin: 0 auto;
     padding: 2%
}

 input[type=text], input[type=password] {

  padding: 12px 20px;

}

button {
  width: 45%;

  }

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}


.container {
  padding: 16px;
}

h2{
    text-align: center;
    padding: 2%;
}

.field-icon {
  float: right;
  margin-top: -30px;
  margin-right: 15px;
  position: relative;
  z-index: 2;
}

</style>
</head>
<body>

<h2>Login Form</h2>


<form action="{{ url('/adminLogin') }}" method="post">
 <div class="imgcontainer">
    <img src="{{ asset('Images/admin.webp') }}" alt="Avatar" class="avatar">
  </div>

   @error('msg')
<span class="text-danger">{{ $message }}</span>
 @enderror

   @csrf

   <div class="form-group">
    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username"  class="form-control" name="username" required>
     @error('username')
     <span class="text-danger">{{ $message }}</span>
    @enderror
   </div>

    <div class="form-group">
    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  class="form-control" name="password" required>
     @error('password')
     <span class="text-danger">{{ $message }}</span>
      @enderror
    </div>
   <button type="submit" class="btn btn-info">Login</button>
    <button type="reset" class="btn btn-warning">Reset</button>



</form>


    {{-- <h3>Login Page for admin</h3>
            @error('msg')
              <span class="text">{{ $message }}</span>
              @enderror

    <form action="{{ url('/adminLogin') }}" method="post">
        @csrf
           <div class="form-group">
             <label>Username</label>
            <input  name="username" type="text" class="form-control" placeholder="Enter Username"><br>
              </div>
              @error('username')
              <span class="text">{{ $message }}</span>
              @enderror
              <br>
              <br>
             <div class="form-group">
              <label>Password</label>
             <input  name="password" type="password" class="form-control" placeholder="Enter Password  ">
             </div>

             @error('password')
              <span class="text-danger">{{ $message }}</span>
              @enderror
              <br><br>
             <input type="submit" class="btn btn-info" value="Login">
             <input type="reset" class="btn btn-warning" value="Reset">

             </form> --}}

</body>
</html>
