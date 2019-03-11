import { res3num }from './res3num';
import {} from 'jasmine';
describe ('res3num',()=>{

it ('Resta de 3 numeros',()=>{
    let mydiv= res3num(10,2,2);
    let result =res3num(10,2,2);
    expect(result).toBe(6);
})
it ('Resta de 3 numeros con decimal',()=>{
    let mydiv= res3num(22.5,.5,3.5);
    let result =res3num(22.5,.5,3.5);
    expect(result).toBe(18.5);
})
it ('Deberia dar el resultado de 15-5-5',()=>{
    let mydiv= res3num(15,5,5);
    let result =res3num(15,5,5);
    expect(result).toBe(5);
})
})