function foo(callback) {
    console.log("1");
    setTimeout(() => {
    const data = { name: "alice", age: 42 };
    console.log("2");
    callback(data);
    console.log("3");
    }, 2000);
    }
    function bar(data) {
    console.log("4");
    console.log("data:", data);
    }
    console.log("5");
foo(bar);
console.log("6");
