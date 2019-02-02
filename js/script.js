/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/******************************************
ToDo:
showPage()
appendPageLinks()

Page needs to be Paginated - display 10 items every time
Page needs to append buttons depending on how many items there are
Page needs to have search bar to search through List

Create list of student-items - done

Slice every 10 - done
Give every 10 items an index
Append to page

******************************************/

/******************************************

GLOBAL VARIABLES

******************************************/
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


console.log(studentItems);
console.log(studentNames);


/******************************************

FUNCTIONS

******************************************/


function appendPageLinks()
  {
    //Create items to append
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

    //Append items
    page.appendChild(pagination);
    pageHeader.appendChild(searchBar);

  }//function ends

function showPage()
  {
    appendPageLinks();

    //Default display first 10 items

    //Event Listener for SearchBar

    //Event Listener for Buttons

  }


showPage();

// what should showPage do? contain search and page click links functionality
//what should appendPageLinks do? append appropriate page when link is click and hide when not clicked
