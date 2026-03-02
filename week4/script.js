
let cachedUsers = [];

async function fetchUsers() 
{
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    
    localStorage.setItem("users", JSON.stringify(data.results));
    cachedUsers = data.results;
    displayUsers(cachedUsers);
}

function createUserCard(user)
{
    const newCard = document.createElement('div');
    newCard.className = "col-12";
    newCard.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
        <img src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
        </div>
    </div>
    `;
    return newCard;
}

function displayUsers(users) {
    const container = document.getElementById("searchedlol");
    container.innerHTML = ' '; 

    users.forEach(user => {
        container.appendChild(createUserCard(user));
    });
}

function searchUsers(query)
{
    const filtered = cachedUsers.filter(user => 
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.name.last.toLowerCase().includes(query.toLowerCase())
    );
    
    displayUsers(filtered);
}

document.getElementById("searchInput").addEventListener("input", (e) => {
    searchUsers(e.target.value);
});

if (localStorage.getItem("users")) 
{
    cachedUsers = JSON.parse(localStorage.getItem("users"));
    displayUsers(cachedUsers);
} 

else 
{
    fetchUsers();
}