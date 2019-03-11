import { div3num }from './div3num';
import {} from 'jasmine';
describe ('div2num',()=>{

it ('Deberia dar el resultado de 5/2/2',()=>{
    let mydiv= div3num(5,2,2);
    let result =div3num(5,2,2);
    expect(result).toBe(1.25);
})
it ('Deberia dar el resultado de 10/2/2',()=>{
    let mydiv= div3num(10,2,2);
    let result =div3num(10,2,2);
    expect(result).toBe(2.5);
})
it ('Deberia dar el resultado de 15/3/2',()=>{
    let mydiv= div3num(15,3,2);
    let result =div3num(15,3,2);
    expect(result).toBe(2.5);
})
})