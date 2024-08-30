export const mockAPICall = () => {
  const randomNum = Math.floor(Math.random() * (100 - 0));
  console.log("🚀 > mockAPICall > randomNum:", randomNum);

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (randomNum < 50) {
        res("Successful Response "+ randomNum);
        console.log("success");
      } else {
        rej("Intended Err "+ randomNum);
        console.log("fail");
      }
    }, 1000);
  });
};
