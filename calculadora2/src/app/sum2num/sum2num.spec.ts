import { sum2num }from './sum2num';
import {} from 'jasmine';
describe ('sum2num',()=>{

it ('should add 2 numbers',()=>{
    let mymul= sum2num(27,30);
    let result =sum2num(27,30);
    expect (result).toBe(57);
})

it ('should add 3 numbers',()=>{
    let mymul= sum2num(3,2);
    let result =sum2num(3,2);
    expect (result).toBe(5);
})

it ('should add 3 numbers',()=>{
    let mymul= sum2num(37,55);
    let result =sum2num(37,55);
    expect (result).toBe(92);
})
})