import React, { useState, createContext} from 'react';

export const TestContext = createContext({
    userName: '',
    userAge: '',
    setUserName: () => {},
    setUserAge: () => {}
});


 const TestContextProvider = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const nameChangeHandler = nameToChange => {  
        // console.log(name);
        setName(nameToChange);
    }

    const ageChageHandler = ageToChange => {
        // console.log(age);
        setAge(ageToChange);
    }

    return (
        <TestContext.Provider 
            value={{
                    userName: name, 
                    userAge: age, 
                    setUserName: nameChangeHandler.bind(), 
                    setUserAge: ageChageHandler.bind()
                } }>
            {props.children}
        </TestContext.Provider>
    );
}

export default TestContextProvider;