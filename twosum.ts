const numsArray: number[] = [2, 1, 5, 3];

const twoSumSlow = (nums: number[], target: number): [number, number] => {
    const result: [number, number] = [0, 1];

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = 1; j <= nums.length; j++){
            if(nums[i] + nums[j] === target){
                result[nums[i], nums[j]];
            }
        }
    }

    return result;
}

interface HashMapInterface{
    [key: number]: number;
}

const twoSum = (nums: number[], target: number) => {
    let hashMap: HashMapInterface = {};
    const result: [number, number] = [0, 0];

    nums.forEach((n: number, i: number) => {
        let diff: number = target - n;

        if(diff in hashMap){
            result[0] = hashMap[diff];
            result[1] = i;
        }
        else hashMap[n] = i;
    });

    return result
}

twoSum(numsArray, 7);