exports.helloer = function(name){
  var ret = "Hello";

  if (name) ret += " " + name;

  return ret;
}