const marked = require("marked");
const sanitizeHtmlLibrary = require('sanitize-html');
const TurnDownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurnDownService();  
    //1. Convert markdown to HTMl
    const convertedHTML = marked.parse(markdownContent);
    // console.log("Converted HTML as -> " ,convertedHTML);
    //2. Sanitize HTML
    const sanitizedHTML = sanitizeHtmlLibrary(convertedHTML,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    })
    // console.log("Sanitized HTML as -> " ,sanitizedHTML);
    // 3. Convert the sanitized HTMl back to markup
    const sanitizedMarkDown =  turndownService.turndown(sanitizedHTML);
    // console.log(sanitizedMarkDown);
    // console.log("Sanitized markdown as -> " ,sanitizedMarkDown);
    return sanitizedMarkDown;
}

module.exports = sanitizeMarkdownContent;
// const input = `
// # Welcome

// This is **bold** and <script>alert('XSS');</script>

// [Click here](https://malicious.site)

// <img src="http://evil.com/hack.png" onerror="stealCookies()">

// - Item 1
// - Item 2
// }`

// sanitizeMarkdownContent(input);
