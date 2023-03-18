const names =["Youtube", "Facebook", "Instagram"];

for(const n of names) // of is usually used for arrays
{
    console.log(n);
}

const symbols =
{
    yt : "YOUTUBE",
    fb : "Facebook",
    ig : "INSTAGRAM"
}

for(const n in symbols) // in is for objects
{
    // console.log(symbols[n]);
    console.log(`key is: ${n} and value is: ${symbols[n]}`);

}