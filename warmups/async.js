const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("New timer done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("timer is done");
  fetchData().then((text) => {
    console.log(text);
    return fetchData();
  }).then((text2) => {
    console.log(text2);
  });
}, 2000);

console.log("Hello");
console.log("My name is Jimmie");
