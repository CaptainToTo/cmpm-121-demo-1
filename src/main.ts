import "./style.css";
import { Fruit } from "./fruit.ts";
import { Juice } from "./juice.ts";
import { Canvas } from "./canvas.ts";

const originalFontSize: number = 10;
const smallestFontSize: number = 4;
let curFontSize: number = originalFontSize;

const maxJuiceHeight: number = 500;

const pricePerUnit: number = 5;

function getNewFruit(): Fruit {
  return new Fruit();
}

function getNewJuice(): Juice {
  return new Juice(30);
}

let fr: Fruit = getNewFruit();
let jc: Juice = getNewJuice();
let money: number = 0;

const canvas = new Canvas(1000, 800);
canvas.buildMoney(600, 100);
canvas.buildButton(100, 100, updateJuicing);
canvas.setButtonContent("🍓");
canvas.setButtonSize(10);
canvas.buildCup(100, 350, 300, maxJuiceHeight);
canvas.setCupHeight(0);


function updateFruit(): any {
  fr.hit();
  curFontSize -= (originalFontSize - smallestFontSize) / fr.getOriginalHealth();
  
  if (fr.isCrushed()) {
    fr = getNewFruit();
    canvas.setButtonContent(fr.getChar());
    curFontSize = originalFontSize;
  }
  canvas.setButtonSize(curFontSize);
}

function updateJuice(): any {
  jc.addJuice(fr.getColor());
  
  if (jc.isFull()) {
    money += jc.getPrice(pricePerUnit);
    canvas.setMoney("$" + money);
    jc = getNewJuice();
  }

  canvas.setCupColor(jc.getColorStyle());
  canvas.setCupHeight(jc.getFillAmount());
}

function updateJuicing(): any {
  updateJuice();
  updateFruit();  
}


const gameName = "Juice Juice";

document.title = gameName;
