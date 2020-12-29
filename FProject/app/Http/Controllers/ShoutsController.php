<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shout;

class ShoutsController extends Controller
{
    public function uploadmedia(Request $req)
    {
        $this->validate($req, [
            'media' => 'required|mimes:jpeg,png,jpg,gif,mp3,mp4,3gp,svg|max:20489',
          
        ]);
        $shoutsUpload = new Shout($req->input()) ;

        $shoutsUpload->type = $req->type;
        $shoutsUpload->Description= $req->Description;
         if($file = $req->hasFile('media')) {
            $file = $req->file('media') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/Shouts/' ;
            $file->move($destinationPath,$fileName);
            $shoutsUpload->media = '/public/Shouts/'.$fileName ;
        }
        $shoutsUpload->save() ;
       return response()->json(['message' => 'media Uploaded Successfully']);
    }
    public function list()
    {      
 return Shout::all();
    }

    public function destroy($id)
    {
        $shoutsUpload = Shout::find($id);
        $shoutsUpload->delete();
      //  return redirect('/');
    }
    public function update(Request $request, $id)
    {
        $shoutsUpload = Shout::find($id);
        $shoutsUpload->type = $request->input('type');
        $shoutsUpload->Description = $request->input('Description');
        if($file = $request->hasFile('media')) {
            $file = $request->file('media') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/Shouts/' ;
            $file->move($destinationPath,$fileName);
            $shoutsUpload->media = '/Shouts/'.$fileName ;
        }
        $shoutsUpload->save();
    //    return redirect('/course');

    }
}
