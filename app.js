
function myFunction() {

    let pronoun = ['the', 'our', 'a'];
    let adj = ['great', 'big', 'little'];
    let noun = ['river', 'cocodrile', 'tree'];
    let domain = ['.com', '.net', '.cr']

    var randomPronoun = pronoun[Math.floor(Math.random() * 3)];
    var randomAdj = adj[Math.floor(Math.random() * 3)];
    var randomNoun = noun[Math.floor(Math.random() * 3)];
    var randomDomain = domain[Math.floor(Math.random() * 3)];
    var newDomain = randomPronoun + randomAdj + randomNoun + randomDomain;

    document.getElementById("domainGenerator").innerHTML = newDomain;
    console.log(newDomain);
}




