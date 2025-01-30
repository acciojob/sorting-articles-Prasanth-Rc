//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function displaySortedBands() {
    const sortedBands = bands.sort((a, b) => {
        const cleanA = a.replace(/^(a |an |the )/i, '').toLowerCase();
        const cleanB = b.replace(/^(a |an |the )/i, '').toLowerCase();
        return cleanA.localeCompare(cleanB);
    });

    const listElement = document.getElementById('bands');

    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        listElement.appendChild(listItem);
    });
}

displaySortedBands();   