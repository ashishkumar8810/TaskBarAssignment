// Show Password Logic for Login and Register
document.getElementById('showPassword')?.addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});

document.getElementById('showPasswordRegister')?.addEventListener('change', function () {
    const passwordField = document.getElementById('newPassword');
    const confirmPasswordField = document.getElementById('confirmPassword');
    passwordField.type = this.checked ? 'text' : 'password';
    confirmPasswordField.type = this.checked ? 'text' : 'password';
});

// Registration
document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});

// Task Management
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        tasks.push(taskInput.value.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Display tasks on dashboard load
if (document.getElementById('taskList')) {
    displayTasks();
}

// Logout Logic
function logout() {
    localStorage.clear();
    window.location.href = 'login.html';
}
