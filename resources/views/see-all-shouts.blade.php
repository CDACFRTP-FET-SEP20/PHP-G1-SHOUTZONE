
<table border="1">
    <tr>
      <td>text</td>
      <td>shoutmedia</td>
    </tr>
    @foreach($allShouts as $a)
    <tr >

      <td>    {{$a->shoutText == 'null' || $a->shoutText == 'undefined' ? ' ' : $a->shoutText}}
      </td>
      <td>

        <img

          @if $a->shoutType==='image'
    
          src="{{ assets('Shouts'.a->shoutMedia)}}"
        />
        <video *ngIf="$a->shoutType == 'video'" controls>
          <source src="{{ assets('Shouts'.a->shoutMedia)}}type="video/mp4" />
        </video>
        <audio *ngIf="$a->shoutType== 'audio'" controls>
          <source src="{{ assets('Shouts'.a->shoutMedia)}} type="audio/ogg" />
        </audio>
      </td>

    </tr>
    @endforeach

  </table>
