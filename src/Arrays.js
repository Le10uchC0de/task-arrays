/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
export function arraySorting(data) {
    let arr = [];
    let arr1 = '';
    let arr2 = '';
    let temp = '';
    let r = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === ',') {
            arr.push(+temp);
            temp = '';
            r = i;
            continue;
        }
        temp += data[i];
    }
    temp = '';

    for (let i = r + 1; i < data.length; i++) {
        temp += data[i];
    }
    arr.push(+temp);
    arr.sort(compareNumeric);
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i] + ',';
        arr1 += temp;
        temp = '';
    }
    for (let i = 0; i < arr1.length - 1; i++) {
        arr2 += arr1[i];
    }
    return arr2;
}
/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = data.filter(function (n) {
        return n < 100;
    });
    return result;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array3 = [];
    for (let i = 0; i < 5; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    return array3;
}
