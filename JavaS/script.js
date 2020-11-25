
let courseList = [
    {code: 'ACIT 1620', name: 'Web Fundamental Technologies',  num: '1620'},
    {code: 'ACIT 1420', name: 'Intro to Systems Admin',  num: '1420'},
    {code: 'ACIT 1630', name: 'Database Systems',  num: '1630'}
]

var userNum = prompt('Please enter a 4-digit number');

while (userNum.length !== 4){
    if (userNum.length == 4){
        userNum = prompt('Please enter a valid 4-digit number');
    }
}

for (var i = 0; i < courseList.length; i++){
    coursenumber = courseList[i].num;
    if (userNum == coursenumber){
        console.log(`Yes I am taking the course: ${courseList[i].code}-${courseList[i].name}`);
        break;
    }
    else {
        courseList.push(
            {
                code: userNum, name: null, num: userNum
            }
        )
        console.log(courseList);
        console.log('Course has been successfully added.');
        break;
    }
}
