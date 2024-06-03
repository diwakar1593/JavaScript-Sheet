/* 
In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

for(let i=0; i<shoppingCart.length; i++){
    if(shoppingCart[i] === 'Meat'){
        break;
    }
    else if(i === shoppingCart.length-1){
        shoppingCart.unshift('Meat');
    }
}

for(let i = 0; i < shoppingCart.length; i++){
    if(shoppingCart[i] === 'Sugar'){
        break;
    }
    else if(i === shoppingCart.length-1){
        shoppingCart.push('Sugar');
    }
}

for(let i = 0; i < shoppingCart.length; i++){
    if(shoppingCart[i] === 'Honey'){
        shoppingCart.splice(i, 1);
    }
}
for(let i = 0; i < shoppingCart.length; i++){
    if(shoppingCart[i] === 'Tea'){
        shoppingCart[i] = 'Green Tea';
    }
}