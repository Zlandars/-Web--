let arrDepends = [];

function loader(params, callback) {
    arrDepends.push(params)
    const element = document.createElement("script"); 
    element.type ="module"; 
    element.src = params; 
    element.onload = callback; 
    document.body.appendChild(element);
}

export function loadScript(url, callback = () => {}) {
    if(arrDepends.find(element => element === url)) return;
    if (typeof url == 'string') {
        loader(url,callback);
        return callback;
    }
    url.map(item => {
        loader(item,callback);
    })
}