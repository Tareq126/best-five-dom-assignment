function display(playerList) {

    const list = document.getElementById('SelectedPlayerList');
    list.innerHTML = '';

    for (let i = 0; i < playerList.length; i++) {
        const name = playerList[i].playerName;
        const li = document.createElement('li');
        li.innerHTML = `
        ${name}`;
        list.appendChild(li);
    }
}

const playerArrayList = [];

function selectPlayer(element) {
    const playerName = element.parentNode.children[1].innerText;

    const playerObject = {
        playerName: playerName,
    }
    playerArrayList.push(playerObject);

    if (playerArrayList.length <= 5) {
        document.getElementById('playerCount').innerText = playerArrayList.length;
        display(playerArrayList);
    }
    else {
        alert('Can not select more than five');
        return;
    }
}

function totalPlayerCost() {
    const perPlayerCostElement = document.getElementById('per-player-cost').value;
    const totalPlayerNumber = parseInt(document.getElementById('playerCount').innerText);
    const perPlayerCost = parseInt(perPlayerCostElement);
    const totalPlayerCost = totalPlayerNumber * perPlayerCost;
    const displayTotalPlayerExpenses = document.getElementById('displayTotalPlayerExpenses');
    displayTotalPlayerExpenses.innerText = totalPlayerCost;
}

function CalculateTotal() {
    const managerCost = parseInt(document.getElementById('manager-cost').value);
    const coachCost = parseInt(document.getElementById('coach-cost').value);
    const totalPlayerCost = parseInt(document.getElementById('displayTotalPlayerExpenses').innerText);

    const totalExpenses = managerCost + coachCost + totalPlayerCost;
    const displayTotal = document.getElementById('total');
    displayTotal.innerText = totalExpenses;
}
