<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <button> <a href="{{ route('logout') }}">Log Out</a></button>

    @if(session('success'))
    <div>
        {{session('success')}}
    </div>
    @endif


    <table class="table">
        <thead class="thead-light">
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
                    <button> <a href="{{ route('adminApproval',['id'=>$user->id]) }}">
                            @if($user->is_approved ==1)
                            DeactivateUser
                            @else
                            Activate User
                            @endif
                        </a>
                    </button>
                </td>
                <td>
                    <button> <a href="{{ route('deleteuser',['id'=>$user->id]) }}">Delete User</a></button>
                </td>

            </tr>
            @endforeach

        </tbody>
    </table>



</body>

</html>
