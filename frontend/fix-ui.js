const fs = require('fs');

let footer = fs.readFileSync('components/Footer.jsx', 'utf8');
footer = footer.replace(/background: "rgba\(6,6,10,0\.8\)"/g, 'background: "var(--color-bg)"');
footer = footer.replace(/color: "white"/g, 'color: "var(--color-text-primary)"');
footer = footer.replace(/#a855f7/g, 'var(--color-neon-cyan)');
footer = footer.replace(/#3b82f6/g, 'var(--color-neon-purple)');
fs.writeFileSync('components/Footer.jsx', footer);

let chat = fs.readFileSync('components/ChatBot.jsx', 'utf8');
chat = chat.replace(/color: "white"/g, 'color: "var(--color-text-primary)"');
chat = chat.replace(/rgba\(168,85,247,/g, 'rgba(10,17,40,'); 
chat = chat.replace(/rgba\(6,182,212,/g, 'rgba(212,175,55,');
chat = chat.replace(/rgba\(255,255,255,0\.05\)/g, 'rgba(10,17,40,0.04)'); 
chat = chat.replace(/rgba\(255,255,255,0\.1\)/g, 'rgba(10,17,40,0.02)'); 
chat = chat.replace(/rgba\(0,0,0,0\.2\)/g, 'rgba(250,249,246,0.9)'); 
fs.writeFileSync('components/ChatBot.jsx', chat);

let cta = fs.readFileSync('components/FloatingCTA.jsx', 'utf8');
cta = cta.replace(/\/quotation/g, '/contact');
cta = cta.replace(/linear-gradient\(135deg, #a855f7, #3b82f6\)/g, 'linear-gradient(135deg, var(--color-neon-purple), var(--color-neon-blue))');
cta = cta.replace(/rgba\(168,85,247,/g, 'rgba(10,17,40,');
fs.writeFileSync('components/FloatingCTA.jsx', cta);

console.log('UI Fixes Applied!');
