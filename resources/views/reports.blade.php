<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    {{-- <link rel="stylesheet" href={{ asset('./js/home.js') }}> --}}
</head>

<body>
    @include('navbar')

    <div class="container">
        <div class="accordion" id="accordionExample">
            @foreach ($reports as $category => $reported)
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

                        @foreach ($reported as $report)
                        <div class="card col-6">
                            <div class="card-body">
                                <p>Reported By: {{$report->user->username}}</p>
                                <p>Description: {{$report->description ? $report->description : 'No Description'}}</p>
                                <h4 class="card-title">Reported Shout</h4>
                                <h5 class="card-title">{{$report->shout->user->username}}</h5>
                                <p class="card-text">
                                    <p> {{$report->shout->shoutText == 'null' || $report->shout->shoutText == 'undefined' ? ' ' : $report->shout->shoutText}}
                                    </p>

                                    @if ($report->shout->shoutType==='image')
                                    <img class="card-img-top" with src="{{ asset($report->shout->shoutMedia)}}" />

                                    @elseif($report->shout->shoutType ==='video')
                                    <video controls class="card-img-top">
                                        <source src="{{asset($report->shout->shoutMedia)}}" type="video/mp4" />

                                    </video>


                                    @elseif($report->shout->shoutType ==='audio')
                                    <audio controls class="card-img-top">

                                        <source src="{{ asset($report->shout->shoutMedia)}}" type="audio/ogg" />
                                    </audio>
                                    @endif
                                </p>
                                <div class="d-flex">
                                    <form action="{{ route('deletereport', ['id'=> $report->id]) }}" method="post"
                                        class="m-2">
                                        @csrf
                                        @method('delete')
                                        <button type="submit" class="btn btn-primary">Its Safe</button>
                                    </form>
                                    <form action="{{ route('deleteshout', ['id'=> $report->shout->id]) }}" method="post"
                                        class="m-2">
                                        @csrf
                                        @method('delete')
                                        <button type="submit" class="btn btn-danger">Delete shout</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
        integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous">
    </script>
</body>

</html>
