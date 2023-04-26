
function getHeaders(values) {
    let headers = new Headers();
    if(!values) return headers;
    for(const key in values) {
        headers.set(key, values[key]);
    };
    return headers;
}

function getUrlWithParams(url, params) {
    if(!params) return url;
    let newUrl = url;
    let count = 0;
    for(const key in params) {
        if(count === 0) newUrl = newUrl.concat('?')
        else newUrl = newUrl.concat('&');
        newUrl = newUrl.concat(`${key}=${params[key]}`);
        count = count+1;
    };
    return newUrl;
}

function request(url, method, params, headerParams) {
    const headers = getHeaders(headerParams);
    const newUrl = getUrlWithParams(url, params);
    const request = new Request(newUrl, {
        method,
        headers,
    });
    fetch(request).then(data => console.log({data})).catch(error => console.log({error}));
};

request('https://jsonplaceholder.typicode.com/posts', 'GET', { teste: 'teste1' });
