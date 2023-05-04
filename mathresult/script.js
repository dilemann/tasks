
const div = document.querySelector("div");


function getMathResult(num, repeat) {

    if (typeof(repeat) !== "number" || repeat <= 0) {
        return num;
    }

    let res = "";
   for (let i = 1; i <= repeat; i++) {
        if(i === repeat) res += `${num * i}`;
        else res += `${num * i}---`;
        
   }
   return res;
}


const tipe = getMathResult(5, 100);

div.innerHTML = tipe;
