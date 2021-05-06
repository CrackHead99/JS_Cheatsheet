console.log('The squad');

// Array of objects and mapping //
let data = [
    {
        name: 'Destiny',
        age: '28'
    }, 
    {
        name: 'Sarah',
        age: '30'
    }, 
    {
        name: 'John',
        age: '32'
    }, 
    {
        name: 'Tim',
        age: '27'
    }, 
    {
        name: 'Sam',
        age: '22'
    }, 
    {
        name: 'Joey',
        age: '34'
    }
];

// Event bubbling //
const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' 
        + '</div>'
    )
})

info.innerHTML = details.join('\n');
