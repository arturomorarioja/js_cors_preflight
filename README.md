# CORS Preflight
Demo to ilustrate CORS preflight requests. It contains a server and a client.

The server serves an API endpoint at `http://localhost:9000/data`.

It only allows requests (both simple and non-simple) from `http://localhost:5500` (not `http://127.0.0.1:5500`).

## Usage
Unsuccessful CORS preflight request:
1. Run the client application at `http://localhost:5500`. Open it in Firefox
2. Open Firefox's Network tab. Click on `XHR`
3. Click on **Simple request -> Send**
    - A `GET` request is attempted. Since the server is not running, after a few seconds it fails. Because it is a simple request, there is no preflight request
4. Click on **Non-simple request -> Send**
    - A `POST` request with custom headers is attempted. Because it is a non-simple request, an `OPTIONS` preflight request is attempted before the actual `POST` request. Since the server is not running, after a few seconds the `OPTIONS` request fails, but the `POST` request never executes

Successful CORS preflight request:
1. Start the server: `node server/server.js`
2. Run the client application at `http://localhost:5500`. Open it in Firefox
3. Open Firefox's Network tab. Click on `XHR`
4. Click on **Simple request -> Send**
    - A `GET` request succeeds with status code `200`
5. Click on **Non-simple request -> Send**
    - A `POST` request with custom headers succeeds. First there is a successful `OPTIONS` requests that returns no data (status code `204`), then the `POST` request returns a status code `200`

## Tools
Express / Node.JS / JavaScript / Water.css / HTML5

## Author
Server: ChatGPT 5.2, prompted by Arturo Mora-Rioja.  
Client: Arturo Mora-Rioja