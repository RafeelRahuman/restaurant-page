export default function loadContact(){

    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    content.appendChild(heading);

    const address = [
        "Address : 120 SOUTH CAR STREET",
        "Phone : 9876543210"
    ];
    
    address.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        content.appendChild(p);    
    });

}