const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('pets');
    printHere.innerHTML = stringToPrint;
};

export {printToDom};