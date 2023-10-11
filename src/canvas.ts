export class Canvas {
  width: number;
  height: number;

  canvasElem: HTMLDivElement;
  button: HTMLElement;
  money: HTMLElement;
  cup: HTMLDivElement;
  maxCupHeight: number;
  cupTopMargin: number;

  cupBackground: HTMLDivElement;

  autoClickUpgrade: HTMLElement;
  priceIncreaseUpgrade: HTMLElement;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.canvasElem = document.querySelector("#app")!;
    this.canvasElem.style.width = width + "px";
    this.canvasElem.style.height = height + "px";

    this.button = document.createElement("button");
    this.button.className = "button";

    this.money = document.createElement("h2");
    this.money.className = "money";

    this.cup = document.createElement("div");
    this.cup.className = "cup";

    this.cupBackground = document.createElement("div");
    this.cupBackground.className = "cupBackground";

    this.autoClickUpgrade = document.createElement("button");
    this.autoClickUpgrade.className = "autoClickUpgrade";

    this.priceIncreaseUpgrade = document.createElement("button");
    this.priceIncreaseUpgrade.className = "priceIncreaseUpgrade";

    this.maxCupHeight = 0;
    this.cupTopMargin = 0;
  }

  buildCanvas(width: number, height: number): Canvas {
    return new Canvas(width, height);
  }

  buildButton(x: number, y: number, pressFunction: () => any): Canvas {
    this.button.addEventListener("click", pressFunction);

    this.button.style.top = y + "px";
    this.button.style.left = x + "px";

    this.canvasElem.append(this.button);

    return this;
  }

  setButtonContent(str: string): Canvas {
    this.button.innerHTML = str;
    return this;
  }

  setButtonSize(fontSize: number): Canvas {
    this.button.style.fontSize = fontSize + "em";
    return this;
  }

  buildMoney(x: number, y: number): Canvas {
    this.money.style.top = y + "px";
    this.money.style.left = x + "px";
    this.setMoney("$" + 0);
    this.canvasElem.append(this.money);
    return this;
  }

  setMoney(value: string): Canvas {
    this.money.innerHTML = value;
    return this;
  }

  buildCup(x: number, y: number, width: number, height: number): Canvas {
    this.cup.style.top = y + "px";
    this.cup.style.left = x + "px";
    this.cup.style.width = width + "px";
    this.cup.style.height = "0px";

    this.maxCupHeight = height;
    this.cupTopMargin = y;

    this.canvasElem.append(this.cup);

    this.cupBackground.style.top = y + "px";
    this.cupBackground.style.left = x + "px";
    this.cupBackground.style.width = width + "px";
    this.cupBackground.style.height = height + "px";

    this.canvasElem.append(this.cupBackground);

    return this;
  }

  setCupHeight(number: number): Canvas {
    this.cup.style.top =
      this.maxCupHeight - number * this.maxCupHeight + this.cupTopMargin + "px";
    this.cup.style.height = number * this.maxCupHeight + "px";
    return this;
  }

  setCupColor(color: string): Canvas {
    this.cup.style.backgroundColor = color;
    return this;
  }

  buildAutoClickButton(x: number, y: number, pressFunction: () => any): Canvas {
    this.autoClickUpgrade.style.top = y + "px";
    this.autoClickUpgrade.style.left = x + "px";
    this.autoClickUpgrade.style.fontSize = "3em";
    this.autoClickUpgrade.addEventListener("click", pressFunction);

    this.canvasElem.append(this.autoClickUpgrade);

    return this;
  }

  setAutoClickContent(value: string): Canvas {
    this.autoClickUpgrade.innerHTML = value;
    return this;
  }

  buildPriceIncreaseButton(
    x: number,
    y: number,
    pressFunction: () => any,
  ): Canvas {
    this.priceIncreaseUpgrade.style.top = y + "px";
    this.priceIncreaseUpgrade.style.left = x + "px";
    this.priceIncreaseUpgrade.style.fontSize = "3em";
    this.priceIncreaseUpgrade.addEventListener("click", pressFunction);

    this.canvasElem.append(this.priceIncreaseUpgrade);

    return this;
  }

  setPriceIncreaseContent(value: string): Canvas {
    this.priceIncreaseUpgrade.innerHTML = value;
    return this;
  }
}
