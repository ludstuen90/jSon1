var friends = '';
var i = 0;

$(document).ready(function(){
  console.log("Bitches and hoes");


  $.ajax({
    url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
    dataTYpe: 'json',
    success: function (data) {
      console.log('in ajax success');
      friends= JSON.parse(data);
      var firstName = friends.students[i].first_name;
      var lastName = friends.students[i].last_name;
      var city = friends.students[i].city;
      var shoutOut = friends.students[i].shoutout;

      console.log("The coolest student is " + firstName + " "  + lastName + ",  who lives in " + city + " and I'd like to say! " + shoutOut);


      $('#classMate').remove();
      var showMe= document.createElement('div');
      showMe.id= "classMate";
      var paragraph = document.createElement('p');
      paragraph.textContent = "First Name: " + friends.students[1].first_name;
      showMe.appendChild(paragraph);
      $('body').append(showMe);

    },
    statusCode: {
      404: function() {
        alert('error connecting to server');
      }

}
  });









});
