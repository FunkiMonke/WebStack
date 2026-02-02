const params = new URLSearchParams(window.location.search);
const userId = 1;
var count = userId;
//const userID = params.get('id');
//use this in actual applications

fetch(`https://dummyjson.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
        const detailsDiv = document.getElementById('staffDetails');
        detailsDiv.innerHTML = `
            <h2>${data.firstName} ${data.lastName}</h2>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Age: ${data.age}</p>
            <p>Address: ${data.address.city}, ${data.address.state}</p>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));

fetch(`https://dummyjson.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(data => {
        const postSec = document.getElementById('posts');
        console.log(data.posts);
        data.posts.forEach(post => {
            const postDiv = document.createElement('div');
            const postComs = fetch(`https://dummyjson.com/posts/${userId}/comments`)
                .then(response => response.json())
                .then(data2 => {
                    data2.comments.forEach(comment => {
                        const com = document.createElement('div');
                        if(post.userId = comment.postId)
                        {
                            com.innerHTML =
                            `
                            <p>${comment.body}</p>
                            `;
                            postDiv.appendChild(com);
                        }
                    })
                })
                .catch(error => console.error('Error lol: ', error));

            postDiv.innerHTML = 
            `
            <h4>${post.title}</h4>
            <p>ID: ${post.id}</p>
            <p>Tags: ${post.tags}</p>
            <p>Views: ${post.views}</p>
            <h3>Comments</h3>
            `;
            postSec.appendChild(postDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function allStaff()
{
    fetch(`https://dummyjson.com/users?limit=3&skip=${count}`)
    .then(res => res.json())
    //.then(console.log)
    .then(data => {
        console.log(data)
        const staffDiv = document.getElementById('staff');
            staffDiv.innerHTML = '';
        data.users.forEach(user => {
            const staff = document.createElement('ul')
            staff.innerHTML =
            `
            <p> ${user.firstName} ${user.lastName}: ${user.age}</p>
            `;
            staffDiv.appendChild(staff);
        })
    })
    count+=3;
}
allStaff()