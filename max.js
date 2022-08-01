let array=[2,3,5,8,9,4];
let stack=[];
let min=-1;
for(let i=0;i<=array.length;i++)
{
    if(array[i]<min)
    {
        min=array[i];
        stack.push(min);
    }
}
console.log(stack);