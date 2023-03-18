// for(let i=0; i<10; i++)
// {
//     console.log(i);
// }

const states =[
    "Bihar",
    "Punjab",
    "UK",
    "UP",
    "Goa",
    1984,
    "AP",
    "JK",
]

// for( let i=0; i<states.length; i++)
// {
//     console.log(states[i]);
// }

for( let i=0; i<states.length ; i++)
{
    if(typeof states[i]!='string') break;
    {  
         console.log(states[i]);
    }

}
console.log("<------------------->");
for( let i=0; i<states.length ; i++)
{
    if(typeof states[i]!='string') continue;
    {  
         console.log(states[i]);
    }

}