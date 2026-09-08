const arr = [4,1,10,5,3,8];

function bubbleSort(arr) {
    // Копируем массив, чтобы случайно не сломать исходные данные
    const result = [...arr];
    const len = result.length;

    for (let i = 0; i < len; i++) {
        // Минус i нужен, чтобы не трогать уже отсортированный хвост массива
        for (let j = 0; j < len - 1 - i; j++) {
            // Если левый элемент больше правого, меняем их местами
            if (result[j] > result[j + 1]) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

console.log(bubbleSort(arr))