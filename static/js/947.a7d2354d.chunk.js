"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[947],{8947:function(e,n,o){o.r(n),o.d(n,{default:function(){return ae}});var r=o(6484),t=o(824),i=o(1413),s=o(9439),d=o(9434),a=o(1134),l=o(4695),c=o(8007),f=o(6052),u=o(6351),h=o(89),x=o(9589),b=o(9657),p=o(1692),m=o(7943),g=o(9381),j=o(6336),v=o(2437),C=o(7653),y=o(2791),_=o(8382),I=o(2233),w=o(184),$=c.Ry({name:c.Z_().required("Name is required").min(3,"Name must be no less than 3 characters long").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces"),number:c.Z_().required("Number is required").transform((function(e){return e.replace(/\D+/g,"")})).min(7,"Number phone must be no less than 7 characters long").max(12,"Number phone must be no more than 12 digits")}).required(),Z=function(){var e=(0,y.useState)(!1),n=(0,s.Z)(e,2),o=n[0],r=n[1],t=(0,d.I0)(),c=(0,d.v9)(u.Af),Z=(0,d.v9)(u.Y),R=(0,_.p)();(0,y.useEffect)((function(){Z||r(!1)}),[Z]);var k=(0,a.cI)({mode:"onTouched",resolver:(0,l.X)($)}),A=k.register,N=k.handleSubmit,L=k.reset,S=k.formState.errors;return(0,w.jsxs)(h.g,{onSubmit:N((function(e){var n=e.name,o=e.number;return r(!0),c.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?R({title:"".concat(n," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):c.find((function(e){return e.number===o}))?R({title:"Number: ".concat(o," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):(t((0,f.uK)({name:n,number:o})).unwrap().then((function(){R({title:"Contact has been added",isClosable:!0,position:"top-right",status:"success",duration:3e3})})).catch((function(){return R({title:"Something went wrong. Please try again later",isClosable:!0,position:"top-right",status:"error",duration:3e3})})),void L())})),as:"form",mx:"auto",justifyContent:"center",mb:6,maxH:"fit",p:4,bg:"#1a1d2b",borderRadius:"8px",children:[(0,w.jsx)(x.X,{color:" #ffd765",children:"Add new contact"}),(0,w.jsxs)(b.NI,{isInvalid:S.name,isRequired:!0,children:[(0,w.jsxs)(p.B,{children:[(0,w.jsx)(m.Z,{pointerEvents:"none",children:(0,w.jsx)(g.q,{bg:"#ffd76d",size:"xs"})}),(0,w.jsx)(j.I,(0,i.Z)((0,i.Z)({type:"text",color:"#ffffff",borderColor:"#ffd76d55",placeholder:"Enter contact name",_placeholder:{opacity:.5,color:"#ffd76d"}},A("name")),{},{bg:"#161821"}))]}),(0,w.jsx)(v.J1,{children:S.name&&S.name.message})]}),(0,w.jsxs)(b.NI,{isInvalid:S.number,isRequired:!0,children:[(0,w.jsxs)(p.B,{children:[(0,w.jsx)(m.Z,{pointerEvents:"none",children:(0,w.jsx)(I.q,{color:"#ffd76d"})}),(0,w.jsx)(j.I,(0,i.Z)((0,i.Z)({color:"#ffffff",type:"tel",borderColor:"#ffd76d55",placeholder:"Enter phone number",_placeholder:{opacity:.5,color:"#ffd76d"}},A("number")),{},{bg:"#161821"}))]}),(0,w.jsx)(v.J1,{children:S.number&&S.number.message})]}),(0,w.jsx)(C.z,{type:"submit",variant:"outline",isLoading:Z&&o,color:"#ffd76d",borderColor:"#ffd76d55",_hover:{color:"#1a1d2b",bg:"#ffd76d"},_focus:{color:"#1a1d2b",bg:"#ffd76d"},mt:"2px",children:"Add contact"})]})},R=o(6661),k=o(930),A=o(3771),N=function(e){var n=e.onCancel,o=e.contact,r=(0,a.cI)({mode:"onTouched",resolver:(0,l.X)($)}),t=r.register,s=r.handleSubmit,c=r.formState,x=c.errors,p=c.isSubmitting,m=c.isValid,g=(0,d.v9)(u.Af),v=(0,_.p)(),y=(0,d.I0)();return(0,w.jsxs)(h.g,{as:"form",onSubmit:s((function(e){var r=e.name,t=e.number;return o.name===r&&o.number===t?n():g.find((function(e){return e.name.toLowerCase()===r.toLowerCase()&&e.name.toLowerCase()!==o.name.toLowerCase()}))?v({title:"".concat(r," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):g.find((function(e){return e.number===t&&e.number!==o.number}))?v({title:"".concat(t," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):void y((0,f.Tk)({id:o.id,body:{name:r,number:t}})).unwrap().then((function(){v({title:"Contact updated",isClosable:!0,position:"top-right",status:"success",duration:3e3}),n()})).catch((function(){return v({title:"Something went wrong. Please try again later",isClosable:!0,position:"top-right",status:"error",duration:3e3})}))})),p:4,children:[(0,w.jsxs)(b.NI,{isInvalid:x.name,isRequired:!0,children:[(0,w.jsx)(k.l,{color:"#ffffff",children:"Name"}),(0,w.jsx)(j.I,(0,i.Z)((0,i.Z)({color:"#ffffff",type:"text"},t("name")),{},{defaultValue:null===o||void 0===o?void 0:o.name,bg:"#161821"}))]}),(0,w.jsxs)(b.NI,{isInvalid:x.number,isRequired:!0,children:[(0,w.jsx)(k.l,{color:"#ffffff",children:"Phone"}),(0,w.jsx)(j.I,(0,i.Z)((0,i.Z)({color:"#ffffff",type:"tel"},t("number")),{},{defaultValue:null===o||void 0===o?void 0:o.number,bg:"#161821"}))]}),(0,w.jsxs)(A.h,{display:"flex",justifyContent:"flex-end",mt:"8px",children:[(0,w.jsx)(C.z,{isLoading:p,type:"submit",isDisabled:!m,variant:"outline",color:"#ffd76d",borderColor:"#ffd76d55",_hover:{color:"#1a1d2b",bg:"#ffd76d"},_focus:{color:"#1a1d2b",bg:"#ffd76d"},children:"Save"}),(0,w.jsx)(C.z,{onClick:n,variant:"outline",color:"#ffd76d",borderColor:"#ffd76d55",_hover:{color:"#1a1d2b",bg:"#ffd76d"},_focus:{color:"#1a1d2b",bg:"#ffd76d"},children:"Cancel"})]})]})},L=o(5548).EditIcon,S=o(2144),q=S.useDisclosure,z=S.Popover,D=S.PopoverTrigger,B=S.IconButton,F=S.PopoverContent,P=S.FocusLock,O=S.PopoverCloseButton,T=S.Portal,E=o(2791).useRef,V=function(e){var n=e.contact,o=q(),r=o.onOpen,t=o.onClose,i=o.isOpen,s=E(null);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(z,{isOpen:i,initialFocusRef:s,onOpen:r,onClose:t,closeOnBlur:!0,border:"none",children:[(0,w.jsx)(D,{children:(0,w.jsx)(B,{w:8,h:8,icon:(0,w.jsx)(L,{}),variant:"ghost",color:"#ffd76d",_hover:{bg:"#ffd76d55"},_focus:{bg:"#ffd76d55"}})}),(0,w.jsx)(T,{children:(0,w.jsx)(F,{bg:"#1a1d2b",borderRadius:"8px",borderColor:"#ffd86d78",children:(0,w.jsxs)(P,{returnFocus:!0,persistentFocus:!1,children:[(0,w.jsx)(O,{}),(0,w.jsx)(N,{onCancel:t,contact:n})]})})})]})})},Y=o(2063),H=o(1022),X=o(4211),G=o(847),J=o(8874),K=o(5473),M=o(634),U=o(6241),W=o(7685),Q=o(8104),ee=function(e){var n=e.onClick,o=e.isDeleting,r=(0,H.q)(),t=r.isOpen,i=r.onOpen,s=r.onClose,d=(0,y.useRef)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(C.z,{type:"button",onClick:i,disabled:o,color:"#ffd76d",variant:"ghost",w:8,h:8,_hover:{bg:"#ff204055"},_focus:{bg:"#ff204055"},children:o?(0,w.jsx)(X.D,{isIndeterminate:!0,color:"#ffd76d",size:"16px"}):(0,w.jsx)(Y.p,{color:"#ff2e4d"})}),(0,w.jsxs)(G.a,{motionPreset:"slideInBottom",leastDestructiveRef:d,onClose:s,isOpen:t,isCentered:!0,children:[(0,w.jsx)(J.Z,{}),(0,w.jsxs)(G._,{w:"320px",bg:"#1a1d2b",boxShadow:"none",borderRadius:"8px",children:[(0,w.jsx)(K.x,{color:"#ffd76d",children:"Deleting contact"}),(0,w.jsx)(M.o,{color:"#ffffff",_hover:{color:"#1a1d2b",bg:"#ffd76d"},_focus:{color:"#1a1d2b",bg:"#ffd76d"}}),(0,w.jsxs)(U.f,{color:"#ffffff",children:[(0,w.jsx)(Q.a,{mr:"8px",color:"#ff2e4d"}),"Are you sure? You can't undo this."]}),(0,w.jsxs)(W.m,{children:[(0,w.jsx)(C.z,{isLoading:o,onClick:n,variant:"outline",color:"#ffd76d",borderColor:"#ffd76d55",_hover:{color:"#1a1d2b",bg:"#ffd76d"},_focus:{color:"#1a1d2b",bg:"#ffd76d"},children:"Yes"}),(0,w.jsx)(C.z,{ref:d,onClick:s,ml:3,variant:"outline",color:"#ffd76d",borderColor:"#ffd76d55",_hover:{color:"#1a1d2b",bg:"#ffd76d"},_focus:{color:"#1a1d2b",bg:"#ffd76d"},children:"No"})]})]})]})]})},ne=function(e){var n=e.replace(/\D+/g,"");return 7===n.length?n.replace(/^(\d{3})(\d{2})(\d{2})/,"$1 $2$3"):8===n.length?n.replace(/^(\d)(\d{3})(\d{2})(\d{2})/,"$1 $2 $3$4"):9===n.length?n.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})/,"$1 $2$3$4"):10===n.length?n.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})/,"($1) $2 $3$4"):11===n.length?n.replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 ($2) $3 $4$5"):12===n.length?n.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 ($2) $3 $4$5"):e},oe=function(e){var n=e.contact,o=(0,y.useState)(!1),r=(0,s.Z)(o,2),i=r[0],a=r[1],l=(0,d.I0)();return(0,w.jsxs)(R.HC,{paddingLeft:"12px",paddingRight:"12px",paddingTop:"4px",paddingBottom:"4px",display:"flex",alignItems:"center",justifyContent:"space-between",color:"#ffffff",bg:"#1a1d2b",borderRadius:"8px",mb:"4px",children:[(0,w.jsxs)(t.xu,{flexBasis:"40%",children:[n.name," "]}),(0,w.jsx)(t.xu,{flexBasis:"40%",children:ne(n.number)}),(0,w.jsxs)(t.xu,{flexBasis:"20%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:{base:"0px",md:"0px"},children:[(0,w.jsx)(V,{contact:n}),(0,w.jsx)(ee,{onClick:function(){l((0,f.GK)(n.id)),a(!0)},isDeleting:i})]})]},n.id)},re=o(884),te=function(){var e=(0,d.I0)(),n=(0,d.v9)(u.Af),o=(0,d.v9)(u.AD),i=(0,d.v9)(u.Y);(0,y.useEffect)((function(){e((0,f.yF)())}),[e]);var s=function(){var e=o.toLowerCase();return n.filter((function(n){return(null===n||void 0===n?void 0:n.name.toLowerCase().includes(e))||(null===n||void 0===n?void 0:n.number.includes(o))}))},a=s().map((function(e){return e.name[0].toUpperCase()})).filter((function(e,n,o){return o.indexOf(e)===n})),l=function(e){return s().filter((function(n){return n.name[0].toUpperCase()===e}))};return(0,w.jsxs)("div",{children:[0===n.length&&i&&(0,w.jsx)(r.M,{children:(0,w.jsx)(X.D,{isIndeterminate:!0,color:"#ffd76d"})}),0===n.length&&!i&&(0,w.jsx)(re.x,{color:"#ffd76d",textAlign:"center",children:"There are no contacts yet. Please add a new contact."}),0===s().length&&0!==n.length&&(0,w.jsx)(re.x,{color:"#ffd76d",textAlign:"center",children:"There is no such contact"}),0!==n.length&&s().length>0&&(0,w.jsx)(t.xu,{position:"relative",children:(0,w.jsx)(R.aV,{position:"relative",children:a.map((function(e){return(0,w.jsx)(R.HC,{children:(0,w.jsx)(R.aV,{children:(0,w.jsx)(t.xu,{children:l(e).map((function(e){return(0,w.jsx)(oe,{contact:e},e.id)}))})})},"section-".concat(e))}))})})]})},ie=o(2276),se=o(6895),de=function(){var e=(0,d.v9)(u.AD),n=(0,d.v9)(u.Af),o=(0,d.I0)();return(0,w.jsx)(w.Fragment,{children:0!==n.length&&(0,w.jsxs)(b.NI,{mb:2,children:[(0,w.jsx)(j.I,{name:"filter",placeholder:"Find contacts by name or phone number",_placeholder:{opacity:.5,color:"#ffd76d"},type:"text",value:e,onChange:function(e){return o((0,se.T)(e.target.value))},pos:"relative",bg:"#1a1d2b",borderColor:"#ffd86d78",borderRadius:"8px",border:"none"}),(0,w.jsx)(ie.W,{pos:"absolute",top:"50%",right:"16px",transform:"translateY(-50%)",zIndex:2,color:"#ffd76d"})]})})},ae=function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(r.M,{children:(0,w.jsxs)(t.xu,{w:"500px",children:[(0,w.jsx)(Z,{}),(0,w.jsxs)(t.xu,{flexGrow:1,children:[(0,w.jsx)(de,{}),(0,w.jsx)(te,{})]})]})})})}}}]);
//# sourceMappingURL=947.a7d2354d.chunk.js.map