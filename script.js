const sumButton = document.querySelector("#sumButton");
const bkButton = document.querySelector("#bgButton");
const worker2  = new Worker('worker.js')

sumButton.addEventListener("click",(e)=>{

    // alert(`The final sum is: ${sum}`)
    worker2.postMessage("hello, your tasking is coming")
})

worker2.addEventListener("message",(message)=>{
    document.querySelector("#output").textContent = `I got sum of ${message.data}`
})

bkButton.addEventListener('click',(e)=>{
    if (document.body.style.backgroundColor !='green'){
        document.body.style.backgroundColor ='green';
    }
    else {document.body.style.backgroundColor ='pink'};
})
