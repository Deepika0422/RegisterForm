document.getElementById('form').addEventListener('submit', function(event) {
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    const male_id=document.getElementById('male');
    const female_id=document.getElementById('female');

    
    if (username === '' || password === '' || email === '' || phone === '' ) {
        alert('Please fill in all fields.');
        event.preventDefault(); 
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
        return;
    }

    if(cpassword!=password){
        alert('Password do not match');
        event.preventDefault(); 
        return;
    }

    
    if (!email.includes('@' && '.com')) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    
    if (phone.length < 10 || isNaN(phone)) {
        alert('Phone number must be at least 10 digits long and contain only numbers.');
        event.preventDefault();
        return;
    }
    if (!male_id.checked && !female_id.checked) {
        alert('Please select your gender.');
        event.preventDefault(); 
    }
});
