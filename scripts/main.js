// Globals
// newScript
// getScript
// addGreeting
// request

addGreeting((user, response) => {
    response.sendText("I'll be showing you today's space photo!")
})

newScript()
    .dialog((session, response, stop) => {
        console.log('hey');
        request({
            uri: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
            method: 'GET',
            json: true,
        })
            .then((nasa) => {
                console.log(nasa);
                response.sendText(nasa.title)
            })
        response.sendImage('http://apod.nasa.gov/apod/image/1703/KingOfWings_Pinkston_960.jpg');
    })