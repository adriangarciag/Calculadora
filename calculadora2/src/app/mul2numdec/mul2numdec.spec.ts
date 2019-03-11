import { mul2numdec }from './mul2numdec';
import {} from 'jasmine';
describe ('mul2numdec',()=>{

    it ('Should multiply 2 decimal numbers',()=>{
        let mymult= mul2numdec(2.5,2.5);
        let result =mul2numdec(2.5,2.5);
        expect(result).toBe(6.25);
    })
})