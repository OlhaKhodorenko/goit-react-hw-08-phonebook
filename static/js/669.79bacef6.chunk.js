"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[669],{5669:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var a=n(885),r=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},s=n(2791),c=n(9434),i="contactsForm_contactForm__XAAtb",o="contactsForm_input__nu5P6",u="contactsForm_submitBtn__zzpC0",l=n(967),d=n(6052),m=n(3329),h=function(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],h=e[1],f=(0,s.useState)(""),p=(0,a.Z)(f,2),_=p[0],v=p[1],x=(0,c.I0)(),j=(0,c.v9)(l.aC.getContacts),g=r(),C=function(){h(""),v("")};return(0,m.jsxs)("form",{className:i,onSubmit:function(t){console.log(t),t.preventDefault(),j.find((function(t){return t.name===n}))?alert(n+"is already in contacts."):(x(d.Z.addContact({id:r(),name:n,number:_})),C())},children:[(0,m.jsxs)("label",{children:["Name",(0,m.jsx)("input",{type:"text",name:"name",value:n,className:o,onChange:function(t){return h(t.currentTarget.value)},id:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{children:["Number",(0,m.jsx)("input",{type:"tel",name:"number",value:_,className:o,onChange:function(t){return v(t.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"input",className:u,children:"Add contacts"})]})},f="filter_input__5Xngh",p=n(1850),_=function(){var t=(0,c.I0)(),e=(0,c.v9)((function(t){return t.contacts.filter}));return(0,m.jsxs)("label",{children:[(0,m.jsx)("h3",{children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",value:e,className:f,onChange:function(e){return t((0,p.M6)(e.currentTarget.value))}})]})},v="contactList_contactsList__Oa9oy",x="contactList_marker__uvt4B",j="contactList_listItem__ikUhh",g="contactList_removeBtn__i97gB",C="contactList_itemName__qEoWC";function b(){var t=(0,c.I0)(),e=(0,c.v9)(l.aC.getFilteredContacts),n=(0,c.v9)(l.aC.getFilter),a=e.filter((function(t){return t.name.includes(n)}));console.log(n);return(0,m.jsx)("ul",{className:v,children:a.map((function(e){var n=e.contactId,a=e.name,r=e.number;return(0,m.jsxs)("li",{className:j,children:[(0,m.jsx)("span",{className:x}),(0,m.jsxs)("p",{className:C,children:[a,": ",r]}),(0,m.jsx)("button",{className:g,onClick:function(){return function(e){return t(l.mh.deleteContact(e))}(n)},children:"remove"})]},n)}))})}var N=n(5166),y=n(1775);function k(){var t=(0,c.I0)(),e=(0,c.v9)(y.Z.getLoading);return(0,s.useEffect)((function(){return t(d.Z.fetchContacts())}),[t]),(0,m.jsx)(N.Z,{children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsxs)("div",{className:"wrap",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{}),(0,m.jsx)(_,{})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Contacts"}),e&&(0,m.jsx)("h1",{children:"Loading..."}),(0,m.jsx)(b,{})]})]})]})})}}}]);
//# sourceMappingURL=669.79bacef6.chunk.js.map