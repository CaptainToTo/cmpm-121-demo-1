import "./style.css";
import { Fruit } from "./fruit.ts";
import { Juice } from "./juice.ts";
import { Canvas } from "./canvas.ts";
import { Upgrade } from "./upgrade.ts";

const originalFontSize: number = 10;
const smallestFontSize: number = 4;
let curFontSize: number = originalFontSize;

const maxJuiceHeight: number = 500;

let pricePerUnit: number = 5;

let autoClickSpeed: number = -1;
let autoClicker: number;

function getNewFruit(): Fruit {
  return new Fruit();
}

function getNewJuice(): Juice {
  return new Juice(30);
}

let fr: Fruit = getNewFruit();
let jc: Juice = getNewJuice();
let money: number = 0;
const autoClick: Upgrade = new Upgrade("Blender", 5, 500, () => {
  if (autoClickSpeed == -1) {
    autoClickSpeed = 500;
  } else {
    autoClickSpeed -= 100;
  }
  clearInterval(autoClicker);
  autoClicker = setInterval(updateJuicing, autoClickSpeed);
});
const priceIncrease: Upgrade = new Upgrade("Bigger Cups", 5, 800, () => {
  pricePerUnit += 5;
});

const canvas = new Canvas(1000, 800);
canvas.buildMoney(600, 100);

canvas.buildButton(100, 100, updateJuicing);
canvas.setButtonContent("🍓");
canvas.setButtonSize(10);

canvas.buildCup(100, 350, 300, maxJuiceHeight);
canvas.setCupHeight(0);

canvas.buildAutoClickButton(600, 250, () => {
  if (money >= autoClick.getPrice() && !autoClick.isAtMax()) {
    money -= autoClick.getPrice();
    canvas.setMoney("$" + money);
    autoClick.buy();
    autoClick.doAction();
    autoClick.increasePrice(100);
    let content: string = "";
    if (autoClick.isAtMax()) {
      content = `${autoClick.name} Max Lvl!`;
    } else {
      content = `${autoClick.name} Lvl ${autoClick.level}: $${autoClick.price}`;
    }
    canvas.setAutoClickContent(content);
  }
});
canvas.setAutoClickContent(
  `${autoClick.name} Lvl ${autoClick.level}: $${autoClick.price}`,
);

canvas.buildPriceIncreaseButton(600, 500, () => {
  if (money >= priceIncrease.getPrice() && !priceIncrease.isAtMax()) {
    money -= priceIncrease.getPrice();
    priceIncrease.buy();
    canvas.setMoney("$" + money);
    priceIncrease.doAction();
    priceIncrease.increasePrice(100);
    let content: string = "";
    if (priceIncrease.isAtMax()) {
      content = `${priceIncrease.name} Max Lvl!`;
    } else {
      content = `${priceIncrease.name} Lvl ${priceIncrease.level}: $${priceIncrease.price}`;
    }
    canvas.setPriceIncreaseContent(content);
  }
});
canvas.setPriceIncreaseContent(
  `${priceIncrease.name} Lvl ${priceIncrease.level}: $${priceIncrease.price}`,
);

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
