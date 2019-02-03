/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


/******************************************

GLOBAL VARIABLES

******************************************/
const originalUl = document.querySelector("ul");
const studentList = Array.from(document.querySelectorAll(".student-item"));
const page = document.querySelector(".page");
const pageHeader = document.querySelector(".page-header");

//Number of Pages

let numOfPages = Math.ceil(studentList.length / 10);
let numOfPagesArray = [];
let reminder = studentList.length %10 ; //num of students to display on last page

for (let i = 1; i <= numOfPages; i++)
  {
    numOfPagesArray.push(i);

  }; //loop for Number of Pages

//Ul Component
let ul = document.createElement("ul");
ul.classList.add("student-list");

//Pages content
let studentItems = [];
let studentNames = [];

for (let i = 0; i < studentList.length; i += 10)
  {
    studentItems.push(studentList.slice(i, i+10));

  }; //for loop ends



for (let i = 0; i < studentList.length; i ++)
  {
    studentNames.push(document.getElementsByTagName("h3")[i].innerHTML);
  }; //for loop ends


//Default display 1st 10 studentItems
for(let i = 0; i < studentItems[0].length; i ++)
{
  ul.innerHTML += `<li class="student-item cf"> ${studentItems[0][i].innerHTML} </li>`;
  page.appendChild(ul);
}; //for loop ends


//Create items to append
//Search Bar

let searchBar = document.createElement("div");
searchBar.classList.add("student-search");
searchBar.innerHTML += `<input placeholder="Search for students..." type="text" id="input">
                        <button>Search</button>`;

//Buttons

let pagination = document.createElement("div");
pagination.classList.add("pagination");
pagination.innerHTML += `<ul id= "buttons">`;

for (let i = 0; i < numOfPagesArray.length; i++)
{
  pagination.getElementsByTagName("ul")[0].innerHTML += `<li ><a href="#${numOfPagesArray[i]}"> ${numOfPagesArray[i]} </a>`;

}; //loop ends




/******************************************

FUNCTIONS

******************************************/


function appendPageLinks()
  {
    //Append items
    page.appendChild(pagination);
    pageHeader.appendChild(searchBar);

  };//function ends


function showPage()
  {
    //Hide existing list
    originalUl.style.display = "none"

    //Append Buttons and SearchBar
    appendPageLinks();

    //Functionality
    //Pagination
    let buttonUl = document.getElementById('buttons');

    for (let i = 0; i < buttonUl.children.length; i++)
    {
        buttonUl.children[i].onclick = function()
        {
          console.log(i);
          while (ul.firstChild)
          {
            ul.removeChild(ul.firstChild);
          }
          let selected = studentItems[i];

          console.log(ul);
          for (let j = 0; j < selected.length; j++)
          {
            console.log(selected[j]);
            ul.innerHTML += `<li class="student-item cf"> ${selected[j].innerHTML} </li>`;
            page.insertBefore(ul, pagination);
          }; //for loop ends

          }; //event listener ends

    };//for loop ends

  };//function ends

showPage();
