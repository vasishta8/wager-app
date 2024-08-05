function factorial(n) { 
    let ans = 1; 
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}    

function nCr(n, r) {
    return factorial(n) / factorial(r) / factorial(n-r);
}

function Multiplier(diamonds, mines) {
    let edge = 0.01
    return (1 - edge) * nCr(25, diamonds) / nCr(25-mines, diamonds);
}

function playAudio(path) {
    const audio = new Audio(path);
    audio.play();
}

export { playAudio };
export default Multiplier;