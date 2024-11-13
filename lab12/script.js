document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const contactsContainer = document.getElementById("contacts-container");
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    let editIndex = -1;

  
    displayContacts();

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        const newContact = { name, phone, email, address };

        if (editIndex === -1) {
         
            contacts.push(newContact);
        } else {
            
            contacts[editIndex] = newContact;
            editIndex = -1;
            form.querySelector("button").textContent = "Guardar Contacto";
        }

        saveContacts();
        displayContacts();
        form.reset();
    });

    function saveContacts() {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    function displayContacts() {
        contactsContainer.innerHTML = "";
        contacts.forEach((contact, index) => {
            const contactCard = document.createElement("div");
            contactCard.classList.add("contact-card");

            contactCard.innerHTML = `
                <p><strong>Nombre:</strong> ${contact.name}</p>
                <p><strong>Teléfono:</strong> ${contact.phone}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
                <p><strong>Dirección:</strong> ${contact.address}</p>
                <div class="contact-actions">
                    <button onclick="editContact(${index})">Editar</button>
                    <button onclick="deleteContact(${index})">Eliminar</button>
                </div>
            `;

            contactsContainer.appendChild(contactCard);
        });
    }

    window.editContact = function (index) {
        const contact = contacts[index];
        document.getElementById("name").value = contact.name;
        document.getElementById("phone").value = contact.phone;
        document.getElementById("email").value = contact.email;
        document.getElementById("address").value = contact.address;

        editIndex = index;
        form.querySelector("button").textContent = "Actualizar Contacto";
    };

    window.deleteContact = function (index) {
        contacts.splice(index, 1);
        saveContacts();
        displayContacts();
    };
});
