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

      studentGenerator();




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
    var shoutOut = friends.students[i].shoutout;
        $('#classMate').remove();
        var showMe= document.createElement('div');
        showMe.id= "classMate";
        var firstNameContent = document.createElement('p');
        firstNameContent.textContent = "First Name: " + firstNameC;
        showMe.appendChild(firstNameContent);
        var lastNameContent = document.createElement('p');
        lastNameContent.textContent = "Last Name: " + lastNameC;
        showMe.appendChild(lastNameContent);
        var progress = document.createElement('p');
        var bumpUp = (i+1);
        progress.textContent = bumpUp + " / 20";
        showMe.appendChild(progress);
        $('body').append(showMe);
};

var nextStudent = $(document).on('click', '#nextS', function () {
  if( friends.students[(i +1)] === undefined) {
    alert("Sorry! You're already at the last student.");
  }

else {
  i++;
  console.log(i);

  studentGenerator();
}
});

var prevStudent =$(document).on('click', '#prevS', function() {
  if(i===0) {
    alert("You're already at the first student.");
  }
  else {
    i--;
    console.log(i);
    studentGenerator();
  }
});

});
