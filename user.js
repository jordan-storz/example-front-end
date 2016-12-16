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

  console.log(parseQuery());
});
