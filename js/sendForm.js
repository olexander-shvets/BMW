window.addEventListener('DOMContentLoaded', () => {
    const server = 'https://jsonplaceholder.typicode.com/posts';

    const sendData = (data, callback, falseCallback) => {
        const request = new XMLHttpRequest();
        request.open('POST', server);

        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) return;
            if (request.status === 200 || request.status === 201) {
                const response = JSON.parse(request.responseText);
                callback(response.id);
            } else {
                falseCallback(request.status);
                throw new Error(request.status);
            }
        });

        request.send(data);
    };

    const formElements = document.querySelectorAll('.form');

    const formHandler = (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = {};

            for (const { name, value } of form.elements) {
                if (name) {
                    data[name] = value;
                }
            }

            const smallElement = document.createElement('small');

            sendData(JSON.stringify(data), (id) => {
                smallElement.textContent = 'Your form №' + id + ' was sent!\nWe will call you soon!';
                smallElement.style.color = 'green';
                form.append(smallElement);
            }, (err) => {
                smallElement.textContent = 'Error' + err;
                smallElement.style.color = 'red';
                form.append(smallElement);
            });
            form.reset();
        });
    };

    formElements.forEach(formHandler);

});