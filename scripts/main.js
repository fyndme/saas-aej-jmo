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
        response.sendImage('http://apod.nasa.gov/apod/image/1703/KingOfWings_Pinkston_960.jpg');
    })