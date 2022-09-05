const employee = { 
    Dan: "1190 Columbus"
};
console.log(employee);

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    delete[key]
    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    const newObj = obj
    delete newObj[key]
    return newObj
}