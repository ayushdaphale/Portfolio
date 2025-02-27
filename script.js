document.querySelector('.form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const message = document.getElementById('textarea').value;

    if (!email || !message) {
        alert('Please fill in both email and message fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message }),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('email').value = ''; // Clear email field
            document.getElementById('textarea').value = ''; // Clear message field
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
    }
});