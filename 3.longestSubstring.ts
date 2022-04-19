//const str: string = 'abcabcbb';

//const str: string = 'bbbbbbbbcccccbqwertyuasdfghbbbbbb';

//const str: string = 'pwwkew';

//const str: string = 'aab';

//const str: string = '';

const str: string = 'dvdf';

const logestSubstringWiwhoutRepeatingCharacters = (str: string): number => {
    let count: number = 0;
    let longest: number = 1;
    const map: string[] = [];

    if(str){
        while(count <= str.length){
            if(map.includes(str[count]) || str[count] === undefined){
                console.log(map)
                if(longest < map.length){
                    longest = map.length;
                    map.length = 0;
                }
                count++
            }
            else{
                map.push(str[count]);
                count++
            }
        }
    
        return longest;
    }
    else{
        return 0;
    }
}

console.log(logestSubstringWiwhoutRepeatingCharacters(str));