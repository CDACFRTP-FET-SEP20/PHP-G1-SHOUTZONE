<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bio;
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

            $tokenResult = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'status_code' => 200,
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
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
        $user->password = Hash::make($request->password); //password
        $user->bio->name = $request->name;
        $user->bio->gender = $request->gender;
        $user->bio->dob = $request->dob;
        $user->bio->profile_photo = $request->profile_photo;
        $user->bio->save();
        $result = $user->save();

        if ($result) {
            return ["result" => "upadted"];
        } else {
            return ["result" => "failed"];
        }
    }

    function delete($id)
    {
        $user = User::find($id);
        $user->delete();
    }
}
