
function createCourseArray() {
    var courseList = [];
    var courseName = document.getElementsByClassName("coursename");
    var courseYear = document.getElementsByClassName("starttime");
    var courseName0 = courseName[0].innerHTML
    var courseName1 = courseName[1].innerHTML
    var courseName2 = courseName[2].innerHTML

    var courseYear0 = courseYear[0].innerHTML
    var courseYear1 = courseYear[1].innerHTML
    var courseYear2 = courseYear[2].innerHTML

    courseList.push(
        {
            name: courseName0,
            year: courseYear0,
          },
          {
            name: courseName1,
            year: courseYear1,
          },
          {
            name: courseName2,
            year: courseYear2,
          },
        )

    return courseList;
}

function findCourse(courseList) {

    var Userinput = prompt("Input a 4-digit number: ");

    while (Userinput.length !== 4) {
        
        var Userinput = prompt("Input a valid 4-digit number: ");
    }

    let courseList0 = courseList[0].name.substring(5,9);
    let courseList1 = courseList[1].name.substring(5,9);
    let courseList2 = courseList[2].name.substring(5,9);

    if (Userinput == courseList0) {
        document.querySelector(".course1").style.backgroundColor = "green";
    }

    else if (Userinput == courseList1) {
        document.querySelector(".course2").style.backgroundColor = "green";
    }

    else if (Userinput == courseList2) {
        document.querySelector(".course3").style.backgroundColor = "green";
    }

    else {

        var horiline = document.createElement("hr");
        var divNew = document.createElement("section");
        
        divNew.classList.add("coursename");
        divNew.append(Userinput);

        var divnew2 = document.createElement("section");
        divnew2.classList.add("coursedesc");
        divnew2.append("N/a");

        var divnew3 = document.createElement("section");
        divnew3.classList.add("starttime");
        divnew3.append("Fall 2020");
        
        var divnew4 = document.createElement("section");
        divnew4.classList.add("coursearea")
        divnew4.append(divNew);
        divnew4.append(divnew2);
        divnew4.append(divnew3);

        var Newcow = document.getElementById("header");
        Newcow.append(horiline);
        Newcow.append(divnew4);
    }
}


var createcourseList = createCourseArray();
findCourse(createcourseList);
