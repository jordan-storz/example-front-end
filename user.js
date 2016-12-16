$(document).ready(() => {



  function parseQuery(queryString) {
    let search = window.location.search;
    let result = search
      .split(/[?=]/)
      .slice(1, 3);
    let test = 'thing'
    return {
      [result[0]]: result[1]
    }
  }

  function getUserInfo(id) {
    var ENDPOINT = 'http://localhost:3000/user/' + id;
    return $.get(ENDPOINT, (response) => {
      return response;
    });
  }

  function renderUser(userInfo) {
    let source = $("#user-template").html();
    let template = Handlebars.compile(source);
    let context = userInfo;
    let html = template(context);
    $('section.users').html(html);
    return userInfo.id;
  }

getUserInfo(parseQuery()['id']).then((user) => {
  renderUser(user)
});


  console.log(parseQuery());
});
