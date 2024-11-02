document.querySelector("#show-form").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

document.getElementById('guestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const guestName = document.getElementById('name').value;
    const guestEmail = document.getElementById('email').value;
    const guestPhone = document.getElementById('num').value;
    const checkinDate = document.getElementById('datein').value;
    const checkoutDate = document.getElementById('dateout').value;
    const roomType = document.getElementById('roomtype').value;
    const roomNumber = document.getElementById('roomNumber').value;

    const tableBody = document.getElementById('guestTable').querySelector('tbody');
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = guestName;
    const emailCell = document.createElement('td');
    emailCell.textContent = guestEmail;
    const phoneCell = document.createElement('td');
    phoneCell.textContent = guestPhone;
    const InCell = document.createElement('td');
    InCell.textContent = checkinDate;
    const OutCell = document.createElement('td');
    OutCell.textContent = checkoutDate;
    const typeCell = document.createElement('td');
    typeCell.textContent = roomType;    
    const roomCell = document.createElement('td');
    roomCell.textContent = roomNumber;

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.onclick = function() {
        tableBody.removeChild(newRow);
    };

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(phoneCell);
    newRow.appendChild(InCell);
    newRow.appendChild(OutCell);
    newRow.appendChild(typeCell);
    newRow.appendChild(roomCell);
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);
    tableBody.appendChild(newRow);

  
    document.getElementById('guestForm').reset();
});

function filterGuests() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const tableBody = document.getElementById('guestTable').querySelector('tbody');
    const rows = tableBody.getElementsByTagName('tr');


    for (let i = 0; i < rows.length; i++) {
        const nameCell = rows[i].getElementsByTagName('td')[0]; 
        if (nameCell) {
            const nameValue = nameCell.textContent || nameCell.innerText;
            if (nameValue.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = ''; 
            } else {
                rows[i].style.display = 'none'; 
            }
        }
    }
}

function updateRoomStatus() {
    
    const roomCards = document.querySelectorAll('.room__card');

    roomCards.forEach(card => {
        
        const roomNumber = card.id || card.textContent;

        if (bookedRooms.includes(roomNumber)) {
            card.style.border = "2px solid red";
        }
        else{
            card.style.border = "2px solid green";
        }
    });
}

document.addEventListener("DOMContentLoaded", updateRoomStatus);