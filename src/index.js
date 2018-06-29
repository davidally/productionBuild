import './styles/main.scss';
import $ from 'jquery';
import _ from 'lodash';

console.log('Hello World');
 
$(document).ready( function(){
 
    let $doesJQWork = $('img').attr('src');
    const myFave = 'This is my favorite type of bundler!';
    let newStr = [1,2,3,4,5,67,8,9];
    let doesthiswork = _.drop(newStr, 3);
    console.log(myFave);
    console.log($doesJQWork);
    console.log(doesthiswork);
}); 