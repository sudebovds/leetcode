const l1: number[] = [2,4,3,4], l2: number[] = [5,6,4,5,8,9,7,4,1,2,5,7]

const addTwoNumbersSlow = (l1: number[], l2: number[]): number[] | null => {
    const summ = (+l1.reverse().join('') + +l2.reverse().join('')).toString().split('').reverse();

    return summ.map(el => +el);
}

const addTwoNumbers = (l1: number[], l2: number[]): number[] | null => {
    const answer: number[] = new Array();
    let carry: 0 | 1 = 0; 
    let counter: number = 0; 

    while (counter < l1.length || counter < l2.length){
        let n1 = l1[counter] ? l1[counter] : 0;
        let n2 = l2[counter] ? l2[counter] : 0;
        let sum = n1 + n2 + carry;
        carry ? carry = 0 : carry;
        if(sum < 10){
            answer.push(sum);
        }
        else{
            carry = 1;
            answer.push(sum - 10)
        }
        counter += 1;
    }

    return answer;
}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const addTwoNumbersThrowListNode = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) {
        current.next = new ListNode(sum);
    }
    
    return result.next;
}

console.log(addTwoNumbers(l1, l2));