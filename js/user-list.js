
let arr1 = new Array;
arr1 = JSON.parse(localStorage.getItem("userList"));
//checking if nakuha yung array of objects
for (index = 0; index < arr1.length; index++) {
    console.log("arr1[" + index + "]:" + arr1[index].fullName);
    console.log("arr1[" + index + "]:" + arr1[index].email);
}
