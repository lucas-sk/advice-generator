(()=>{
  const idAdvice = document.querySelector(".id-advice");
  const btn = document.querySelector(".btn");
  const textAdvice = document.querySelector(".text-advice");
  
  const url = "https://api.adviceslip.com/advice";
  const adviceApi = async () => {
    const data = await fetch(url).then(res => res.json()).then(res => res.slip);
    return data
  }
  
  const getAdvice = async () => {
    const slip = await adviceApi();
    const {id, advice} = slip;
    idAdvice.innerHTML = `ADVICE #${id}`
    textAdvice.innerHTML = advice
  }

  btn.addEventListener('click', () =>{
    getAdvice();
  })
})()
