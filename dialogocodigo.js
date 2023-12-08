

// const dialogobubble = document.querySelector('#dialogobubble');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
const p5 = document.querySelector('#p5');
const p6 = document.querySelector('#p6');
const p7 = document.querySelector('#p7');
const p8 = document.querySelector('#p8');
const p9 = document.querySelector('#p9');
const p10 = document.querySelector('#p10');

const definition = document.querySelector('.definition')
const button2 = document.querySelector('.button2')
const word = document.querySelector('.word')
const worddef = document.querySelector('.worddef')
const audiosrc = document.getElementById("chavinho")
const wordpt = document.querySelector('.wordpt')
const obfuscate = document.querySelector('.obfuscate')
const  wordptdef = document.querySelector('.wordptdef')
const pauladialogo = document.querySelector('.pauladialogo')
const guilhermedialogo = document.querySelector('.guilhermedialogo')
const exemplo = document.querySelector(".exemplo")

// p1.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "Anemones are my favourite type of flowers!"
//     guilhermedialogo.textContent = "Really? I didn't even know you liked flowers"
// });

// p2.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "I saw a choir singing yesterday at the church while passing by."
//     guilhermedialogo.textContent = "Neat! Were they good?"

// });

// p3.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "I have a family member in the army. He is a Coronel."
//     guilhermedialogo.textContent = "Thats a high rank! He must make a lot."

// });

// p4.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "I forgot to write the Epitome for the book i am going to publish."
//     guilhermedialogo.textContent = "You best write it hastly, then."

// });

// p5.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "I don't really like the strengh of expresso, so i need to drink it with milk."
//     guilhermedialogo.textContent = "I prefer espresso over that."

// });

// p6.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "I ate a ton of seafood last week."
//     guilhermedialogo.textContent = "Thats a hyperbole! I just learned about them the other day. I mean, we use it on a daily basis and rarely acknowledge it, as in 'eating a ton' or 'waiting for an eternity'. Cool, right?"

// });

// p7.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "Did you see John Doe's trial on TV?"
//     guilhermedialogo.textContent = "The juror was hung on their decision, so i only know it took a while."
// });

// p8.addEventListener('mouseover', function() {
//     pauladialogo.textContent = "I heard that there is a murderer on the loose in this town."
//     guilhermedialogo.textContent = "That might be related to the prison break we had yesterday!"
// });


// parte 2

p1.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Anemone';
    wordpt.textContent = 'Anemona';
    worddef.textContent = 'Any of various perennial herbs of the genus Anemone in the buttercup family, native chiefly to northern temperate regions and having palmately lobed leaves and large white or brightly colored flowers. ';
    wordptdef.textContent = 'Planta herbácea selvagem ou cultivada por causa de suas flores coloridas; pulsatila. Nome dado a diversas espécies de flores silvestres que crescem na primavera nas florestas da América do Norte e da Europa.';
    chavinho.setAttribute('src', 'assets/Anemone.mp3');
    exemplo.textContent = 'Tem uma grande coleção de anêmonas em seu jardim, um assassino.';
});

p2.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Obfuscate';
    wordpt.textContent = 'Ofuscar';
    worddef.textContent = 'Render obscure, unclear, or unintelligible.  ';
    wordptdef.textContent = 'Impedir a vista de; ocultar, encobrir, obscurecer.';
    chavinho.setAttribute('src', 'assets/Obfuscate.mp3');
    exemplo.textContent = 'Thomas leu o papel em sua mesa, com uma assinatura pertencente ao executivo.';
});

p3.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Ineffable';
    wordpt.textContent = 'Inefável';
    worddef.textContent = 'Too great or extreme to be expressed or described in words.';
    wordptdef.textContent = 'Que não se pode nomear ou descrever em razão de sua natureza, força, beleza; indizível, indescritível.';
    chavinho.setAttribute('src', 'assets/Ineffable.mp3');
    exemplo.textContent = 'Encarou um pouco suas anêmonas, agora inefáveis.';
});

