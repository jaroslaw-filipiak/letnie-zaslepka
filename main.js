import './src/index.scss'


import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';




window.addEventListener('resize', () => {
    let intViewportWidth =  document.documentElement.clientWidth;

    if(intViewportWidth > 1280) {
        let deck = new Reveal({
            plugins: [ Markdown ]
         })
         deck.initialize({
             width: '100%',
             height: '100%',
             minScale: 0.2,
             maxScale: 1.0,
             margin: 0.01,
             disableLayout: true,
             touch: false
         });
    }

  

})

window.addEventListener('DOMContentLoaded', () => {
   
    if(intViewportWidth > 1280) {
        let deck = new Reveal({
            plugins: [ Markdown ]
         })
         deck.initialize({
             width: '100%',
             height: '100%',
             minScale: 0.2,
             maxScale: 1.0,
             margin: 0.01,
             disableLayout: true,
             touch: false
         });
    }

    
})

