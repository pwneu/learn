"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[986],{1194:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var i=n(4848),o=n(8453);const r={title:"Morse Code",sidebar_position:5},d=void 0,l={id:"cryptography/morse-code",title:"Morse Code",description:"Introduction to Morse Code",source:"@site/docs/03-cryptography/morse-code.mdx",sourceDirName:"03-cryptography",slug:"/cryptography/morse-code",permalink:"/learn/docs/cryptography/morse-code",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/03-cryptography/morse-code.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Morse Code",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hexadecimal",permalink:"/learn/docs/cryptography/hexadecimal"},next:{title:"JSON Web Tokens",permalink:"/learn/docs/cryptography/jwt"}},c={},t=[{value:"Introduction to Morse Code",id:"introduction-to-morse-code",level:2},{value:"Morse Code Alphabet",id:"morse-code-alphabet",level:2},{value:"Morse Code Numbers and Punctuation",id:"morse-code-numbers-and-punctuation",level:2},{value:"How Morse Code Works",id:"how-morse-code-works",level:2},{value:"Applications of Morse Code",id:"applications-of-morse-code",level:2},{value:"External Resources",id:"external-resources",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"introduction-to-morse-code",children:"Introduction to Morse Code"}),"\n",(0,i.jsx)(s.p,{children:"Morse Code is a method of encoding text characters as sequences of dots and dashes. It was developed in the early 1830s and was widely used for telecommunication purposes. Morse code represents each letter of the alphabet, numerals, and some punctuation marks using short signals (dots) and long signals (dashes)."}),"\n",(0,i.jsxs)(s.p,{children:["Morse Code is named after ",(0,i.jsx)(s.code,{children:"Samuel Morse"}),", one of its inventors. It was initially designed for use in telegraphy, where operators would transmit messages over long distances by manually tapping signals."]}),"\n",(0,i.jsx)(s.h2,{id:"morse-code-alphabet",children:"Morse Code Alphabet"}),"\n",(0,i.jsx)(s.p,{children:"Each letter in the alphabet is represented by a specific sequence of dots and dashes. Here's an example of some Morse code characters:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A: ",(0,i.jsx)(s.code,{children:".-"})]}),"\n",(0,i.jsxs)(s.li,{children:["B: ",(0,i.jsx)(s.code,{children:"-..."})]}),"\n",(0,i.jsxs)(s.li,{children:["C: ",(0,i.jsx)(s.code,{children:"-.-."})]}),"\n",(0,i.jsxs)(s.li,{children:["D: ",(0,i.jsx)(s.code,{children:"-.."})]}),"\n",(0,i.jsxs)(s.li,{children:["E: ",(0,i.jsx)(s.code,{children:"."})]}),"\n",(0,i.jsxs)(s.li,{children:["F: ",(0,i.jsx)(s.code,{children:"..-."})]}),"\n",(0,i.jsxs)(s.li,{children:["G: ",(0,i.jsx)(s.code,{children:"--."})]}),"\n",(0,i.jsxs)(s.li,{children:["H: ",(0,i.jsx)(s.code,{children:"...."})]}),"\n",(0,i.jsxs)(s.li,{children:["I: ",(0,i.jsx)(s.code,{children:".."})]}),"\n",(0,i.jsxs)(s.li,{children:["J: ",(0,i.jsx)(s.code,{children:".---"})]}),"\n",(0,i.jsxs)(s.li,{children:["K: ",(0,i.jsx)(s.code,{children:"-.-"})]}),"\n",(0,i.jsxs)(s.li,{children:["L: ",(0,i.jsx)(s.code,{children:".-.."})]}),"\n",(0,i.jsxs)(s.li,{children:["M: ",(0,i.jsx)(s.code,{children:"--"})]}),"\n",(0,i.jsxs)(s.li,{children:["N: ",(0,i.jsx)(s.code,{children:"-."})]}),"\n",(0,i.jsxs)(s.li,{children:["O: ",(0,i.jsx)(s.code,{children:"---"})]}),"\n",(0,i.jsxs)(s.li,{children:["P: ",(0,i.jsx)(s.code,{children:".--."})]}),"\n",(0,i.jsxs)(s.li,{children:["Q: ",(0,i.jsx)(s.code,{children:"--.-"})]}),"\n",(0,i.jsxs)(s.li,{children:["R: ",(0,i.jsx)(s.code,{children:".-."})]}),"\n",(0,i.jsxs)(s.li,{children:["S: ",(0,i.jsx)(s.code,{children:"..."})]}),"\n",(0,i.jsxs)(s.li,{children:["T: ",(0,i.jsx)(s.code,{children:"-"})]}),"\n",(0,i.jsxs)(s.li,{children:["U: ",(0,i.jsx)(s.code,{children:"..-"})]}),"\n",(0,i.jsxs)(s.li,{children:["V: ",(0,i.jsx)(s.code,{children:"...-"})]}),"\n",(0,i.jsxs)(s.li,{children:["W: ",(0,i.jsx)(s.code,{children:".--"})]}),"\n",(0,i.jsxs)(s.li,{children:["X: ",(0,i.jsx)(s.code,{children:"-..-"})]}),"\n",(0,i.jsxs)(s.li,{children:["Y: ",(0,i.jsx)(s.code,{children:"-.--"})]}),"\n",(0,i.jsxs)(s.li,{children:["Z: ",(0,i.jsx)(s.code,{children:"--.."})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"morse-code-numbers-and-punctuation",children:"Morse Code Numbers and Punctuation"}),"\n",(0,i.jsx)(s.p,{children:"Morse code also supports numerals and punctuation marks. Here are some examples:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["0: ",(0,i.jsx)(s.code,{children:"-----"})]}),"\n",(0,i.jsxs)(s.li,{children:["1: ",(0,i.jsx)(s.code,{children:".----"})]}),"\n",(0,i.jsxs)(s.li,{children:["2: ",(0,i.jsx)(s.code,{children:"..---"})]}),"\n",(0,i.jsxs)(s.li,{children:["3: ",(0,i.jsx)(s.code,{children:"...--"})]}),"\n",(0,i.jsxs)(s.li,{children:["4: ",(0,i.jsx)(s.code,{children:"....-"})]}),"\n",(0,i.jsxs)(s.li,{children:["5: ",(0,i.jsx)(s.code,{children:"....."})]}),"\n",(0,i.jsxs)(s.li,{children:["6: ",(0,i.jsx)(s.code,{children:"-...."})]}),"\n",(0,i.jsxs)(s.li,{children:["7: ",(0,i.jsx)(s.code,{children:"--..."})]}),"\n",(0,i.jsxs)(s.li,{children:["8: ",(0,i.jsx)(s.code,{children:"---.."})]}),"\n",(0,i.jsxs)(s.li,{children:["9: ",(0,i.jsx)(s.code,{children:"----."})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Some punctuation marks:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Period (.): ",(0,i.jsx)(s.code,{children:".-.-.-"})]}),"\n",(0,i.jsxs)(s.li,{children:["Comma (,): ",(0,i.jsx)(s.code,{children:"--..--"})]}),"\n",(0,i.jsxs)(s.li,{children:["Question mark (?): ",(0,i.jsx)(s.code,{children:"..--.."})]}),"\n",(0,i.jsxs)(s.li,{children:["Apostrophe ('): ",(0,i.jsx)(s.code,{children:".----."})]}),"\n",(0,i.jsxs)(s.li,{children:["Exclamation mark (!): ",(0,i.jsx)(s.code,{children:"-.-.--"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-morse-code-works",children:"How Morse Code Works"}),"\n",(0,i.jsx)(s.p,{children:"Morse Code uses short signals (dots) and long signals (dashes) to encode letters and numbers. The duration of a dot is the base unit of time, and a dash is typically three times as long as a dot. The spacing between dots and dashes within the same letter is minimal, while the space between letters is longer, and the space between words is even longer."}),"\n",(0,i.jsxs)(s.p,{children:["For example, the message ",(0,i.jsx)(s.code,{children:"HELLO"})," in Morse Code would be:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:".... . .-.. .-.. ---\n"})}),"\n",(0,i.jsx)(s.h2,{id:"applications-of-morse-code",children:"Applications of Morse Code"}),"\n",(0,i.jsx)(s.p,{children:"While Morse Code is not commonly used in modern telecommunications, it still has some important applications:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Aviation and Navigation"}),": Some navigational aids transmit Morse Code signals to identify their locations."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Amateur Radio (Ham Radio)"}),": Many amateur radio operators still use Morse Code for communication, especially in long-distance communication."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Emergency Signaling"}),": Morse Code is still recognized as a reliable form of communication in emergencies, particularly the SOS signal ",(0,i.jsx)(s.code,{children:"(... --- ...)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://morsecode.world/international/translator.html",children:"Morse Code Translator"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Morse_code",children:"Morse Code on Wikipedia"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var i=n(6540);const o={},r=i.createContext(o);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);