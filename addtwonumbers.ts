const l1: number[] = [2,4,3], l2: number[] = [5,6,4]

const addTwoNumbersSlow = (l1: number[], l2: number[]): number[] | null => {
    const summ = (+l1.reverse().join('') + +l2.reverse().join('')).toString().split('').reverse();

    return summ.map(el => +el);
}

const addTwoNumbers = (l1: number[], l2: number[]): number[] | null => {
    

    return;
}

//console.log(addTwoNumbers(l1, l2));
console.log(l1[l1.length - 1]);