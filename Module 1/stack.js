class Stack {
    constructor() {
        this.items = []; //инициализация пустого массива для хранения элементов
    }

    push(element) { //метод для добавления элементов в стек
        this.items.push(element);
    }

    pop() { //метод для удаления и возврата элемента с вершины стека
        if (this.items.length === 0) {//проверка на пустой стек ,если пустой возвращаем undefined так как нечего удалять
            return undefined;
        }
        return this.items.pop();//возвращаем удаенный элемент
    }

    peek() { //метод для просмотра элемента на вершине стека , не удаляя его 
        if (this.items.length === 0) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
}
