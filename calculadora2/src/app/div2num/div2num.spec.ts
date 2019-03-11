import { div2num }from './div2num';
import {} from 'jasmine';
describe ('div2num',()=>{

it ('Should add 2 numbers',()=>{
    let mydiv= div2num(2,2);
    let result =div2num(2,2);
    expect(result).toBe(1);
})
})