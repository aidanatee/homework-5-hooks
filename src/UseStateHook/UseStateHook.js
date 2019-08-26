import React, { useState, useReducer } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

const initialState = {email: '', password: ''};

function reducer(state, newState) {
  return {...state, ...newState}
}

export const Form = () => {

  const [userInput, setUserInput] = useReducer(reducer, initialState);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value} = e.target;
    setUserInput({[name]: value});
  }

  const handleSubmit = () => {
    if (userInput.email && userInput.password !== ''){
        setMessage('Вы вошли')
    } 
  };

    return (
      <div>
          <input name='email' value={userInput.email} data-testid='email-input' onChange={handleChange} />
          <input name='password' value={userInput.password} data-testid='password-input' onChange={handleChange}/>
          <button onClick={handleSubmit} type='submit' value='Submit' data-testid='submit'></button>
          {message && <span data-testid='success-message'>{message}</span> }
      </div>
    );
};



// const initialState = {
//   email: '',
//   password: ''
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'handleEmailChange': return { ...state, email: state.email };
//     case 'handlePasswordChange': return { ...state, password: state.password };
//     default: throw new Error('Unexpected action');
//   }
// };

// export const Form = () => {

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [message, setMessage] = useState('');

//   const handleSubmit = (state) => {
//     //event.preventDefault();
//     if (state.email && state.password !== ''){
//         setMessage('Вы вошли')
//     } 
//   };

//       return (
//         <div>
//             <input value={state.email} data-testid='email-input' onChange={() => dispatch({ type: 'handleEmailChange' })} />
//             <input value={state.password} data-testid='password-input' onChange={() => dispatch({ type: 'handlePasswordChange' })}/>
//             <button type='submit' value='Submit' data-testid='submit' onClick={handleSubmit(state)}></button>
            
//             {message && <span data-testid='success-message'>{message}</span> }
//         </div>
//       );
// };

// export const Form = () => {

//   const initialState = {value: ''};

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//     const handleSubmit = () => {
//       //event.preventDefault();
//       if (email && password !== ''){
//           setMessage('Вы вошли')
//       } 
//     };

//     return (
//       <div>
//           <input value={email} data-testid='email-input' onChange={e => setEmail(e.target.value)} />
//           <input value={password} data-testid='password-input' onChange={e => setPassword(e.target.value)} />
//           <button onClick={handleSubmit} type='submit' value='Submit' data-testid='submit'></button>
//           {message && <span data-testid='success-message'>{message}</span> }
//       </div>
//     );
// };
