// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector(".user-list");

async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const usersData = await users.json(); //need to await this to convert the back end to the front end readable
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

function showUserPosts(id) {
  localStorage.setItem("id100", id);//first one is the key, 2nd one is the value.
  window.location.href = `${window.location.origin}/user.html`//how to route to a new page in vanilla JS
}

function userHTML(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
      <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
  </div>`
}