
/*
Read - View the members
-> Create a function that runs everytime the page load
-> Create an array which all the data would be held
-> Load the array with member objects
-> Generate the member card using the data from the array

Create - Add Members
-> Create a onclick function
-> Get the firstName, lastName, role everytime the on click event is triggered
-> Add the acquired firstName, lastName, and role to the array
-> Display the added member

Update - Edit the info of a member
-> Create a onclick function for update
-> Get the first name and last name of the member the user would like to edit
-> Find the current member in the members array
-> Change the values of the members array based on the first name, last name, and roles inputted by the user
-> Display the edited member

Delete - Delete a member
-> Create a onclick function for delete
-> Get the first name and last name of the member the user would like to edit
-> Find the current member in the members array
-> Delete the current member on the members array
-> Display the members array without the deleted one
*/

let members = [
    {firstName : "Raife", lastName: "Hinton", position: "UI/UX" }, 
    {firstName : "Rhodri", lastName: "Finley", position: "Frontend" }, 
    {firstName : "Bryn", lastName: "Hays", position: "Backend" },
    {firstName : "Shakira", lastName: "Russell", position: "Full-stack"}
];

let currentFirstName = "";
let currentLastName = "";

const createCardElementUnderTheSpecifiedElement = (element, member) => {
    element.innerHTML += `
        <div class="member-card">
            <img src="./public/images/man.jpg" alt="" class="member-card__image">
            <div class="member-card__text">
                <div class="member-card__name">
                    ${member.firstName} ${member.lastName}
                </div>
                <div class="member-card__description">
                    ${member.position}
                </div>
            </div>
            <div class="member-card__buttons-container">
                <button onclick="handleEditIconOnClick(this)" class="small-button small-button--edit" data-toggle="modal" data-target="#editMemberModal" data-member-firstName="${member.firstName}" data-member-lastName="${member.lastName}"">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="handleDeleteIconOnClick(this)" class="small-button small-button--delete" data-toggle="modal" data-target="#deleteMemberModal" data-member-firstName="${member.firstName}" data-member-lastName="${member.lastName}"">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

const createMemberCardsBasedOnMembersArray = () => {
    const contentCardsElement = document.getElementById("content__cards-container");
    contentCardsElement.innerHTML = "";

    members.forEach((member)=>{
        createCardElementUnderTheSpecifiedElement(contentCardsElement, member);
    })
}

const handlePageOnLoad = () => {
    const contentCardsElement = document.getElementById("content__cards-container");
    members.forEach((member)=>{
        createCardElementUnderTheSpecifiedElement(contentCardsElement, member);
    })

}

const handleAddMemberButtonOnClick = () => {
    const firstName = document.getElementById("first-name-add").value;
    const lastName = document.getElementById("last-name-add").value;
    const position = document.getElementById("position-add").value;

    members.push({
        firstName: firstName,
        lastName: lastName,
        position: position
    })

    createMemberCardsBasedOnMembersArray();
}

const handleEditMemberButtonOnClick = () => {
    const firstName = document.getElementById("first-name-edit").value;
    const lastName = document.getElementById("last-name-edit").value;
    const position = document.getElementById("position-edit").value;

    members = members.map((member) => {
        if (member.firstName === currentFirstName && member.lastName === currentLastName){
            member.firstName = firstName;
            member.lastName = lastName;
            member.position = position;
        }

        return member;
    });

    createMemberCardsBasedOnMembersArray();
}

const handleDeleteMemberButtonOnClick = () => {

    members = members.filter((member) => member.firstName !== currentFirstName && member.lastName !== currentLastName);

    createMemberCardsBasedOnMembersArray();
}

const handleEditIconOnClick = (buttonElement) => {
    currentFirstName = buttonElement.getAttribute("data-member-firstName");
    currentLastName = buttonElement.getAttribute("data-member-lastName");
}

const handleDeleteIconOnClick = (buttonElement) => {
    currentFirstName = buttonElement.getAttribute("data-member-firstName");
    currentLastName = buttonElement.getAttribute("data-member-lastName");
}