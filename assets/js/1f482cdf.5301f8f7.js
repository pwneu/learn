"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[641],{8863:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const a={title:"Base 64",sidebar_position:2},r=void 0,o={id:"cryptography/base64",title:"Base 64",description:"Introduction to Base 64 Encoding",source:"@site/docs/03-cryptography/base64.mdx",sourceDirName:"03-cryptography",slug:"/cryptography/base64",permalink:"/learn/docs/cryptography/base64",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/03-cryptography/base64.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Base 64",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CyberChef",permalink:"/learn/docs/cryptography/cyberchef"},next:{title:"JSON Web Tokens",permalink:"/learn/docs/cryptography/jwt"}},c={},d=[{value:"Introduction to Base 64 Encoding",id:"introduction-to-base-64-encoding",level:2},{value:"How Base 64 Encoding Works",id:"how-base-64-encoding-works",level:2},{value:"Encoding Example",id:"encoding-example",level:2},{value:"Decoding Base 64",id:"decoding-base-64",level:2},{value:"Applications of Base 64 Encoding",id:"applications-of-base-64-encoding",level:2},{value:"External Resources",id:"external-resources",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction-to-base-64-encoding",children:"Introduction to Base 64 Encoding"}),"\n",(0,t.jsx)(n.p,{children:"Base 64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It is used to encode data into a format that can be easily transmitted over media that are designed to handle text. Base 64 encoding is commonly used in email, URLs, and data storage to ensure that binary data remains intact during transport."}),"\n",(0,t.jsx)(n.h2,{id:"how-base-64-encoding-works",children:"How Base 64 Encoding Works"}),"\n",(0,t.jsx)(n.p,{children:"Base 64 encoding works by dividing the input data into chunks of 24 bits. Each 24-bit chunk is split into four 6-bit groups. Each 6-bit group is then mapped to a Base 64 alphabet, which consists of 64 different characters. The Base 64 alphabet includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Uppercase letters (A-Z)"}),"\n",(0,t.jsx)(n.li,{children:"Lowercase letters (a-z)"}),"\n",(0,t.jsx)(n.li,{children:"Digits (0-9)"}),"\n",(0,t.jsxs)(n.li,{children:["Two additional characters (typically ",(0,t.jsx)(n.code,{children:"+"})," and ",(0,t.jsx)(n.code,{children:"/"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example, the Base 64 alphabet used in standard encoding is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the input data does not align perfectly with the 24-bit chunks (which often happens), padding characters (",(0,t.jsx)(n.code,{children:"="}),") are added to ensure that the final encoded output length is a multiple of 4 characters."]}),"\n",(0,t.jsx)(n.h2,{id:"encoding-example",children:"Encoding Example"}),"\n",(0,t.jsx)(n.p,{children:'To encode the string "hello" in Base 64:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Convert the string to its binary representation."}),"\n",(0,t.jsx)(n.li,{children:"Group the binary data into 24-bit chunks."}),"\n",(0,t.jsx)(n.li,{children:"Divide each 24-bit chunk into four 6-bit groups."}),"\n",(0,t.jsx)(n.li,{children:"Map each 6-bit group to a Base 64 character."}),"\n",(0,t.jsx)(n.li,{children:"Concatenate the resulting characters."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"hello"}),", the Base 64 encoded result is ",(0,t.jsx)(n.code,{children:"aGVsbG8="}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"decoding-base-64",children:"Decoding Base 64"}),"\n",(0,t.jsx)(n.p,{children:"Decoding Base 64 encoded data involves reversing the encoding process:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Convert each Base 64 character back to its 6-bit binary representation."}),"\n",(0,t.jsx)(n.li,{children:"Combine the binary data into 24-bit chunks."}),"\n",(0,t.jsx)(n.li,{children:"Convert the 24-bit chunks back to their original binary form."}),"\n",(0,t.jsx)(n.li,{children:"Translate the binary data back to the original text or binary data."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"applications-of-base-64-encoding",children:"Applications of Base 64 Encoding"}),"\n",(0,t.jsx)(n.p,{children:"Base 64 encoding is used in various scenarios, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Email Encoding"}),": Base 64 encoding is used in MIME (Multipurpose Internet Mail Extensions) to encode email attachments and other binary data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"URL Encoding"}),": Base 64 encoding can be used to encode data in URLs to ensure that special characters are properly transmitted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Storage"}),": Base 64 encoding is used to store binary data in XML or JSON formats, making it easier to transmit and store data in text-based formats."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.base64decode.net/",children:"Base64 Encode/Decode Online Tool"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Base64",children:"Base64 Encoding Explained"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc4648",children:"RFC 4648: Base 64 Encoding"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Base 64 encoding provides a straightforward way to encode binary data into a text format that is safe for transmission and storage in text-based systems."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);