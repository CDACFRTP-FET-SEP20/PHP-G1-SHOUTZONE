<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <div class="container-fluid">
        <a class="navbar-brand" href="/home">ShoutBox</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li class="nav-item"><a class="nav-link" href="{{ route('userlist') }}">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ route('shoutList') }}">All Shouts</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ route('report') }}">Reported Shout</a></li>
                <li class="nav-item"><a class="nav-link" href="{{ route('logout') }}">Log out</a></li>
            </ul>
        </div>
    </div>
</nav>
