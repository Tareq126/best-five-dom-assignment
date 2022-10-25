//player list
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


//calculation part
function totalPlayerCost() {
    const perPlayerCost = getInputFieldValue('per-player-cost');
    const totalPlayerNumber = getTextElementValue('playerCount');
    const totalPlayerCost = totalPlayerNumber * perPlayerCost;
    setTextElementValue('displayTotalPlayerExpenses', totalPlayerCost);
}

function CalculateTotal() {
    const managerCost = getInputFieldValue('manager-cost');
    const coachCost = getInputFieldValue('coach-cost');
    const totalPlayerCost = getTextElementValue('displayTotalPlayerExpenses');

    const totalExpenses = managerCost + coachCost + totalPlayerCost;
    setTextElementValue('total', totalExpenses);
}
