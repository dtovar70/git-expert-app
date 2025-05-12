import { GifGrid } from "../../src/components/GifGrid";
import { render, screen } from '@testing-library/react';

describe(' pruebas en GifGrid', () => {
 
    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => {
        
        render(<GifGrid category={ category } />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        
      
    })

});