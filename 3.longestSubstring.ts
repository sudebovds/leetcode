//const str: string = 'abcabcbb';

//const str: string = 'bbbbbbbbcccccbqwertyuasdfghbbbbbb';

const str: string = 'pwwkew';

const logestSubstringWiwhoutRepeatingCharacters = (str: string): number => {
    let count = 0;
    const map: string[] = [];

    while(count <= str.length){
        console.log(map.length, map)
        if(map.includes(str[count]) || str[count] === undefined){
            count++
            if(str[count] !== undefined){
                map.length = 0;
            }
        }
        else{
            map.push(str[count]);
            count++
        }
    }

    return map.length;
}

console.log(logestSubstringWiwhoutRepeatingCharacters(str));