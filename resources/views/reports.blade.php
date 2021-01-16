<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    {{-- <link rel="stylesheet" href={{ asset('./js/home.js') }}> --}}
</head>

<body>
    @include('navbar')

    <div class="container">
        <div class="accordion" id="accordionExample">
            @foreach ($reports as $category => $report)
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading{{$category}}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse{{$category}}" aria-expanded="true" aria-controls="collapseOne">
                        {{$category}}
                    </button>
                </h2>
                <div id="collapse{{$category}}" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body row">

                        @foreach ($report as $shout)
                        <div class="card w-50 p-2">
                            <div class="card-body">
                                <p>Reported By: {{$shout->user->username}}</p>
                                <p>Description: {{$shout->description ? $shout->description : 'No Description'}}</p>
                                <h5 class="card-title">{{$shout->user->username}}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>

</body>

</html>
