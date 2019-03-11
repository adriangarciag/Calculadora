import { res2num }from './res2num';
import {} from 'jasmine';
describe ('res2num ',()=>{

it ('Resta de 2 numeros pares',()=>{
    let mydiv= res2num (6,2,);
    let result =res2num (6,2,);
    expect(result).toBe(4);
})
it ('Resta de 2 numeros impares',()=>{
    let mydiv= res2num (9,3);
    let result =res2num (9,3);
    expect(result).toBe(6);
})
it ('Resta de 2 numeros cualquiera',()=>{
    let mydiv= res2num (15,3);
    let result =res2num (15,3);
    expect(result).toBe(12);
})
})