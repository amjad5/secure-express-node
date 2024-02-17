# Information Security with HelmetJS

This Express.js application is designed to provide enhanced security features using the Helmet middleware. Helmet is a collection of middleware functions to help secure Express apps by setting various HTTP headers.

## Middleware Configurations

### Enabled Helmet Middleware Functions:

1. **frameguard**: It sets the X-Frame-Options header to deny external framing of the webpage.
   
2. **contentSecurityPolicy**: It sets the Content-Security-Policy header to define a list of allowed sources for loading scripts, stylesheets, fonts, frames, media, etc., thereby protecting the application from XSS vulnerabilities and other security threats.
   - `defaultSrc`: Specifies the default sources for various content types.
   - `scriptSrc`: Specifies allowed sources for script loading.

3. **hsts**: It enables HTTP Strict Transport Security (HSTS) by setting the Strict-Transport-Security header, instructing the browser to enforce HTTPS for the specified duration.
   - `maxAge`: Specifies the maximum duration for which the HSTS policy is enforced.
   - `force`: Forces HTTPS usage.

4. **xXssProtection**: It enables the X-XSS-Protection header to mitigate cross-site scripting attacks.

5. **noSniff**: It sets the X-Content-Type-Options header to prevent MIME type sniffing.

6. **ieNoOpen**: It sets the X-Download-Options header to prevent IE from executing downloads in the context of the web page.

7. **hidePoweredBy**: It removes the X-Powered-By header from the response to prevent attackers from gaining information about the application's technology stack.

### Disabled Helmet Middleware Functions:

1. **dnsPrefetchControl**: DNS prefetching control middleware is disabled.

2. **noCache**: Client-side caching is disabled.

## Other Middleware Configurations:

1. **Static File Serving**: Static files in the 'public' directory are served using the `express.static` middleware.

2. **Strict-Transport-Security Disabled**: Strict-Transport-Security header enforcement is disabled.

## Routes:

1. **/_api**: Routes requests to the '/_api' path to the API defined in 'server.js'.

2. **/**: Serves the 'index.html' file from the 'views' directory for root requests.

## Server Configuration:

- The server listens on the port specified by the `PORT` environment variable or port 3000 by default.




https://www.freecodecamp.org/learn/information-security/information-security-with-helmetjs/
