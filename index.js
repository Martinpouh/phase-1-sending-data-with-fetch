function submitData(Name, Email) {
    return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: `${Name}`,
                email: `${Email}`,
            }),
        })
        .then(response => response.json())
        .then(object => {
            renderObjId(object)
        })
        .catch(error => {
            renderError(error)
        })
}

// handles the POST request response, retrieves the new id value and appends it to the DOM
function renderObjId(obj) {
    const createElement = document.createElement('p');
    createElement.innerHTML = obj.id;
    document.querySelector('body').appendChild(createElement);
}

// handles a failed POST request using catch, appends the error message to the DOM
function renderError(errObj) {
    const createElement = document.createElement('p');
    createElement.innerHTML = errObj.message;
    document.querySelector('body').appendChild(createElement);
}