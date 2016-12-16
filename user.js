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
        var ENDPOINT = 'https://sticker-app.herokuapp.com/user' + id;
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

    function renderStickers(stickerInfo) {
        let source = $("#sticker-template").html();
        let template = Handlebars.compile(source);
        let context = {
            stickers: stickerInfo
        };
        let html = template(context);
        $('section.stickers').html(html);
    }

    getUserInfo(parseQuery()['id']).then((user) => {
        renderUser(user)
        getSticker(user.id)
            .then(function(stickers) {
                console.log(stickers);
                renderStickers(stickers)
            })
    });

    function getSticker(id) {
        return $.get('http://localhost:3000/user/' + id + '/sticker', function(data) {
            return data;
        })
    }


    console.log(parseQuery());
});
