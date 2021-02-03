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
<style>
    .card {
        padding: 3%;
    }
</style>

<body>


    @include("navbar")

    {{-- @if(session('success'))
    <div class="text-success">
        {{session('success')}}
    </div> @endif --}}
    @if(session('success'))
    <div class="toast" data-autohide="false">
        <div class="toast-header">
            <strong class="mr-auto text-primary">Toast Header</strong>
            <small class="text-muted">5 mins ago</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
        </div>
        <div class="toast-body">
            {{session('success')}}
        </div>
    </div>
    @endif

    <div class="card">
        <h2>List Of Users </h2>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col"> Name</th>
                    <th scope="col"> gender</th>
                    <th scope="col">dob</th>
                    <th scope="col">Status</th>
                    <th scope="col">Change Status</th>
                    <th scope="col">Delete User </th>

            </thead>
            <tbody>

                @foreach($users as $user)
                <tr>
                    <td>{{ $user->id }}</td>
                    <td>{{ $user->bio->name }}</td>
                    <td>{{ $user->bio->gender }}</td>
                    <td>{{ $user->bio->dob }}</td>
                    <td>@if($user->is_approved ==0)
                        Inactive
                        @else
                        Active
                        @endif
                    </td>

                    <td>
                        <a href="{{ route('adminApproval',['id'=>$user->id]) }}">
                            @if($user->is_approved ==0)
                            <button class="btn btn-success">ActivateUser</button>
                            @else
                            <button class="btn btn-danger">DeactivateUser</button>
                            {{-- <button class="btn btn-info" >Active User</button> --}}
                            @endif
                        </a>

                    </td>
                    <td>
                        <a type="button" class="btn btn-danger"
                            href="{{ route('deleteuser',['id'=>$user->id]) }}">Delete User</a>
                    </td>

                </tr>
                @endforeach

            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
        integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous">
    </script>


</body>

</html>
