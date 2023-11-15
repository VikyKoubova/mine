console.log(`funguje`);

const jmenoUzivatele = window.prompt(`Jak ti mám říkat?`, `Karle`);
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const poprve = window.confirm('Hrál jsi tuto hru už předtím?');
console.log(poprve)

if (!poprve) {
    const tutorial = window.confirm('Chceš tutoriál?');
    if (tutorial) {
        window.alert('Klikni na tlačítko "Start" pako...')
    }
    else {
        window.alert(`Užij si hraní ${jmenoUzivatele}!`);
    }
}

else {
    window.alert(`Užij si hraní ${jmenoUzivatele}!`);
}