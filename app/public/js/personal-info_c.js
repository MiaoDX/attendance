var ourUrl = 'http://localhost:3000/';


function submitdata(formName, pwd1Id, pwd2Id) {
  var frm = $(formName);
  var pwd11 = $(pwd1Id).val();
  var pwd22 = $(pwd2Id).val();

  console.log('data:', JSON.stringify(frm.serialize()));
  console.log(pwd11, pwd22);


  if(pwd11 != pwd22 || pwd11 === '' || pwd11 === undefined){
    alert('Password not match!');
    return;
  }

  frm.submit();
}

function ajaxway(){
  $.ajax({
    type: frm.attr('method'),
    url: ourUrl + frm.attr('action'),
    data: $("#myForm").serialize(),
    dataType: 'json',
    success: function (response) {
      console.log('rtn msg:', response);
    }
  });
}
