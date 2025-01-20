type Dice2 = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(dice: Dice2): Dice2 {
    let num = Math.floor(Math.random() * 6) + 1;
    // number형식은 dice 형식에 할당하수 없음
    console.log(dice, num);
    return num as Dice2;
}
function asNumber(dice: Dice2): number {
    return dice;
}

rollDice(1);
// Argument of type '7' is not assignable to parameter of type 'Dice2'.
rollDice(7);

type Person6 = {
    name: string;
    age: number;
};

function createdemonPerson(name: string) {
    const person: Person6 = { name, age: Math.floor(Math.random() * 95) };

    return person;
}
