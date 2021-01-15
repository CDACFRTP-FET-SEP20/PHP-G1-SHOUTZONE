<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>

     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<style>
    a:link {
  color:white;
  background-color: transparent;
  text-decoration: none;
}
.card{
    padding: 3%;
    }
    </style>

<body>
     @include("navbar")

     <div class="card">
         <h2>List Of All user Shouts</h2>
        <table class="table table-bordered">
        <thead class="thead-dark">
         <tr>
                <th scope="col">Text</th>
                <th scope="col"> Shouts</th>


                <th scope="col">Delete Shouts </th>

        </thead>
        <tbody>
            @foreach($shouts as $shout)
            <tr >
                <td> {{$shout->username}}</td>

                <td>

                     {{$shout->shoutText == 'null' || $shout->shoutText == 'undefined' ? ' ' : $shout->shoutText}}

                </td>
                <td>
                    @if ($shout->shoutType==='image')
                    <img
                    src="{{ asset($shout->shoutMedia)}}"
                  />

                  @elseif($shout->shoutType ==='video')
                  <video controls>
                    <source src="{{asset($shout->shoutMedia)}}" type ="video/mp4" />

                  </video>


                  @elseif($shout->shoutType ==='audio')
                  <audio  controls>

                    <source src="{{ asset($shout->shoutMedia)}}" type="audio/ogg"/>
                  </audio>
                  @endif

                </td>


                <td>
                    <button class="btn btn-danger" ><a href="{{route('deleteshout',['id'=>$shout->id])}}">Delete Shout</a></button>
                </td>
              </tr>


              @endforeach

        </tbody>
        </table>
       </div>

</body>

</html>
