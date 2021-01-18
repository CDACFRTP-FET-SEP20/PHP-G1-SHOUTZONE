<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bio;
use App\Models\Friends;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Mockery\Exception;

class UserController extends Controller
{
    public function register(Request $request)
    {
        try {

            $request->validate([

                'username' => 'required',
                'email' => 'email|required',
                'password' => 'required',
                'name' => 'required',
                'gender' => 'required',
                'dob' => 'required'

            ]);

            $user = new User;
            $user->username = $request->username;
            $user->email = $request->email;
            $user->password = Hash::make($request->password); //password
            $user->save();
            $bio = new Bio;
            $bio->name = $request->name;
            $bio->gender = $request->gender;
            $bio->dob = $request->dob;
            $bio->profile_photo = $request->profile_photo;
            $user->bio()->save($bio);

            return response()->json([
                'status_code' => 200,
                'result' => 'register',

            ]);
        } catch (Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Register',
                'error' => $error,
            ]);
        }
    }

    function update(Request $request)
    {
        $user = User::find($request->id);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->bio->name = $request->name;
        $user->bio->description = $request->description;
        $user->bio->save();
        $result = $user->save();

        if ($result) {
            return ["result" => "upadted"];
        } else {
            return ["result" => "failed"];
        }
    }

    public function userInfoById($id)
    {
        $user = User::find($id);
        $user->bio;
        return $user;
    }

    function delete($id)
    {
        $user = User::find($id);
        $user->delete();
    }

    public function getUserDetails($id)
    {
        $user = User::find($id);
        $user->bio;
        $friends = Friends::where('approved', 1)
            ->where('sender', $id)
            ->orWhere('reciever', $id);

        $res = ['user' => $user, 'shouts' => $user->shout->count(), 'friends' => $friends->count()];
        return response()->json($res);
    }
}
