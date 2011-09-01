/**
 * List functions to be exported from the design doc.
 */

var templates = require('kanso/templates');
var cookies = require('kanso/cookies');

exports.history = function (head, req) {
    start({code: 200, headers: {'Content-Type': 'text/html'}});

    // grab active locations from cookies for filtering
    var locations = {
        'penn': (req.cookie.penn == "true") ? true : false,
        'underground': (req.cookie.underground == "true") ? true : false,
    }

    var title = "All of the Things";

    var row, rows = [];
    while (row = getRow()) {
        // filter locations. not as good as filtering the view...
        if (!locations[row.value.loc])
            continue;
        rows.push(row);
    }

    var content = templates.render('history.html', req, {
        rows: rows,
    });

    if (req.client) {
        $('#content').html(content);
        document.title = title;
        // set them cookies?
        //req.cookie = cookies.readBrowserCookies();
        //document.cookies = cookies.readBrowserCookies();
    }
    else {
        return templates.render('base.html', req, {
            content: content,
            title: title
        });
    }
};

