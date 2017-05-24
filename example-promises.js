function getTempPromise(location) {
    return new Promise(function (resolve,reject){
      resolve(76);
      reject("City Not Found");
    });
}

getTempPromise('Delhi').then(function (temp){
  console.log('Promise success ',temp);
},function(err){
  console.log('Promise error ',err);
})


function addPromise(a,b){
  return new Promise(function (resolve,reject){
    if(typeof a === 'number'&& typeof b === 'number'){
      resolve(a+b);
    }
    else{
      reject("Not a Number");
    }
  });
}

addPromise(7,'y').then(function (sum){
  console.log('Promise Success',sum);
},function (err){
  console.log('Promise Error',err)
});
