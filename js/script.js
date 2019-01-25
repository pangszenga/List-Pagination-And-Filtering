/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate. ---done

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/


/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

//Global Variables

const pageHeader = document.querySelector(".page-header");
const page = document.querySelector(".page");
const studentList = Array.from(document.querySelectorAll(".student-item")); // this is an array
const studentListNames = document.querySelectorAll(".student-details h3"); // name array to search through


//Determine the number of blocks of students to display + reminder = disregard limitation of different number of students

let numOfPages = Math.ceil(studentList.length / 10);
let reminder = studentList.length %10 ; //num of students to dsiplay on last page

console.log(numOfPages);
console.log(reminder);
//2 Main functions - Search and Pagination (showPage and appendPageLinks functions)

function showPage() {
  //increment the number of items per page and index each page

    let raw1 = studentList.slice( 0, 10);
    let raw2 = studentList.slice(10, 20);
    let raw3 = studentList.slice(20, 30);
    let raw4 = studentList.slice(30, 40);
    let raw5 = studentList.slice(40, 50);
    let raw6 = studentList.slice(50, 55);

    let test= raw1[0]
    console.log(raw1[0]);
    document.querySelector(".page-header").appendChild(test);

  //append items to div and link with button THEN link with button click
    // for (let i = 0; i <= 9 ; i ++)
    // {
    //   let append = document.createElement("ul");
    //   append.classList.add("student-list");
    //   append.innerHTML = raw1[i];
    //   document.querySelector(".page-header").appendChild(append);
    //
    // };


    //how to iterate through array 

    //push below into student-list div ul element
    // let appendPage1 = raw1;
    // let appendPage2 = raw1;
    // let appendPage3 = raw1;
    // let appendPage4 = raw1;
    // let appendPage5 = raw1;
    // let appendPage6 = raw1;

    console.log(raw1);

    document.querySelector(".student-list").style.display ="none";
    // document.querySelector(".page-header").appendChild(`<ul> ${raw1} </ul>`);
    //need to loop through array and grab each indivdiual element to display
} // function ends
