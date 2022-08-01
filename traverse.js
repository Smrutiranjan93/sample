var arr=[[1,2,3],[4,5,6]];
var sum=0;
for(var i=0;i<arr.length;i++)
{
    var row=0
    for(var j=0;j<arr[i].length;j++)
    {
        row=row+arr[i][j];
    }
    if(row>sum)
    sum=row;
}
console.log(sum);
