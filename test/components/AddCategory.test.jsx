import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('prueba en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

    });
}
);