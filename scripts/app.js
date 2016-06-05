$(document).ready(function(){
  console.log("Bitches and hoes");

  $.ajax({
    url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
    dataTYpe: 'json',
    success: function (data) {
      console.log('in ajax success');
      $('body').append(data);

    },
    statusCode: {
      404: function() {
        alert('error connecting to server');
      }
    }
  });





});
