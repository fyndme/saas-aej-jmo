// Globals
// newScript
// getScript
// addGreeting
// request

addGreeting((user, response) => {
    response.sendText("I'll be showing you today's space photo!")
})

newScript().dialog((session, response, stop) => {
    // yes DEMO_KEY works, just lay off spamming nasa :)
    request({
        uri: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
        method: 'GET',
        json: true,
    }).then((nasa) => {
        response.sendText(nasa.title);
        response.sendImage(nasa.url);
    })
})