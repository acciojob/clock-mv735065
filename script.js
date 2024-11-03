//your JS code here. If required.
let time=document.createElement("p");
time.id="timer";

 
time.innerHTML=`${getCurrentTime()}`

document.querySelector("body").append(time);

function getCurrentTime() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0'); // Convert to 12-hour format

    return `${month}/${day}/${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

