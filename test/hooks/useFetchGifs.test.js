import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', () => {

       const { result } = renderHook(() => useFetchGifs('One Punch'));

       console.log(result);

    })  
});  