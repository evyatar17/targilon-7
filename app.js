async function foo() {
    console.log(1)
    return new Promise((resolve, reject) => {
    console.log(2)
    setTimeout(() => {
    console.log(3)
    const r = Math.random()
    console.log(`r = ${r}`)
    if (r < 0.5) {
    console.log("4")
    resolve({ name: "Alice", age: 42 });
    console.log("5")
    } else {
    console.log("6")
    reject("No luck");
    console.log("7")
    }
    }, 2000);
    });
    }
    async function bar() {
    console.log("8")
    try {
        const f = await foo();
        console.log("9 " + f + " " + f.name)
        } catch (error) {
        console.error("Error: ", error);
        }
        const f2 = foo();
        console.log("10 " + f2)
        for(let i = 0; i < 3; i++)
        console.log(Math.random())
        // do more stuff if I want
        try {
        const v = await f2
        console.log("11 " + v.name)
    } catch (error) {
        console.error("Error2: ", error);
        }
        }
        bar()    