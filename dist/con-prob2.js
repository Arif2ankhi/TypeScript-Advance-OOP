"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatTicketConfirmation = (ticekt) => {
    return ` ${ticekt.name}'s ticket for ${ticekt.movie}Interstellear is confirmed at ${ticekt.time} pm`;
};
console.log(formatTicketConfirmation({ name: 'Nabila', movie: 'Interstellar', time: '9.15am' }));
//# sourceMappingURL=con-prob2.js.map