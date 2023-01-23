//const str: string = 'abcabcbb';

//const str: string = 'bbbbbbbbcccccbqwertyuasdfghbbbbbb';

//const str: string = 'pwwkew';

//const str: string = 'aab';

//const str: string = '';

const str: string = 'dvdf';

//Sliding window method

const longestSubstrSet = (str: string): number => {
    if(str.length === 0) return 0;
    if(str.length === 1) return 1;

    let maxLength = 0;
    const strMap: Record<string, number> = {};
    const strLength = str.length;

    let i = 0, j = 0;

    while(j < strLength){
        let char = str[j];

        if(strMap.hasOwnProperty(char)){
            i = Math.max(strMap[char], i)
        }

        maxLength = Math.max(maxLength, j - i + 1);
        strMap[char] = j + 1;

        j++
    }

    return maxLength;
}

console.log(longestSubstrSet(str));