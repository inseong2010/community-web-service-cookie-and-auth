var template = {
    HTML: function(title, list, body, control) {
        return `
        <!doctype html>
        <html lang="ko">
        <head>
            <a href="/login">login</a>
            <title>${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            </style>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${control}
            ${body}
        </body>
        </html>
            `;
    },
    LIST: function(filelist) {
        var list = '<ul>';
        var i = 0;
        while(i < filelist.length) {
            list = list + `<li><a href="/?page=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i+1;
        }
        list = list+'</ul>';
        return list;
    },
}

module.exports = template;