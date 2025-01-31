/**
 * Express router providing a static content API endpoint.
 * @module home
 */

const express = require('express');
const router = express.Router();

/**
 * GET /static-content/:param
 * @summary Returns a JSON object with a message and static content.
 * @param {string} param - The parameter sent in the URL.
 * @returns {Object} JSON object containing the message and static content.
 * @example
 * // Example request:
 * // GET /page-content/exampleParam
 * // Example response:
 * // {
 * //   "message": "status",
 * //   "staticContent": "This is some static content."
 * // }
 */
router.get('/page-content/:param', (req, res) => {
    const param = req.params.param;
    res.json({
        status: "success",
        staticContent: "<p>"
            + "<h1>Hello, " + param + "</h1>"
            + "<p>Congratulations! Your app is running smoothly with client and server integration. 🎉</p>"
            + "<p>Why did the client go to the server? Because it wanted to be served instantly! 😄</p>"
            + "<p>Enjoy seamless updates and real-time changes without any hassle. 🚀</p>"
            + "</p>"
    });
});

module.exports = router;