// 1792. Maximum Average Pass Ratio
// Solved
// Medium
// Topics
// Companies
// Hint
// There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.

// You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

// The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

// Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

 

// Example 1:

// Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
// Output: 0.78333
// Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
// Example 2:

// Input: classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
// Output: 0.53485
 

// Constraints:

// 1 <= classes.length <= 105
// classes[i].length == 2
// 1 <= passi <= totali <= 105
// 1 <= extraStudents <= 105

// Sol

class MaxHeap {
    public data: [number, number, number][] = [];

    push(item: [number, number, number]): void {
        this.data.push(item);
        this._heapifyUp();
    }

    pop(): [number, number, number] | undefined {
        if (this.data.length === 0) return undefined;
        if (this.data.length === 1) return this.data.pop();
        const max = this.data[0];
        this.data[0] = this.data.pop()!;
        this._heapifyDown();
        return max;
    }

    size(): number {
        return this.data.length;
    }

    private _heapifyUp(): void {
        let index = this.data.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.data[parentIndex][0] >= this.data[index][0]) break;
            [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
            index = parentIndex;
        }
    }

    private _heapifyDown(): void {
        let index = 0;
        const length = this.data.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (left < length && this.data[left][0] > this.data[largest][0]) largest = left;
            if (right < length && this.data[right][0] > this.data[largest][0]) largest = right;
            if (largest === index) break;

            [this.data[index], this.data[largest]] = [this.data[largest], this.data[index]];
            index = largest;
        }
    }
}

function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const heap = new MaxHeap();

    const calcDiff = ([pass, total]: [number, number]): number => {
        const current = pass / total;
        const newRatio = (pass + 1) / (total + 1);
        return newRatio - current;
    };

    for (const [pass, total] of classes) {
        heap.push([calcDiff([pass, total]), pass, total]);
    }

    while (extraStudents-- > 0 && heap.size() > 0) {
        const [_, pass, total] = heap.pop()!;
        heap.push([calcDiff([pass + 1, total + 1]), pass + 1, total + 1]);
    }

    return heap.data.reduce((sum, [_, pass, total]) => sum + pass / total, 0) / classes.length;
}



// SOL - 2

// function maxAverageRatio(classes: number[][], extraStudents: number): number {
    
//     while(extraStudents){
//     let minRatioIdx = Infinity
//     let maxDiff = 0
    
//     classes?.forEach((ar,idx)=>{
//        let ratio = ar[0]/ar[1]
//        let newRatio = (ar[0]+1)/(ar[1]+1)
//        let diff = newRatio-ratio

//        if(diff>=maxDiff){
//         maxDiff=diff
//         minRatioIdx = idx;
//        }
//     })
//     if(extraStudents>0){
//     classes[minRatioIdx] = [(classes[minRatioIdx][0]+1),(classes[minRatioIdx][1]+1)]
//     extraStudents--
//     }

//     }

//     return getAvgRatioOfNestedArray(classes)    
// };


// function getAvgRatioOfNestedArray(classes: number[][]){
//     let ratio = 0
//     classes.forEach((clas)=>{
//         ratio += clas[0]/clas[1]
//     })

//     return ratio/classes.length
// }