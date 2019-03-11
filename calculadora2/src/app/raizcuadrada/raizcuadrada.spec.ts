import { raizcuadrada }from './raizcuadrada';
import {} from 'jasmine';
describe ('raizcuadrada',()=>{

    it ('Deberia dar la raiz cuadrada de 81',()=>{
        let mymult=raizcuadrada (81);
        let result =raizcuadrada(81);
        expect(result).toBe(9);
    })
    it ('Deberia dar la raiz cuadrada de 4',()=>{
        let mymult=raizcuadrada (4);
        let result =raizcuadrada(4);
        expect(result).toBe(2);
    })
    it ('Deberia dar la raiz cuadrada de 100',()=>{
        let mymult=raizcuadrada (100);
        let result =raizcuadrada(100);
        expect(result).toBe(10);
    })
})