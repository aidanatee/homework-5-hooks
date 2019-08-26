import React, {useState} from 'react'

/*
    В этом задании мы потренируемся писать простой кастомный хук.

    Хук будет представлять собой счётчик.

    Он должен возвращать объект со значениями:

    {count, increment, decrement}

    count - текущее значение счётчика
    increment - функция, увеличивает count на 1
    decrement - функция, уменьшает count на 1
*/

export const useCounter = () => {

    const [count, setCount] = useState(0);

    return {
        count,
        // increment: useCallback(() => setCount(count + 1)),
        // decrement: useCallback(() => setCount(count - 1))

        increment: function() {
            return setCount(count + 1)
          },
        decrement: function() {
            return setCount(count - 1)
          },
    }
  };