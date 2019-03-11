import { mul3num }from './mul3num';
import {} from 'jasmine';
describe ('mul3num',()=>{

it ('should multiple 3 numbers',()=>{
    let mymul= mul3num(3,5,2);
    let result =mul3num(3,5,2);
    expect (result).toBe(30);
})
})