<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shout;

class ShoutsController extends Controller
{
    public function uploadmedia(Request $req)
    {

        $this->validate($req, [
            'shoutMedia' => 'mimes:jpeg,png,jpg,gif,mp3,mp4,3gp,svg|max:20489',
          
        ]);
        $shoutsUpload = new Shout($req->input()) ;
        
   
        $shoutsUpload->shoutType = $req->shoutType;
        $shoutsUpload->shoutText= $req->shoutText;
         if($file = $req->hasFile('shoutMedia')) {
            $file = $req->file('shoutMedia') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/Shouts/' ;
            $file->move($destinationPath,$fileName);
            $shoutsUpload->shoutMedia = '/Shouts/'.$fileName ;
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
     
    }
    public function update(Request $request, $id)
    {
        $shoutsUpload = Shout::find($id);
        $shoutsUpload->shoutType = $request->input('shoutType');
        $shoutsUpload->shoutText = $request->input('shoutText');
        if($file = $request->hasFile('shoutMedia')) {
            $file = $request->file('shoutMedia') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/Shouts/' ;
            $file->move($destinationPath,$fileName);
            $shoutsUpload->shoutMedia = '/Shouts/'.$fileName ;
        }
        $shoutsUpload->save();
  

    }
}
