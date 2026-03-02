let cachedUsers = [];
let debouncer;

function fetchUsers() 
{
    fetch("https://www.theaudiodb.com/api/v1/json/123/search.php?s=bradio")
        .then(response => response.json())
        .then(data => localStorage.setItem("users", JSON.stringify(data)))
        .catch(error => console.error('Error fetching data:', error));

    cachedUsers = JSON.parse(localStorage.getItem("users"));
    console.log(cachedUsers);
}

function display()
{
    const page = document.getElementById('searchedlol');
    const image = document.createElement('img');
    const text = document.createElement('div');
    text.innerText = cachedUsers.artists[0].strBiographyEN;
    image.src = cachedUsers.artists[0].strArtistBanner;
    page.appendChild(image);
    page.appendChild(text);
}

function searchUsers(query)
{
    fetch(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => localStorage.setItem("test", JSON.stringify(data)))
        .catch(error => console.error('Error fetching data:', error));
    
    let haha = JSON.parse(localStorage.getItem("test"));
    console.log(haha);


    const page = document.getElementById('number2');
    page.innerHTML = ' ';
    const image = document.createElement('img');
    const text = document.createElement('div');
    text.innerText = haha.artists[0].strBiographyEN;
    image.src = haha.artists[0].strArtistBanner;
    page.appendChild(image);
    page.appendChild(text);
}

document.getElementById("result").addEventListener("input", (e) => {
    clearTimeout(debouncer);
    debouncer = setTimeout(() => {
        try
        {
            searchUsers(e.target.value);
        }
        catch
        {
            console.log(e.target.value);
        }
    }, 300);
    
});

fetchUsers()

display()
