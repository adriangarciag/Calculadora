import { mul2num }from './mul2num';
import {} from 'jasmine';
describe ('mul2num',()=>{

it ('should multiple 3 numbers',()=>{
    let mymul= mul2num(7,3);
    let result =mul2num(7,3);
    expect (result).toBe(21);
})

it ('should multiple 3 numbers',()=>{
    let mymul= mul2num(5,3);
    let result =mul2num(5,3);
    expect (result).toBe(15);
})

it ('should multiple 3 numbers',()=>{
    let mymul= mul2num(9,5);
    let result =mul2num(9,5);
    expect (result).toBe(45);
})
})