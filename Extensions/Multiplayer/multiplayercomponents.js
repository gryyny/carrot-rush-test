var gdjs;(function(y){const g=new y.Logger("Multiplayer");let E;(function(o){const m="lobbies-root-container",L="lobbies-frame-container",M="lobbies-close-container",I="lobbies-loader-container",N="lobbies-texts-container",f="lobbies-iframe-container",C="lobbies-iframe";let u=!0;o.getDomElementContainer=n=>{const t=n.getGame().getRenderer().getDomElementContainer();return t||(g.error("No DOM element container found."),null)},o.getLobbiesRootContainer=n=>{const t=o.getDomElementContainer(n);return t?t.querySelector(`#${m}`):null},o.getLobbiesLoaderContainer=n=>{const t=o.getDomElementContainer(n);return t?t.querySelector(`#${I}`):null},o.getLobbiesIframeContainer=n=>{const t=o.getDomElementContainer(n);return t?t.querySelector(`#${f}`):null},o.getLobbiesCloseContainer=n=>{const t=o.getDomElementContainer(n);return t?t.querySelector(`#${M}`):null},o.getLobbiesTextsContainer=n=>{const t=o.getDomElementContainer(n);return t?t.querySelector(`#${N}`):null},o.getLobbiesIframe=n=>{const t=o.getDomElementContainer(n);return t?t.querySelector(`#${C}`):null},o.displayLobbies=function(n,t){const r=o.getDomElementContainer(n);if(!r)return;const s=document.createElement("div");s.id=m,s.style.position="relative",s.style.backgroundColor="rgba(14, 6, 45, 0.5)",s.style.opacity="1",s.style.width="100%",s.style.height="100%",s.style.zIndex="2",s.style.pointerEvents="all";const i=document.createElement("div");i.id=L,i.style.backgroundColor="#FFFFFF",i.style.position="absolute",i.style.top="16px",i.style.bottom="16px",i.style.left="16px",i.style.right="16px",i.style.borderRadius="8px",i.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",i.style.overflow="hidden";const e=document.createElement("div");e.id=M,e.style.cursor="pointer",e.style.display="flex",e.style.justifyContent="right",e.style.alignItems="center",e.style.zIndex="3",e.style.position="absolute",e.style.top="32px",e.style.right="32px",D(e,t);const c=document.createElement("img");c.setAttribute("width","15px"),c.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuODUzNTUgMC4xNDY0NDdDOC4wNDg4MiAwLjM0MTcwOSA4LjA0ODgyIDAuNjU4MjkxIDcuODUzNTUgMC44NTM1NTNMMC44NTM1NTMgNy44NTM1NUMwLjY1ODI5MSA4LjA0ODgyIDAuMzQxNzA5IDguMDQ4ODIgMC4xNDY0NDcgNy44NTM1NUMtMC4wNDg4MTU1IDcuNjU4MjkgLTAuMDQ4ODE1NSA3LjM0MTcxIDAuMTQ2NDQ3IDcuMTQ2NDVMNy4xNDY0NSAwLjE0NjQ0N0M3LjM0MTcxIC0wLjA0ODgxNTUgNy42NTgyOSAtMC4wNDg4MTU1IDcuODUzNTUgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4xNDY0NDcgMC4xNDY0NDdDMC4zNDE3MDkgLTAuMDQ4ODE1NSAwLjY1ODI5MSAtMC4wNDg4MTU1IDAuODUzNTUzIDAuMTQ2NDQ3TDcuODUzNTUgNy4xNDY0NUM4LjA0ODgyIDcuMzQxNzEgOC4wNDg4MiA3LjY1ODI5IDcuODUzNTUgNy44NTM1NUM3LjY1ODI5IDguMDQ4ODIgNy4zNDE3MSA4LjA0ODgyIDcuMTQ2NDUgNy44NTM1NUwwLjE0NjQ0NyAwLjg1MzU1M0MtMC4wNDg4MTU1IDAuNjU4MjkxIC0wLjA0ODgxNTUgMC4zNDE3MDkgMC4xNDY0NDcgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+Cjwvc3ZnPgo="),e.appendChild(c),u||(e.style.visibility="hidden");const a=document.createElement("div");a.id=I,a.style.display="flex",a.style.flexDirection="column",a.style.height="100%",a.style.width="100%",a.style.justifyContent="center",a.style.alignItems="center";const l=document.createElement("img");l.setAttribute("width","28px"),l.setAttribute("src","data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYW5pbWF0ZS1zcGluIC1tbC0xIG1yLTMgaC01IHctNSB0ZXh0LXdoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxjaXJjbGUgb3BhY2l0eT0nMC4yNScgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0Ij48L2NpcmNsZT4KPHBhdGggb3BhY2l0eT0nMC43NScgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3oiPjwvcGF0aD4KPC9zdmc+"),l.style.marginTop="50px";try{l.animate([{transform:"rotate(0deg)"},{transform:"rotate(359deg)"}],{duration:3e3,iterations:1/0})}catch{g.warn("Animation not supported, loader will be fixed.")}a.appendChild(l);const d=document.createElement("div");d.id=f,d.style.display="flex",d.style.flexDirection="column",d.style.height="100%",d.style.width="100%",d.style.justifyContent="stretch",d.style.alignItems="stretch",d.style.display="none",i.appendChild(e),i.appendChild(a),i.appendChild(d),s.appendChild(i),r.appendChild(s)},o.displayIframeInsideLobbiesContainer=(n,t)=>{const r=o.getLobbiesIframeContainer(n),s=o.getLobbiesLoaderContainer(n),i=o.getLobbiesTextsContainer(n);if(!r||!s||!i){g.error("Lobbies containers not found.");return}const e=document.createElement("iframe");e.id=C,e.setAttribute("sandbox","allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts"),e.addEventListener("load",()=>{r.style.display="flex",s.style.display="none"}),e.addEventListener("loaderror",()=>{o.addReloadUrlToTextsContainer(()=>{r.removeChild(e),r.style.display="none",s.style.display="flex",o.displayIframeInsideLobbiesContainer(n,t)},i)}),e.src=t,e.style.flex="1",e.style.border="0",r.appendChild(e)},o.addTextsToLoadingContainer=(n,t,r)=>{const s=o.getLobbiesLoaderContainer(n);if(!s){g.error("Loader container not found.");return}const i=document.createElement("div");if(i.id=N,i.style.display="flex",i.style.flexDirection="column",i.style.width="100%",i.style.justifyContent="center",i.style.alignItems="center",i.style.position="relative",i.style.zIndex="3",i.style.fontSize="11pt",i.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',!t){const e=document.createElement("h1");e.innerText="Publish your game!",e.style.fontSize="20pt",e.style.fontWeight="bold";const c=document.createElement("p");c.innerText="GDevelop's lobbies are only available for published games.";const a=document.createElement("p");a.innerText="Click the button below to learn how to publish your game then try again.",i.appendChild(e),i.appendChild(c),i.appendChild(a),s.innerHTML="";const l=document.createElement("a");D(l,r),l.innerText="How to publish my game",l.style.color="#0078d4",l.style.textDecoration="none",l.style.textDecoration="underline",l.style.cursor="pointer",i.appendChild(l)}s.prepend(i)},o.addReloadUrlToTextsContainer=(n,t)=>{const r=document.createElement("a");D(r,n),r.innerText="Try again",r.style.color="#0078d4",r.style.textDecoration="none",r.style.textDecoration="underline",r.style.cursor="pointer",t.appendChild(r)},o.removeLobbiesContainer=function(n){const t=o.getLobbiesRootContainer(n);!t||t.remove()},o.changeLobbiesWindowCloseActionVisibility=function(n,t){u=t;const r=o.getLobbiesCloseContainer(n);!r||(r.style.visibility=t?"inherit":"hidden")},o.hideLobbiesCloseButtonTemporarily=function(n){if(!u)return;const t=o.getLobbiesCloseContainer(n);!t||(t.style.visibility="hidden",setTimeout(()=>{t.style.visibility="inherit"},5e3))},o.displayErrorNotification=function(n){o.showNotification(n,"error-notification","An error occurred while displaying the game lobbies, please try again.","error")},o.displayPlayerLeftNotification=function(n,t){o.showNotification(n,"player-left-notification",`${t} has left the game.`,"warning")},o.displayConnectionErrorNotification=function(n){o.showNotification(n,"connection-error-notification","Could not connect to other players.","error")},o.showNotification=function(n,t,r,s){const i=n.getGame().getRenderer().getDomElementContainer();if(!i){g.error("No DOM element container found.");return}const e=document.createElement("div");e.id=t,e.style.position="absolute",e.style.pointerEvents="all",e.style.backgroundColor=s==="success"?"#0E062D":s==="warning"?"#FFA500":"#FF0000",e.style.top="12px",e.style.right="16px",e.style.padding="6px 32px 6px 6px",e.style.zIndex="1",e.style.display="flex",e.style.flexDirection="row-reverse",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",e.style.borderRadius="4px",e.style.fontSize="11pt",e.style.color="#FFFFFF",e.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';try{e.animate([{transform:"translateY(-30px)",opacity:0},{transform:"translateY(0px)",opacity:1}],{duration:700,easing:"ease-out"})}catch{g.warn("Animation not supported, div will be fixed.")}const c=document.createElement("p");c.id="loggedText",c.innerHTML=r,c.style.margin="0px",e.appendChild(c),i.appendChild(e);const a=700,l=5e3;setTimeout(()=>{try{e.animate([{transform:"translateY(0px)",opacity:1},{transform:"translateY(-30px)",opacity:0}],{duration:a,easing:"ease-in"})}catch{g.warn("Animation not supported, div will be fixed.")}},l),setTimeout(()=>{e.remove()},l+a)};const D=function(n,t){n.addEventListener("touchstart",r=>{t()}),n.addEventListener("click",r=>{t()})}})(E=y.multiplayerComponents||(y.multiplayerComponents={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=multiplayercomponents.js.map
