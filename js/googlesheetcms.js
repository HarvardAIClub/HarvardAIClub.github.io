var publicGoogleSheetURL = "1NkT8IG3crTrlqhDUK-5wHVZIkuiEt5jOQWUAhzSd4Zc"

function init() {
    Tabletop.init( {key: publicGoogleSheetURL,
                    callback: showInfo,
                    simpleSheet:true} )
    }

function showInfo(data, tabletop) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
    $('.post').append(
    '<tr><th scope="row">' +
    data[i].topic +
    '</td><td>' +
    data[i].description +
    '</td><td><a href="' +
    data[i].link +
    '">' +
    data[i].institution +
    '</a></td></tr>'
    );
    }
}
window.addEventListener('DOMContentLoaded', init)