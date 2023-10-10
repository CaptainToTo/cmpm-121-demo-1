
const fruitOptions = [
    {char: "🍈", color: 0x9BFF69, hits: 20},
    {char: "🍓", color: 0xF9627B, hits: 10},
    {char: "🥝", color: 0xCBEC90, hits: 10},
    {char: "🥭", color: 0xFFA23E, hits: 14},
    {char: "🍋", color: 0xF2FF5C, hits: 12},
    {char: "🍑", color: 0xFFC9AC, hits: 10},
    {char: "🍊", color: 0xFF940B, hits: 12},
    {char: "🍉", color: 0xFF4D4D, hits: 20},
    {char: "🍒", color: 0xF10000, hits: 6},
    {char: "🍏", color: 0xB9FFA0, hits: 8},
    {char: "🍇", color: 0xDC3CE9, hits: 16},
    {char: "🍌", color: 0xF2E28D, hits: 8},
    {char: "🍎", color: 0xFF6565, hits: 8},
]

export class Fruit {
    char: string;
    color: number;
    health: number;
    fullHealth: number;
    constructor() {
        const i: number = Math.floor(Math.random() * fruitOptions.length);
        this.char = fruitOptions[i].char;
        this.color = fruitOptions[i].color;
        this.health = fruitOptions[i].hits;
        this.fullHealth = this.health;
    }

    getOriginalHealth(): number { return this.fullHealth;}

    hit() { this.health--; }

    isCrushed(): boolean { return this.health <= 0; }

    getChar(): string { return this.char; }

    getColor(): number { return this.color; }

    getColorStyle(): string { return "#" + this.color.toString(16); }

}