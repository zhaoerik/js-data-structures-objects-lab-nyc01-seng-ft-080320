// Write your solution in this file!
const driver = {
    'Cash rules everything around me.': 'Wu',
    'C.R.E.A.M.': 'Tang',
    'Get the money.': 'For',
    "$ $ bill, y'all!": 'Ever'
  };

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});

}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key) {
    let obj = Object.assign({}, obj);
    delete(obj[key]);
    return obj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete(obj[key]);
}