let a = 101;
{
    let a = 104;
    console.log("1. a =", a);
    {
        let b = 404;
        console.log("2. a=", a);
        
    }
    {
        // cannot access sibling scope.
        // can only access parent's scope
        // console.log("3. b=", b); 
    }
}
// won't work because b in children's scope
//console.log(b);