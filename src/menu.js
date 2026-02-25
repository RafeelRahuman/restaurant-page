export default function loadMenu(){

    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    content.appendChild(heading);



    const items = [
        "🍕 Pizza - ₹300",
        "🍔 Burger - ₹200",
        "🍛 Curry Rice - ₹1000"
    ]

    const list = document.createElement("ul");

    items.forEach(itemText => {
        const item = document.createElement("li");
        item.textContent = itemText;
        list.appendChild(item);      
    });

    content.appendChild(list);

}