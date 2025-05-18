function add(x,y)
{
    if(x<5)
    {
        return Promise.reject("less than 5");
    }
    else
    {
    return Promise.resolve(x+y)
    }
}
function sqr(a)
{
    return a*a
}
async function main()
{
    try
    {
    let sum=await add(4,5)
    let res=sqr(sum)
    console.log(res)
    }
    catch(error)
    {
        console.log(error);
    }
}
main()