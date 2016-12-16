$(document).ready(function() {

  function getUsers() {
    return $.get('https://sticker-app.herokuapp.com/user', function(users) {
      console.log(users);
    });
  }

  function renderUsers(users) {
    let source = $("#users-template").html();
    let template = Handlebars.compile(source);
    let context = {users};
    let html = template(context);
    $('main').html(html);
    return userInfo.id;
  }

  getUsers().then((users) => {
    renderUsers(users);
  })


});
