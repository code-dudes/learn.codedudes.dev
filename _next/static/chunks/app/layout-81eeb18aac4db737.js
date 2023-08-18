(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9927:function(e,n,o){Promise.resolve().then(o.bind(o,4390))},4390:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return h}});var i=o(9268);o(3752);var s=o(6006),r=o(2592),l=o(5846),t=o.n(l),c=o(4942),a=()=>{let{isLoggedIn:e,isAdmin:n,startLogin:o,logout:l}=(0,c.a)(),[a,d,h]=(0,r.Z)(["jwt"]);a.jwt;let[u,g]=(0,s.useState)(e);return(0,s.useEffect)(()=>{g(e)},[]),(0,i.jsx)("header",{children:(0,i.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[(0,i.jsx)("img",{src:"/img/website-logo.png",alt:"CodeDudes",className:"nav-logo"}),(0,i.jsxs)("ul",{className:"nav-items",children:[(0,i.jsx)("li",{children:(0,i.jsx)(t(),{href:"/",children:"Home"})}),e?(0,i.jsx)("li",{onClick:function(){console.log("logout clicked"),l(),console.log("logout complete")},children:"Logout"}):(0,i.jsx)("li",{onClick:function(){console.log("login clicked"),o(),console.log("login clicked")},children:"Login"}),e&&(0,i.jsx)("li",{children:(0,i.jsx)(t(),{href:"/profile",children:"Profile"})}),e&&n&&(0,i.jsx)("li",{children:(0,i.jsx)(t(),{href:"/admin",children:"Admin"})})]})]})})};function d(){return(0,i.jsx)("footer",{children:(0,i.jsxs)("div",{className:"footer-content",children:[(0,i.jsxs)("nav",{className:"footer-menu",children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("div",{className:"col-section",children:[(0,i.jsx)("h3",{className:"footer-heading",children:"Courses"}),(0,i.jsxs)("ul",{className:"product-list",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"Python"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"DSA"})})]})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("div",{className:"col-section",children:[(0,i.jsx)("h3",{className:"footer-heading",children:"Platform"}),(0,i.jsx)("ul",{className:"product-list",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"Features"})})})]})}),(0,i.jsx)("div",{className:"item",children:(0,i.jsxs)("div",{className:"col-section",children:[(0,i.jsx)("h3",{className:"footer-heading",children:"About"}),(0,i.jsx)("ul",{className:"product-list",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:"Contact Us"})})})]})})]}),(0,i.jsx)("section",{className:"footer-base",children:(0,i.jsxs)("div",{className:"footer-legal",children:[(0,i.jsx)("div",{className:"footer-legal-copyright",children:"Copyright \xa9 2023 CodeDudes"}),(0,i.jsxs)("div",{className:"footer-legal-links",children:[(0,i.jsx)("a",{href:"#",children:"Privacy Policy"}),(0,i.jsx)("a",{href:"#",children:"Terms of Use"})]})]})})]})})}function h(e){let{children:n}=e;return(0,i.jsx)("html",{lang:"en",children:(0,i.jsx)("body",{children:(0,i.jsxs)(c.H,{children:[(0,i.jsx)(a,{}),n,(0,i.jsx)(d,{})]})})})}o(2474)},4942:function(e,n,o){"use strict";o.d(n,{H:function(){return g},a:function(){return j}});var i=o(9268),s=o(2592),r=o(9180),l=(e,n)=>{let o=Object.entries(n).map(e=>{let[n,o]=e;return"".concat(n,"=").concat(encodeURIComponent(o))}).join("&");return"".concat(e,"?").concat(o)};let t=e=>l("https://www.linkedin.com/oauth/v2/authorization",{response_type:"code",client_id:"77k9klio9keegq",redirect_uri:"https://learn.codedudes.dev/login/callback",scope:"profile email openid",state:e}),c=Object.freeze({SESSION_STORAGE_OAUTH_STATE_KEY:"oauth_state",SESSION_STORAGE_OAUTH_LOGIN_PROVIDER_KEY:"login_provider_key",OAUTH_PROVIDER_LINKEDIN:"linkedin",COOKIE_AUTH_TOKEN_KEY:"jwt"});var a=o(6008),d=o(6006);let h="https://api.codedudes.dev",u=(0,d.createContext)({isLoggedIn:!1,isAdmin:!1,startLogin:()=>{},login:(e,n,o)=>{},logout:()=>{}}),g=e=>{let{children:n}=e;console.log("base url",h);let o=(0,a.useRouter)(),[l,g,j]=(0,s.Z)(["jwt"]),[f,x]=(0,d.useState)(!1),[m,_]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{x(!!l.jwt)},[]),(0,i.jsx)(u.Provider,{value:{isLoggedIn:f,isAdmin:m,startLogin:()=>{console.log("startLogin");var e=(0,r.Z)(),n=t(e);window.sessionStorage.setItem(c.SESSION_STORAGE_OAUTH_STATE_KEY,e),window.sessionStorage.setItem(c.SESSION_STORAGE_OAUTH_LOGIN_PROVIDER_KEY,c.OAUTH_PROVIDER_LINKEDIN),console.log("redirect uri",n),window.location.href=n},login:function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>{e.error?console.log("error logging in ",err):console.log("loggin success")};(async function(){var s=e=>{i({error:e})};if(!function(e){if(!e)return!1;let n=window.sessionStorage.getItem(c.SESSION_STORAGE_OAUTH_STATE_KEY);return!!n&&n===e}(n)){s("Error logging in. State mismatch");return}let r=window.sessionStorage.getItem(c.SESSION_STORAGE_OAUTH_LOGIN_PROVIDER_KEY);if(!(r&&r===c.OAUTH_PROVIDER_LINKEDIN)){s("Error logging in. Provider not supported");return}try{let n=await fetch(h+"/login/linkedin",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:e,redirectUri:"https://learn.codedudes.dev/login/callback"})});if(!n.ok){s("Error logging in. Unable to log you in right now");return}x(!0),_(!1)}catch(e){s("Error loggin in. Try again");return}o.push("/")})()},logout:()=>{j("jwt"),x(!1),_(!1),console.log("logout")}},children:n})},j=()=>(0,d.useContext)(u)},3752:function(){}},function(e){e.O(0,[390,625,253,488,744],function(){return e(e.s=9927)}),_N_E=e.O()}]);