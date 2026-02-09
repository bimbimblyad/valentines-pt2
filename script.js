const messages = [
    "Sure ka na love?",
    "Really sure??",
    "This is a one chance only",
    "BB PLEASE!!!",
    "Pagisipan mo love :<",
    "Wala na, Sad na ako :<",
    "haha ok...,,",
    "tamponako",
    "ge garod",
    "PLEASE SAY YES!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-btn');
    const yesButton = document.querySelector('.yes-btn');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}