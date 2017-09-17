<?php
  $empresa = Empresa::whereId($empresaID)->first();
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" style="background:#f5f6f8;">
<head>

</head>
<body bgcolor="#f5f6f8" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0" style="background-color: #f5f6f8;">

   <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
         <td align="center" valign="top" bgcolor="#f5f6f8" style="background-color: #f5f6f8;">                  
            <tr>
             <td>&nbsp;</td>
          </tr>
          <tr>
             <td align="center" bgcolor="#f5f6f8">
              <table border="0" width="600" cellpadding="20" cellspacing="0" >
               <tbody><tr>
                <td bgcolor="#ffffff" style="border:2px solid #f2f2f2;border-radius:15px;border-collapse:collapse">
                 <table width="320" border="0" cellspacing="0" cellpadding="0" align="left" >
                  <tbody><tr>
                   <td>
                    <font size="3" color="#454545" class="" style="font-family: arial,sans-serif;line-height: 22px;">
                      {{$mensaje}}
                   </font>
                </td>
             </tr>
          </tbody>
       </table>
       <table width="160" border="0" cellspacing="0" cellpadding="0" align="right" >
         <tbody><tr>
          <td align="left">
           <font size="2" color="#454545" class="" style="font-family: arial,sans-serif;line-height: 20px;">
              <a href="#" target="_blank">
                 <img src="{{asset('uploads/business-logo/min200/'.$empresa->logo)}}" alt="{{$empresa->logo}}"  alt="{{$empresa->nombre}}" class="CToWUd">
              </a>
              <br>
              <b>{{$empresa->nombre}}</b><br>
              {{$empresa->address}}<br>
              {{$empresa->city}}, {{$empresa->country}}<br>
              <a href="tel:{{$empresa->phone}}" target="_blank">
                 <font color="#454545">{{$empresa->phone}}
                 </font>
              </a>
              <br>
          </font>
       </td>
    </tr>
 </tbody>

</table>
</td>
</tr>
</tbody>

</table>
</td>
</tr>
<tr>
 <td>&nbsp;</td>
</tr>
</td>
</tr>
</table>


@include('emails.business.footer')

</body>
</html>