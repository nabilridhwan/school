const http = require("http");
const PORT_NUMBER = 5678;

http.createServer((request, response) => {
    const {
        headers,
        method,
        url
    } = request;

    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {

        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.

        let bodyParsed = JSON.parse(body);
        console.log(bodyParsed);

        // Send response back

        let {username, password} = bodyParsed;

        if(username.toLowerCase() == "admin@abc.com" && password == "12345678"){
            console.log("Identity verified!")
        }

    });

    
}).listen(PORT_NUMBER, () => {
    console.log(`Server running at http://localhost:${PORT_NUMBER}/`);
}); // Activates this server, listening on port 8080.