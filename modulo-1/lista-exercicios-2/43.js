let object1 = {
    name: "Sherlock Holmes",
    age: 43,
    hobbies: "Play violin"
};
let object2 = {
    name: "John Watson",
    age: 47,
    job: "Doctor"
};

function mergeObjects(obj1, obj2) {
    let newObj = {};
    for (property in obj1) {
        newObj[property] = obj1[property];
    }
    for (property in obj2) {
        newObj[property] = obj2[property];
    }
    return newObj;
}

console.table(mergeObjects(object1, object2));