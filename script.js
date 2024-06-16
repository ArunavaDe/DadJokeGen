document.getElementById('jokeBtn').addEventListener('click', generateJoke);

async function generateJoke() {
    const jokeElement = document.getElementById('joke');
    const apiUrl = 'https://icanhazdadjoke.com/';

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        jokeElement.classList.add('hidden');
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        setTimeout(() => {
            jokeElement.textContent = data.joke;
            jokeElement.classList.remove('hidden');
        }, 500);
    } catch (error) {
        jokeElement.textContent = 'Failed to fetch a joke. Please try again!';
        console.error(error);
    }
}
