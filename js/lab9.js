function sendMessage(user) {
    const input = document.getElementById(user);
    const messageText = input.value.trim();

    if (messageText === "") return; 

 
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (user === "user1") {
        messageDiv.classList.add("user1");
    } else if (user === "user2") {
        messageDiv.classList.add("user2");
    }

    messageDiv.textContent = messageText;


    const messagesContainer = document.getElementById("messages");
    messagesContainer.appendChild(messageDiv);

    input.value = "";

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
