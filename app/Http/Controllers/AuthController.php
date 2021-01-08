<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use TheSeer\Tokenizer\Exception;


class AuthController extends Controller
{
    public function userLogin(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required',
                'password' => 'required'
            ]);

            $credentials = request(['username', 'password']);

            if (!Auth::attempt($credentials)) {
                return response()->json([
                    'status_code' => 500,
                    'message' => 'Unauthorized'
                ]);
            }

            $user = User::where('username', $request->username)->first();
            if (!Hash::check($request->password, $user->password, [])) {
                throw new \Exception('Error in Login');
            }
            $approval = auth()->user()->is_approved;
            if (!$approval) {
                // return 'Wait for Approval';
                return response()->json([
                    'status_code' => 405,
                    'message' => 'Unauthorized'
                ]);
            }

            $role = auth()->user()->role;
            if ($role !== "user") {
                //return ' Please check your credentials';
                return response()->json([
                    'status_code' => 300,
                    'message' => 'Unauthorized'
                ]);
            }
            $user = auth()->user();
            $bio = auth()->user()->bio;

            //$tokenResult = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                "user" => $user,
                //"bio" =>$bio,
                'status_code' => 200,
                //'access_token' => $tokenResult,
                'token_type' => 'Bearer',
            ]);
        } catch (Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Login',
                'error' => $error,
            ]);
        }
    }
    public function adminLogin(Request $request)
    {

        try {
            $request->validate([
                'username' => 'required|max:20',
                'password' => 'required'
            ]);
            $credentials = request(['username', 'password']);

            if (!Auth::attempt($credentials)) {
                return Redirect()->back()->withErrors(['msg' => 'Please Fill Credentials Properly']);
            }

            $user = User::where('username', $request->username)->first();
            if (!Hash::check($request->password, $user->password, [])) {
                throw new \Exception('Please Fill Credentials Properly1');
            }
            $role = auth()->user()->role;
            if ($role !== "admin") {
                return Redirect()->back()->withErrors(['msg' => 'Please Fill Credentials Properly For Admin']);
                return view('/adminLogin');
            } else {
                $users = User::all()->where('role', 'user');
                return view('home', ['users' => $users]);
                //return view('home', [AdminController::class, 'userList']);


            }
        } catch (Exception $error) {
            return "Error in Login";
        }
    }
}
