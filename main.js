function createCard(date, day, games) {
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="bandeira de ${player2}">
        </li>
    `
}



document.querySelector('#app').innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="logo NLW COPA">
    </header>
    <main id="cards">
        ${createCard("24/11", "quinta", 
        createGame("brazil", "16:00", "serbia") )}
        ${createCard("28/11", "segunda", 
        createGame("brazil", "13:00", "switzerland") + createGame("portugal", "16:00", "uruguay"))}
        ${createCard("02/12", "sexta", 
        createGame("cameroon", "16:00", "brazil"))}
    </main>
`
