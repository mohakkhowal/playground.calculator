module.exports.function = function calculate (num1,num2,operation) {
  var ans;
  if(String(operation)=="ADD"){
    ans = num1+num2;
  }
  if(String(operation)=="MULTIPLY"){
    ans = num1*num2;
  }
  if(String(operation)=="DIVIDE"){
    if(num2==0){
      if(num1>=0)ans="INFINITY";
      else ans = "-INFINITY"
    }
    else ans = num1/num2;
  }
  if(String(operation)=="MOD"){
    ans = num1%num2;
  }
  if(String(operation)=="SUBTRACT"){
    ans = num1-num2;
  }
  return ans;
} 
