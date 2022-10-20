function display(playerList) {
    console.log(playerList);

    const list = document.getElementById('SelectedPlayerList');
    list.innerHTML = '';

    for (let i = 0; i < playerList.length; i++) {
        const name = playerList[i].playerName;
        console.log(name);
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
