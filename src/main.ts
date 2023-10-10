import "./style.css";
import { Fruit } from "./fruit.ts";
import { Juice } from "./juice.ts";

const originalFontSize: number = 10;
const smallestFontSize: number = 2;
let curFontSize: number = originalFontSize;

function updateJuicing() {
    fr.hit();
    curFontSize -= (originalFontSize - smallestFontSize) / fr.getOriginalHealth();
    jc.addJuice(fr.getColor());
    if (fr.isCrushed()) {
        fr = getNewFruit();
        button.innerHTML = fr.getChar();
        button.style.backgroundColor = fr.getColorStyle();
        curFontSize = originalFontSize;
    }
    button.style.fontSize = curFontSize + "em";
    app.style.backgroundColor = jc.getColorStyle();
}

function getNewFruit(): Fruit {
    return new Fruit();
}

function getNewJuice(): Juice {
    return new Juice(30);
}

let fr: Fruit = getNewFruit();
const jc: Juice = getNewJuice();

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Juice Juice";

document.title = gameName;

const button = document.createElement("button");
button.style.fontSize = curFontSize + "em";
button.innerHTML = fr.getChar();
button.style.backgroundColor = fr.getColorStyle();
button.addEventListener("click", updateJuicing);
app.append(button);
