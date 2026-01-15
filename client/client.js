document.querySelector('#frmSimple').addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('http://localhost:9000/data');
});

document.querySelector('#frmNonSimple').addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('http://localhost:9000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Demo': '1'
        },
        body: JSON.stringify({ a: 1 })
    });
});