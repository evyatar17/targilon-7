function foo() {
    console.log("1")
    return new Promise((resolve, reject) => {
    console.log("2")
    setTimeout(() => {
    console.log("3")
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
    console.log("8")
    });
    }
    console.log("9")
    foo().then((data) => {
    console.log("data:", data);
    })
    .catch((error) => {
    console.error("error:", error);
    });