p4.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Ubiquitous';
    wordpt.textContent = 'Ubíquo';
    worddef.textContent = 'Found or existing everywhere, omnipresent.';
    wordptdef.textContent = 'Que está ou existe ao mesmo tempo em toda parte; onipresente.';
    chavinho.setAttribute('src', 'assets/Ubiquitous.mp3');
    exemplo.textContent = 'Ele não dormiu. Não conseguia dormir. Por mais que tentava, não conseguia parar de pensar. Era um pensamento ubiquo. Aquilo era pernicioso.';
});

p5.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Espresso';
    wordpt.textContent = 'Espresso';
    worddef.textContent = 'A strong coffee brewed by forcing hot water under pressure through darkly roasted, finely ground coffee beans.';
    wordptdef.textContent = 'Um café forte preparado forçando a água quente sob pressão através de grãos de café torrados escuros e finamente moídos.';
    chavinho.setAttribute('src', 'assets/Espresso.mp3');
    exemplo.textContent = 'Começa sua manhã com a encorpada fragrância de uma xícara de espresso, um assassino.';
});

p6.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Pernicious';
    wordpt.textContent = 'Pernicioso';
    worddef.textContent = 'Having a very harmful effect or influence:';
    wordptdef.textContent = 'Que faz mal; nocivo, ruinoso.';
    chavinho.setAttribute('src', 'assets/Pernicious.mp3');
    exemplo.textContent = 'Ele não dormiu. Não conseguia dormir. Por mais que tentava, não conseguia parar de pensar. Era um pensamento ubiquo. Aquilo era pernicioso.';
});

p7.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Ephemeral';
    wordpt.textContent = 'Efêmero';
    worddef.textContent = 'Lasting for a very short time.';
    wordptdef.textContent = 'Que é passageiro, temporário, transitório.';
    chavinho.setAttribute('src', 'assets/Ephemeral.mp3');
    exemplo.textContent = 'Arruma suas coisas de forma efêmera e volta para casa, um assassino.';
});

p8.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Murderer';
    wordpt.textContent = 'Assassino';
    worddef.textContent = 'One guilty of murder; a person who, in possession of his reason, unlawfully kills a human being with premeditated malice. ';
    wordptdef.textContent = 'Indivíduo que mata outra pessoa; quem comete homicídio, tirando a vida de outro ser humano: polícia militar prende o assassino confesso.';
    chavinho.setAttribute('src', 'assets/Murderer.mp3');
    exemplo.textContent = 'Arruma suas coisas de forma efêmera e volta para casa, um assasino.';
});

p10.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Pioneer';
    wordpt.textContent = 'Pioneiro';
    worddef.textContent = 'Develop or be the first to use or apply (a new method, area of knowledge, or activity). ';
    wordptdef.textContent = 'Que ou aquele que vai adiante, que anuncia algo de novo ou se antecipa a alguém ou a algo; precursor.';
    chavinho.setAttribute('src', 'assets/Pioneer.mp3');
    exemplo.textContent = '...É encarregado pelo setor inteiro de pesquisas da empresa produtora pioneira de óculos de realidade virtual...';
});

p9.addEventListener('click', function() {
    definition.style.display = 'flex';
    obfuscate.style.display = 'flex';
    word.textContent = 'Regurgitate';
    wordpt.textContent = 'Regurgitar';
    worddef.textContent = 'To bring back swallowed food into the mouth: ';
    wordptdef.textContent = 'Expelir o excedente (esp. o conteúdo gástrico).';
    chavinho.setAttribute('src', 'assets/Regurgitate.mp3');
    exemplo.textContent = '...ultra-secreta tecnologia de inteligência artificial gerativa, isso é, capaz de criar algo original, não-regurgitado de informação pré-existente...';
});

button2.addEventListener('click', function() {
    definition.style.display = 'none';
    obfuscate.style.display = 'none';
})

obfuscate.addEventListener('click', function(){
    definition.style.display = 'none';
    obfuscate.style.display = 'none';
});