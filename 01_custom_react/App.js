
const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me'
}




function customRender(reactElement, rootElement){
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props) {
        element.setAttribute(prop , reactElement.props[prop]);
    }
    
    rootElement.appendChild(element);
}

const root = document.getElementById('root');
customRender(reactElement,root)