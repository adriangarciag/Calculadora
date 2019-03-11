import { numcuadrado }from './numcuadrado';
import {} from 'jasmine';
describe ('numcuadrado',()=>{

    it ('Deberia dar el cuadrado de 2',()=>{
        let mymult=numcuadrado (2);
        let result =numcuadrado(2);
        expect(result).toBe(4);
    })
    it ('Deberia dar el cuadrado de 5',()=>{
        let mymult=numcuadrado (5);
        let result =numcuadrado(5);
        expect(result).toBe(25);
    })
    it ('Deberia dar el cuadrado de 3',()=>{
        let mymult=numcuadrado (3);
        let result =numcuadrado(3);
        expect(result).toBe(9);
    })
})