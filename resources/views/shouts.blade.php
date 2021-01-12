
   <table border="1">
    <tr>
      <td>text</td>
      <td>shoutmedia</td>
    </tr>
    @foreach($shouts as $shout)

    <tr >

      <td>    {{$shout->shoutText == 'null' || $shout->shoutText == 'undefined' ? ' ' : $shout->shoutText}}
      </td>
      <td>
          @if ($shout->shoutType==='image')
          <img
          src="{{ asset($shout->shoutMedia)}}"
        />

        @elseif($shout->shoutType ==='video')
        <video controls>
          <source src="{{asset($shout->shoutMedia)}}" type ="video/mp4" />

        </video>


        @elseif($shout->shoutType ==='audio')
        <audio  controls>

          <source src="{{ asset($shout->shoutMedia)}}" type="audio/ogg"/>
        </audio>



        @endif
        <button><a href="{{route('deleteshout',['id'=>$shout->id])}}">Delete Shout</a></button>
      </td>

    </tr>


    @endforeach

  </table>




