import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); 
        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
             type=""
             placeholder="Buscar gifs"
             value={inputValue}
             onChange={onInputChange}
             autoComplete="off"
            />
        </form>
    )
}