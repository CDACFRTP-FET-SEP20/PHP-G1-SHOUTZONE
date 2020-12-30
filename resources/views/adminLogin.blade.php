<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h3>Login Page for admin</h3>
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

             </form>



</body>
</html>
