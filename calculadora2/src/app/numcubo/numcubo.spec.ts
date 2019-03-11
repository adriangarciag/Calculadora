import { numcubo }from './numcubo';
import {} from 'jasmine';
describe ('numcubo',()=>{

    it ('Deberia dar el cubo de 3',()=>{
        let mymult=numcubo (3);
        let result =numcubo(3);
        expect(result).toBe(27);
    })
    it ('Deberia dar el cubo de 2',()=>{
        let mymult=numcubo(2);
        let result =numcubo(2);
        expect(result).toBe(8);
    })
    it ('Deberia dar el cubo de 5',()=>{
        let mymult=numcubo (5);
        let result =numcubo(5);
        expect(result).toBe(125);
    })
})