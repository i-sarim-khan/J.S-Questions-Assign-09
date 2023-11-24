function displayFormData() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var output = document.getElementById('output');
    output.innerHTML = '<h2>Form Data:</h2>' +
                       '<p><strong>Username:</strong> ' + username + '</p>' +
                       '<p><strong>Email:</strong> ' + email + '</p>' +
                       '<p><strong>Password:</strong> ' + password + '</p>';
}