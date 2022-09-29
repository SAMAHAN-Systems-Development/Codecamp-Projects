
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
    {firstName : "Raife", lastName: "Hinton", role: "UI/UX Developer" }, 
    {firstName : "Rhodri", lastName: "Finley", role: "Frontend Developer" }, 
    {firstName : "Bryn", lastName: "Hays", role: "Backend Developer" },
    {firstName : "Shakira", lastName: "Russell", role: "Full-stack Developer"}
];

let currentFirstName = "";
let currentLastName = "";

const createCardElementUnderTheSpecifiedElement = (element, member) => {
    element.innerHTML += `
        <div class="content__cards-row-card">
            <div class="content__cards-row-card-group">
                <img class="content__cards-row-card-group-image" src="./public/images/man.jpg" alt="Member">
            </div>
            <div class="content__cards-row-card-group">
                <div class="content__cards-row-card-group-title">
                    ${member.firstName} ${member.lastName}
                </div>
                <div class="content__cards-row-card-group-description">
                    ${member.role}
                </div>
                <div class="content__cards-row-card-group-buttons">
                    <button onclick="editButtonOnClick(this)" class="content__cards-row-card-group-buttons-button content__cards-row-card-group-buttons-button--edit" data-toggle="modal" data-target="#editMemberModal" data-member-firstName="${member.firstName}" data-member-lastName="${member.lastName}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="deleteButtonOnClick(this)" class="content__cards-row-card-group-buttons-button content__cards-row-card-group-buttons-button--delete" data-toggle="modal" data-target="#deleteMemberModal" data-member-firstName="${member.firstName}" data-member-lastName="${member.lastName}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

const createMemberCardsBasedOnMembersArray = () => {
    const contentCardsElement = document.getElementById("content__cards");
    contentCardsElement.innerHTML = "";

    members.forEach((member)=>{
        createCardElementUnderTheSpecifiedElement(contentCardsElement, member);
    })
}

const handlePageOnLoad = () => {
    const contentCardsElement = document.getElementById("content__cards");
    members.forEach((member)=>{
        createCardElementUnderTheSpecifiedElement(contentCardsElement, member);
    })

}

const handleOnClickAddButton = () => {
    const firstName = document.getElementById("first-name-add").value;
    const lastName = document.getElementById("last-name-add").value;
    const role = document.getElementById("role-add").value;

    members.push({
        firstName: firstName,
        lastName: lastName,
        role: role
    })

    createMemberCardsBasedOnMembersArray();
}

const handleOnClickEditButton = () => {
    const firstName = document.getElementById("first-name-edit").value;
    const lastName = document.getElementById("last-name-edit").value;
    const role = document.getElementById("role-edit").value;

    members = members.map((member) => {
        if (member.firstName === currentFirstName && member.lastName === currentLastName){
            member.firstName = firstName;
            member.lastName = lastName;
            member.role = role;
        }

        return member;
    });

    createMemberCardsBasedOnMembersArray();
}

const handleOnClickDeleteButton = () => {

    members = members.filter((member) => member.firstName !== currentFirstName && member.lastName !== currentLastName);

    createMemberCardsBasedOnMembersArray();
}

const editButtonOnClick = (buttonElement) => {
    currentFirstName = buttonElement.getAttribute("data-member-firstName");
    currentLastName = buttonElement.getAttribute("data-member-lastName");
}

const deleteButtonOnClick = (buttonElement) => {
    currentFirstName = buttonElement.getAttribute("data-member-firstName");
    currentLastName = buttonElement.getAttribute("data-member-lastName");
}