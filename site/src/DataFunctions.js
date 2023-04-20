function sign_up() {
    // Simple POST request with a JSON body using fetch
    const result = {};

    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "username": "z5309068@ad.unsw.edu.au",
        "password": "AH7YM2AVQNL4M2D1x",
        "group": "H14B_DELTA"
    })
    };
    fetch('/sign_up', requestOptions)
        .then(response => response.json())
        .then(response => result = response);
    return result;
}