import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// im adding a small comment
const gameName = "Juice Juice";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
