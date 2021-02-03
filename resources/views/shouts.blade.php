<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">


</head>
<style>
    html,
    body {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        background: #FFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    .wrapper {
        display: table;
        height: 100%;
        width: 100%;
    }

    .container-fostrap {
        display: table-cell;
        /* padding: 1em; */
        text-align: center;
        vertical-align: middle;

    }

    .fostrap-logo {
        width: 100px;
        margin-bottom: 15px
    }

    h1.heading {
        color: #fff;
        font-size: 1.15em;
        font-weight: 900;
        margin: 0 0 0.5em;
        color: #505050;
    }

    @media (min-width: 450px) {
        h1.heading {
            font-size: 3.55em;
        }
    }

    @media (min-width: 760px) {
        h1.heading {
            font-size: 3.05em;
        }
    }

    @media (min-width: 900px) {
        h1.heading {
            font-size: 3.25em;
            margin: 0 0 0.3em;
        }
    }

    .card {
        display: block;
        margin-bottom: 20px;
        line-height: 1.42857143;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        transition: box-shadow .25s;
    }

    .card:hover {
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .img-card {
        width: 100%;
        height: 100%;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        display: block;
        overflow: hidden;
    }

    .img-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .25s ease;
    }

    .card-content {
        padding: 15px;
        text-align: left;
    }

    .card-title {
        margin-top: 0px;
        font-weight: 700;
        font-size: 1.65em;
    }

    .card-title a {
        color: #000;
        text-decoration: none !important;
    }

    .card-read-more {
        border-top: 1px solid #D4D4D4;
    }

    .card-read-more a {
        text-decoration: none !important;
        padding: 10px;
        font-weight: 600;
        text-transform: uppercase
    }

    .centerCard {
        width: 100%;
        margin: 0 auto;
        height: auto;
    }

    .widthBroad {
        width: 2000px;
    }
</style>

<body widthBroad>
    @include("navbar")

    <section class="wrapper  ">

        <div class="container-fostrap  ">

            <div class="content ">
                <div class="container ">

                    @foreach($shouts as $shout)
                    <div class="w-75">
                        <div class="">

                            <div class="card ">
                                <div class="card-content">
                                    <h4 class="card-title">
                                        {{ $shout->user->username}}
                                    </h4>

                                </div>


                                    <p class="img-card"> {{$shout->shoutText == 'null' || $shout->shoutText == 'undefined' ? ' ' : $shout->shoutText}}
                                    </p>

                                    @if ($shout->shoutType==='image')
                                    <img class="card-img-top" with src="{{ asset($shout->shoutMedia)}}" />

                                    @elseif($shout->shoutType ==='video')
                                    <video controls class="card-img-top">
                                        <source src="{{asset($shout->shoutMedia)}}" type="video/mp4" />

                                    </video>


                                    @elseif($shout->shoutType ==='audio')
                                    <audio controls class="card-img-top">

                                        <source src="{{ asset($shout->shoutMedia)}}" type="audio/ogg" />
                                    </audio>
                                    @endif
                                </a>

                                <div class="card-read-more">
                                    <button class="btn btn-link btn-block"><a
                                            href="{{route('deleteshout',['id'=>$shout->id])}}">Delete Shout</a></button>
                                </div>
                            </div>
                        </div>


                    </div>
                    @endforeach
                </div>

            </div>
        </div>
    </section>


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
        integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous">
    </script>


</body>

</html>
