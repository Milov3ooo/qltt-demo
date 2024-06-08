
    document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
    populateTables();
});

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
];

const posts = [
    { id: 1, title: 'First Post', author: 'John Doe', date: '2023-05-01' },
    { id: 2, title: 'Another Post', author: 'Jane Smith', date: '2023-05-02' },
];

function populateTables() {
    const userTableBody = document.getElementById('user-table-body');
    userTableBody.innerHTML = '';
    users.forEach(user => {
        userTableBody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button onclick="editUser(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `;
    });

    const postTableBody = document.getElementById('post-table-body');
    postTableBody.innerHTML = '';
    posts.forEach(post => {
        postTableBody.innerHTML += `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.author}</td>
                <td>${post.date}</td>
                <td>
                    <button onclick="editPost(${post.id})">Edit</button>
                    <button onclick="deletePost(${post.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addUser() {
    const newName = prompt('Enter user name:');
    const newEmail = prompt('Enter user email:');
    const newRole = prompt('Enter user role:');
    if (newName && newEmail && newRole) {
        const newId = users.length ? users[users.length - 1].id + 1 : 1;
        users.push({ id: newId, name: newName, email: newEmail, role: newRole });
        populateTables();
    }
}

function editUser(id) {
    const user = users.find(user => user.id === id);
    if (user) {
        const newName = prompt('Enter new name:', user.name);
        const newEmail = prompt('Enter new email:', user.email);
        const newRole = prompt('Enter new role:', user.role);
        if (newName && newEmail && newRole) {
            user.name = newName;
            user.email = newEmail;
            user.role = newRole;
            populateTables();
        }
    }
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        populateTables();
    }
}

function addPost() {
    const newTitle = prompt('Enter post title:');
    const newAuthor = prompt('Enter post author:');
    const newDate = prompt('Enter post date:');
    if (newTitle && newAuthor && newDate) {
        const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
        posts.push({ id: newId, title: newTitle, author: newAuthor, date: newDate });
        populateTables();
    } else {
        alert('Please fill in all fields.');
    }
}
function editPost(id) {
    const postToEdit = posts.find(post => post.id === id);
    if (postToEdit) {
        const newTitle = prompt('Enter new title:', postToEdit.title);
        const newAuthor = prompt('Enter new author:', postToEdit.author);
        const newDate = prompt('Enter new date:', postToEdit.date);
        if (newTitle && newAuthor && newDate) {
            postToEdit.title = newTitle;
            postToEdit.author = newAuthor;
            postToEdit.date = newDate;
            populateTables();
        } else {
            alert('Please fill in all fields.');
        }
    } else {
        alert('Post not found.');
    }
}
function deletePost(id) {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
        posts.splice(index, 1);
        populateTables();
    } else {
        alert('Post not found.');
    }
}

