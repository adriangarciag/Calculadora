import { sum3num }from './sum3num';
import {} from 'jasmine';
describe ('sum3num',()=>{

it ('should add 3 numbers',()=>{
    let mymul= sum3num(5,8,2);
    let result =sum3num(5,8,2);
    expect (result).toBe(15);
})

it ('should add 3 numbers',()=>{
    let mymul= sum3num(7,3,15);
    let result =sum3num(7,3,15);
    expect (result).toBe(25);
})

it ('should add 3 numbers',()=>{
    let mymul= sum3num(9,5,4);
    let result =sum3num(9,5,4);
    expect (result).toBe(18);
})
})