
type Ticket = {name:string, movie:string, time:string}

const formatTicketConfirmation = (ticekt:Ticket):string => {

    return ` ${ticekt.name}'s ticket for ${ticekt.movie}Interstellear is confirmed at ${ticekt.time} pm`


}

console.log(formatTicketConfirmation({name: 'Nabila', movie: 'Interstellar', time: '9.15am'}));

