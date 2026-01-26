const players =
[
    {name: "alice", score: 150},
    {name: "bobo", score: 20},
    {name:"RAAAAAA", score: 4},
    {name: "cunt", score: 3000}
];
const r = [];
function populateLeaderboard(data)
{
    const table = document.getElementById('leaderboard');
    table.innerHTML =
    `
        <tr>
            <th>Player</th>
            <th>Score</th>
        </tr>
    `;

    data.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML =
        `
            <td>${(player.name)}</td>
            <td>${(player.score)}</td>
        `;
        if(index === 0)
        {
            row.classList.add("top-player");
        }
        table.appendChild(row);
    });
}

function sortLeaderboard()
{
    players.sort((a,b) => b.score - a.score);
    populateLeaderboard(players);
    save();
}

function addPlayer()
{
    const name = document.getElementById("newName").value;
    const score = parseInt(document.getElementById("newScore").value);
    players.push({name, score});
    sortLeaderboard(players);
}

function filterLeaderboard()
{
    const minScore = parseInt(document.getElementById('minScore').value);
    const filtered = players.filter(player => player.score >= minScore);
    populateLeaderboard(filtered);
}

function save()
{
    localStorage.setItem("players", JSON.stringify(players));
}

function updateScore()
{
    const replace = document.getElementById("replace").value;
    const rScore =  parseInt(document.getElementById("rScore").value);
    players.forEach(player=>
    {
        if (player.name === replace)
        {
            player.score = rScore;
        }
    });
    sortLeaderboard();
}

function removePerson()
{
    const remove = document.getElementById("remove").value;
    players.forEach(player =>
    {
        if (player.name === remove)
        {
            players.splice(players.indexOf(player), 1);
        }
    });
    sortLeaderboard(players);
}

function alphabetSort()
{
    players.sort((a,b) => a.name.localeCompare(b.name));
    populateLeaderboard(players);
    save();
}

sortLeaderboard(players);