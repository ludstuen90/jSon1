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

      setTimeout(studentGenerator, 325);




//Empty contents of the '#classMate' DIV on the page, and write the student's information for index [i]
//of the students array

    },
    statusCode: {
      404: function() {
        alert('error connecting to server');
      }

}
  });





  var studentGenerator = function() {

    var firstName = friends.students[i].first_name;
    var firstNameC = (firstName.charAt(0).toUpperCase() + firstName.slice(1));
    var lastName = friends.students[i].last_name;
    var lastNameC = (lastName.charAt(0).toUpperCase() + lastName.slice(1));
    var city = friends.students[i].city;
    var cityC = (city.charAt(0).toUpperCase() + city.slice(1));
    var shoutOut = friends.students[i].shoutout;
    // var donothing= function(){};
        //clear and replace existing div

        $('#classMate').remove();
        var showMe= document.createElement('div');
        showMe.id= "classMate";
        // generate First name from JSON
        var firstNameContent = document.createElement('p');
        firstNameContent.textContent = "First Name: " + firstNameC;
        showMe.appendChild(firstNameContent);
        // generate Last name from JSON

        var lastNameContent = document.createElement('p');
        lastNameContent.textContent = "Last Name: " + lastNameC;
        showMe.appendChild(lastNameContent);
        // generate city from JSON
        var cityContent = document.createElement('p');
        cityContent.textContent = "City: " + cityC;
        showMe.appendChild(cityContent);

          //generate shoutout from JSON
          var soContent = document.createElement('p');
          soContent.textContent = "Shout out: " + shoutOut;
          showMe.appendChild(soContent);



        //update Progress Indicator
        var progress = document.createElement('p');

        var bumpUp = (i+1);
        progress.textContent = bumpUp + " / 20";
        showMe.appendChild(progress);
        $('body').append(showMe);
        $('#classMate').hide().fadeIn();
};
var fadeOut = function() {
 setTimeout(studentGenerator, 325);

        $('#classMate').fadeOut();


};

var nextStudent = $(document).on('click', '#nextS', function () {
  if( friends.students[(i +1)] === undefined) {
    i=0;

    fadeOut();
  }

else {
  i++;
  console.log(i);

  fadeOut();
}
});

var prevStudent =$(document).on('click', '#prevS', function() {
  if(i===0) {
    i= (19);
    fadeOut();
  }
  else {
    i--;
    console.log(i);
    fadeOut();
  }
});

});
