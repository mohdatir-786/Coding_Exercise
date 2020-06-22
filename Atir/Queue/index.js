class Queue {
    constructor() {
        this.data=[];
    }
    add(record){
    this.data.unshift(record);
    }
    remove(){
        return this.data.pop();
    }
    peak(){
        return this.data[this.data.length-1];
    }
}

function weave(first,second) {
const q = new Queue();
while (first.peak() || second.peak()){
    if(first.peak()){
        q.add(first.remove());
    }
    if (second.peak()){
        q.add(second.remove())
    }

}
    console.log(q)
}
weave()
