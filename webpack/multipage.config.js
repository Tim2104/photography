const path = require('path')

module.exports = {
    entry: {
        main: path.join(__dirname, "../src/main.js"),
        blog: path.join(__dirname, "../src/blog.js"),
        contact: path.join(__dirname, "../src/contact.js"),
        gallery: path.join(__dirname, "../src/gallery.js"),
    },

    pages: [
        {
            chunks: ['main'],
            page: "index.html",
            template: path.join(__dirname, "../src/index.html"),
        },
        {
            chunks: ['blog'],
            page: "blog/index.html",
            template: path.join(__dirname, "../src/blog/index.html"),
        },
        {
            chunks: ['contact'],
            page: "contact/index.html",
            template: path.join(__dirname, "../src/contact/index.html"),
        },
        {
            chunks: ['gallery'],
            page: "gallery/index.html",
            template: path.join(__dirname, "../src/gallery/index.html"),
        }

    ]
}
