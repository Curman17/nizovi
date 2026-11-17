let names=["John", "Jane", "Bob",,"Mike"];
for (let i = 0; i < names.length; i++) {
    console.log( names[i])
}
console.error();



names.push("Lovro");
console.log(names);

console.error();

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i]==="Jane") {
        break;
    }  
}
console.error();

names = names.filter(function( name ) {
   return name !== undefined;
});
console.log(names);
