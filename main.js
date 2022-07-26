let arr = [1,2,3];
let newArr = [];
genSubset(arr,newArr)
function genSubset(arr,newArr,index=0){
   if(newArr.length!==0){
    console.log(newArr);
   }
   if(newArr.length===arr.length){
    return;
   }
   for(let i=index;i<arr.length;i++){
    newArr.push(arr[i]);
    genSubset(arr,newArr,i+1);
    newArr.pop();
   }
}