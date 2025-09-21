import{L as s,a}from"./Header.stories-0d_kZPLO.js";import{P as t}from"./Page--l7IiTZm.js";import"./iframe-BcvNJK-V.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-mr_XI40x.js";const p={title:"Example/Page",render:e=>t(e)},r={args:{...s.args}},o={args:{...a.args}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    // More on composing args: https://storybook.js.org/docs/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...HeaderStories.LoggedOut.args
  }
}`,...o.parameters?.docs?.source}}};const i=["LoggedIn","LoggedOut"];export{r as LoggedIn,o as LoggedOut,i as __namedExportsOrder,p as default};
