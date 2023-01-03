'use strict';
this.name = 'Jack';
function greet(){
    console.log(this)
}
greet.call(this.name);