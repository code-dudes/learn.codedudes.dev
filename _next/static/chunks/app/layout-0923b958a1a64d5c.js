(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9147:function(e,n,t){Promise.resolve().then(t.bind(t,166)),Promise.resolve().then(t.t.bind(t,3752,23))},166:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var o=t(9268),i=t(6006),s=t(2592),r=t(5846),c=t.n(r),l=t(9180),_=(e,n)=>{let t=Object.entries(n).map(e=>{let[n,t]=e;return"".concat(n,"=").concat(encodeURIComponent(t))}).join("&");return"".concat(e,"?").concat(t)};let a=e=>_("https://www.linkedin.com/oauth/v2/authorization",{response_type:"code",client_id:"77k9klio9keegq",redirect_uri:"https://learn.codedudes.dev/login/callback",scope:"r_liteprofile r_emailaddress",state:e});var u=t(6970);function d(){console.log("login");var e=(0,l.Z)(),n=a(e);window.sessionStorage.setItem(u._.SESSION_STORAGE_OAUTH_STATE_KEY,e),window.sessionStorage.setItem(u._.SESSION_STORAGE_OAUTH_LOGIN_PROVIDER_KEY,u._.OAUTH_PROVIDER_LINKEDIN),console.log("redirect uri",n),window.location.href=n}var E=()=>{let[e,n,t]=(0,s.Z)(["jwt"]),[r,l]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{l(!!e.jwt)},[]),(0,o.jsx)("header",{children:(0,o.jsxs)("nav",{className:"nav",children:[(0,o.jsx)("img",{src:"/img/website-logo.png",alt:"CodeDudes",className:"nav-logo"}),(0,o.jsxs)("ul",{className:"nav-items",children:[(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/",children:"Home"})}),r?(0,o.jsx)("li",{onClick:function(){t("jwt"),l(!1),console.log("logout")},children:"Logout"}):(0,o.jsx)("li",{onClick:d,children:"Login"}),(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/about",children:"About"})})]})]})})}},6970:function(e,n,t){"use strict";t.d(n,{_:function(){return o}});let o=Object.freeze({SESSION_STORAGE_OAUTH_STATE_KEY:"oauth_state",SESSION_STORAGE_OAUTH_LOGIN_PROVIDER_KEY:"login_provider_key",OAUTH_PROVIDER_LINKEDIN:"linkedin",COOKIE_AUTH_TOKEN_KEY:"jwt"})},3752:function(){}},function(e){e.O(0,[370,253,488,744],function(){return e(e.s=9147)}),_N_E=e.O()}]);