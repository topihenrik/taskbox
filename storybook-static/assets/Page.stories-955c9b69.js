import{w as v,e as i,u as w}from"./index-02850062.js";import{a as t,j as e}from"./jsx-runtime-29545a09.js";import{R as y}from"./index-76fb7be0.js";import{H as f}from"./Header-6deac514.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./Button-32da8f92.js";const g=()=>{const[r,o]=y.useState();return t("article",{children:[e(f,{user:r,onLogin:()=>o({name:"Jane Doe"}),onLogout:()=>o(void 0),onCreateAccount:()=>o({name:"Jane Doe"})}),t("section",{children:[e("h2",{children:"Pages in Storybook"}),t("p",{children:["We recommend building UIs with a"," ",e("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:e("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),e("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),t("ul",{children:[e("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),e("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),t("p",{children:["Get a guided tutorial on component-driven development at"," ",e("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",e("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),t("div",{className:"tip-wrapper",children:[e("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",e("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("g",{fill:"none",fillRule:"evenodd",children:e("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Page"};const D={title:"Example/Page",component:g,parameters:{layout:"fullscreen"}},n={},a={play:async({canvasElement:r})=>{const o=v(r),s=o.getByRole("button",{name:/Log in/i});await i(s).toBeInTheDocument(),await w.click(s),await i(s).not.toBeInTheDocument();const u=o.getByRole("button",{name:/Log out/i});await i(u).toBeInTheDocument()}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole("button", {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const S=["LoggedOut","LoggedIn"];export{a as LoggedIn,n as LoggedOut,S as __namedExportsOrder,D as default};
