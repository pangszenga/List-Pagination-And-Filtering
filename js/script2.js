/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


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
   functionality to the pagination buttons. - doing  TODO: create functionality of buttons and search button
***/

//Global Variables
const originalUl = document.querySelector("ul");

const page = document.querySelector(".page");
const pageHeader = document.querySelector(".page-header");

const studentList = Array.from(document.querySelectorAll(".student-item")); // this is an array


//Number of items per page and index each page

let studentItems = [];

for (let i = 0; i < studentList.length; i++)
{
  studentItems = studentList.slice(i + 9);
  console.log(studentItems);
}; //for loop ends

// i want to iterate through studentList array and spit out the right amount of arrays within arrays to stick on page

// let raw1 = studentList.slice( 0, 10);
// let raw2 = studentList.slice(10, 20);
// let raw3 = studentList.slice(20, 30);
// let raw4 = studentList.slice(30, 40);
// let raw5 = studentList.slice(40, 50);
// let raw6 = studentList.slice(50, 55);

//Number of Pages

let numOfPages = Math.ceil(studentList.length / 10);
let numOfPagesArray = [];
let reminder = studentList.length %10 ; //num of students to display on last page

for (let i = 1; i <= numOfPages; i++)
{
  numOfPagesArray.push(i);

}; //loop for Number of Pages

//Names to search through
let studentNames = [];

for (let i = 0; i < document.querySelectorAll("h3").length; i ++)
{
  studentNames.push(document.querySelectorAll("h3")[i].innerHTML);
};//loop ends

console.log(studentNames);


//Search Bar

let searchBar = document.createElement("div");
searchBar.classList.add("student-search");
searchBar.innerHTML += `<input placeholder="Search for students..." type="text" id="input" value="text">
                        <button>Search</button>`;


//Buttons

let pagination = document.createElement("div");
pagination.classList.add("pagination");
pagination.innerHTML += "<ul>";


for (let i = 0; i < numOfPagesArray.length; i++)
{
  pagination.getElementsByTagName("ul")[0].innerHTML += `<li><a href="#${numOfPagesArray[i]}"> ${numOfPagesArray[i]} </a>`;

}; //loop ends



//Main functions - Search and Pagination (showPage and appendPageLinks functions)

// function showPage() {
//
//   //Create ul element
//   let ul = document.createElement("ul");
//   ul.classList.add("student-list");
//
//
//   //Hide exisitng list
//   page.removeChild(originalUl);
//
//   //Default to show first page
//     for (let i = 0; i <= 9 ; i ++)
//     {
//       if(i <= 9)
//       {
//         ul.innerHTML += `<li class="student-item cf"> ${raw1[i].innerHTML} </li>`
//         page.appendChild(ul);
//
//       };//conditional statement ends
//
//     };//loop ends
//
// } //function ends



function appendPageLinks ()
{
  //Append items
  page.appendChild(pagination);
  pageHeader.appendChild(searchBar);

  // //write search function in here
  // const search = () =>
  // {
  //   let input = document.getElementById("input").value.toLowerCase();
  //
  //   for (let i = 0; i < 9 ; i ++)
  //   {
  //     if (input.includes(studentNames[i]))
  //     {
  //       studentList[i].innerHTML;
  //       console.log('yes');
  //      }
  //      else
  //      {
  //        studentList[i].style.display = "none";
  //       console.log('no');
  //     };//conditional statement ends
  //   };//loop ends
  //
  // };//cons ends
  //
  //
  // searchBar.addEventListener("keyup", search);
  //search no work


  //create other pages


} //function ends

// showPage();
appendPageLinks();
