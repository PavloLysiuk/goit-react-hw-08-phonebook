"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[947],{8947:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var r=t(6484),o=t(824),i=t(1413),s=t(9439),a=t(9434),d=t(1134),l=t(4695),c=t(8007),u=t(6052),f=t(6351),x=t(89),h=t(9589),p=t(9657),m=t(1692),b=t(7943),g=t(9381),j=t(6336),v=t(2437),C=t(7653),y=t(2791),I=t(8382),w=t(2233),$=t(184),Z=c.Ry({name:c.Z_().required("Name is required").min(3,"Name must be no less than 3 characters long").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces"),number:c.Z_().required("Number is required").transform((function(e){return e.replace(/\D+/g,"")})).min(7,"Number phone must be no less than 7 characters long").max(12,"Number phone must be no more than 12 digits")}).required(),_=function(){var e=(0,y.useState)(!1),n=(0,s.Z)(e,2),t=n[0],r=n[1],o=(0,a.I0)(),c=(0,a.v9)(f.Af),_=(0,a.v9)(f.Y),R=(0,I.p)();(0,y.useEffect)((function(){_||r(!1)}),[_]);var k=(0,d.cI)({mode:"onTouched",resolver:(0,l.X)(Z)}),S=k.register,z=k.handleSubmit,N=k.reset,A=k.formState.errors;return(0,$.jsxs)(x.g,{onSubmit:z((function(e){var n=e.name,t=e.number;return r(!0),c.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?R({title:"".concat(n," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):c.find((function(e){return e.number===t}))?R({title:"Number: ".concat(t," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):(o((0,u.uK)({name:n,number:t})).unwrap().then((function(){R({title:"Contact has been added",isClosable:!0,position:"top-right",status:"success",duration:3e3})})).catch((function(){return R({title:"Something went wrong. Please try again later",isClosable:!0,position:"top-right",status:"error",duration:3e3})})),void N())})),as:"form",mx:"auto",justifyContent:"center",mb:6,maxH:"fit",p:4,bg:"#1a1d2b",borderRadius:"8px",children:[(0,$.jsx)(h.X,{color:" #ffd765",children:"Add new contact"}),(0,$.jsxs)(p.NI,{isInvalid:A.name,isRequired:!0,children:[(0,$.jsxs)(m.B,{children:[(0,$.jsx)(b.Z,{pointerEvents:"none",children:(0,$.jsx)(g.q,{bg:"#ffd76d",size:"xs"})}),(0,$.jsx)(j.I,(0,i.Z)((0,i.Z)({type:"text",placeholder:"Enter contact name",_placeholder:{opacity:.5,color:"#ffd76d"}},S("name")),{},{bg:"#161821"}))]}),(0,$.jsx)(v.J1,{children:A.name&&A.name.message})]}),(0,$.jsxs)(p.NI,{isInvalid:A.number,isRequired:!0,children:[(0,$.jsxs)(m.B,{children:[(0,$.jsx)(b.Z,{pointerEvents:"none",children:(0,$.jsx)(w.q,{color:"#ffd76d"})}),(0,$.jsx)(j.I,(0,i.Z)((0,i.Z)({type:"tel",placeholder:"Enter phone number",_placeholder:{opacity:.5,color:"#ffd76d"}},S("number")),{},{bg:"#161821"}))]}),(0,$.jsx)(v.J1,{children:A.number&&A.number.message})]}),(0,$.jsx)(C.z,{type:"submit",variant:"outline",color:"#ffd76d",isLoading:_&&t,mt:"2px",children:"Add contact"})]})},R=t(6661),k=t(930),S=t(3771),z=function(e){var n=e.onCancel,t=e.contact,r=(0,d.cI)({mode:"onTouched",resolver:(0,l.X)(Z)}),o=r.register,s=r.handleSubmit,c=r.formState,h=c.errors,m=c.isSubmitting,b=c.isValid,g=(0,a.v9)(f.Af),v=(0,I.p)(),y=(0,a.I0)();return(0,$.jsxs)(x.g,{as:"form",onSubmit:s((function(e){var r=e.name,o=e.number;return t.name===r&&t.number===o?n():g.find((function(e){return e.name.toLowerCase()===r.toLowerCase()&&e.name.toLowerCase()!==t.name.toLowerCase()}))?v({title:"".concat(r," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):g.find((function(e){return e.number===o&&e.number!==t.number}))?v({title:"".concat(o," is already in contacts"),isClosable:!0,position:"top-right",status:"info",duration:3e3}):void y((0,u.Tk)({id:t.id,body:{name:r,number:o}})).unwrap().then((function(){v({title:"Contact updated",isClosable:!0,position:"top-right",status:"success",duration:3e3}),n()})).catch((function(){return v({title:"Something went wrong. Please try again later",isClosable:!0,position:"top-right",status:"error",duration:3e3})}))})),p:4,children:[(0,$.jsxs)(p.NI,{isInvalid:h.name,isRequired:!0,children:[(0,$.jsx)(k.l,{children:"Name"}),(0,$.jsx)(j.I,(0,i.Z)((0,i.Z)({type:"text"},o("name")),{},{defaultValue:null===t||void 0===t?void 0:t.name,bg:"#161821"}))]}),(0,$.jsxs)(p.NI,{isInvalid:h.number,isRequired:!0,children:[(0,$.jsx)(k.l,{children:"Phone"}),(0,$.jsx)(j.I,(0,i.Z)((0,i.Z)({type:"tel"},o("number")),{},{defaultValue:null===t||void 0===t?void 0:t.number,bg:"#161821"}))]}),(0,$.jsxs)(S.h,{display:"flex",justifyContent:"flex-end",mt:"8px",children:[(0,$.jsx)(C.z,{isLoading:m,type:"submit",isDisabled:!b,color:"#ffd76d",children:"Save"}),(0,$.jsx)(C.z,{onClick:n,variant:"outline",color:"#ffd76d",children:"Cancel"})]})]})},N=t(5548).EditIcon,A=t(2144),L=A.useDisclosure,q=A.Popover,D=A.PopoverTrigger,B=A.IconButton,F=A.PopoverContent,P=A.FocusLock,O=A.PopoverCloseButton,T=A.Portal,E=t(2791).useRef,V=function(e){var n=e.contact,t=L(),r=t.onOpen,o=t.onClose,i=t.isOpen,s=E(null);return(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(q,{isOpen:i,initialFocusRef:s,onOpen:r,onClose:o,closeOnBlur:!0,border:"none",children:[(0,$.jsx)(D,{children:(0,$.jsx)(B,{w:8,h:8,icon:(0,$.jsx)(N,{}),variant:"ghost",color:"#ffd76d",_hover:{bg:"#ffd76d55"},_focus:{bg:"#ffd76d55"}})}),(0,$.jsx)(T,{children:(0,$.jsx)(F,{bg:"#1a1d2b",borderRadius:"8px",borderColor:"#ffd86d78",children:(0,$.jsxs)(P,{returnFocus:!0,persistentFocus:!1,children:[(0,$.jsx)(O,{}),(0,$.jsx)(z,{onCancel:o,contact:n})]})})})]})})},Y=t(2063),H=t(1022),X=t(4211),G=t(847),J=t(8874),K=t(5473),M=t(634),U=t(6241),W=t(7685),Q=t(8104),ee=function(e){var n=e.onClick,t=e.isDeleting,r=(0,H.q)(),o=r.isOpen,i=r.onOpen,s=r.onClose,a=(0,y.useRef)();return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(C.z,{type:"button",onClick:i,disabled:t,color:"#ffd76d",variant:"ghost",w:8,h:8,_hover:{bg:"#ff204055"},_focus:{bg:"#ff204055"},children:t?(0,$.jsx)(X.D,{isIndeterminate:!0,color:"#ffd76d",size:"16px"}):(0,$.jsx)(Y.p,{color:"#ff2e4d"})}),(0,$.jsxs)(G.a,{motionPreset:"slideInBottom",leastDestructiveRef:a,onClose:s,isOpen:o,isCentered:!0,children:[(0,$.jsx)(J.Z,{}),(0,$.jsxs)(G._,{w:"320px",bg:"#1a1d2b",boxShadow:"none",borderRadius:"8px",children:[(0,$.jsx)(K.x,{color:"#ffd76d",children:"Deleting contact"}),(0,$.jsx)(M.o,{}),(0,$.jsxs)(U.f,{children:[(0,$.jsx)(Q.a,{mr:"8px",color:"#ff2e4d"}),"Are you sure? You can't undo this."]}),(0,$.jsxs)(W.m,{children:[(0,$.jsx)(C.z,{isLoading:t,onClick:n,color:"#ffd76d",children:"Yes"}),(0,$.jsx)(C.z,{ref:a,onClick:s,ml:3,color:"#ffd76d",children:"No"})]})]})]})]})},ne=function(e){var n=e.replace(/\D+/g,"");return 7===n.length?n.replace(/^(\d{3})(\d{2})(\d{2})/,"$1 $2$3"):8===n.length?n.replace(/^(\d)(\d{3})(\d{2})(\d{2})/,"$1 $2 $3$4"):9===n.length?n.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})/,"$1 $2$3$4"):10===n.length?n.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})/,"($1) $2 $3$4"):11===n.length?n.replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 ($2) $3 $4$5"):12===n.length?n.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,"+$1 ($2) $3 $4$5"):e},te=function(e){var n=e.contact,t=(0,y.useState)(!1),r=(0,s.Z)(t,2),i=r[0],d=r[1],l=(0,a.I0)();return(0,$.jsxs)(R.HC,{paddingLeft:{base:"12px",md:"24px",lg:"24px"},paddingRight:{base:"12px",md:"12px"},paddingTop:1,paddingBottom:1,display:"flex",alignItems:"center",justifyContent:"space-between",bg:"#1a1d2b",borderRadius:"8px",mb:"4px",children:[(0,$.jsxs)(o.xu,{flexBasis:"40%",children:[n.name," "]}),(0,$.jsx)(o.xu,{flexBasis:"40%",children:ne(n.number)}),(0,$.jsxs)(o.xu,{flexBasis:"20%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:{base:"0px",md:"0px"},children:[(0,$.jsx)(V,{contact:n}),(0,$.jsx)(ee,{onClick:function(){l((0,u.GK)(n.id)),d(!0)},isDeleting:i})]})]},n.id)},re=t(884),oe=function(){var e=(0,a.I0)(),n=(0,a.v9)(f.Af),t=(0,a.v9)(f.AD),i=(0,a.v9)(f.Y);(0,y.useEffect)((function(){e((0,u.yF)())}),[e]);var s=function(){var e=t.toLowerCase();return n.filter((function(n){return(null===n||void 0===n?void 0:n.name.toLowerCase().includes(e))||(null===n||void 0===n?void 0:n.number.includes(t))}))},d=s().map((function(e){return e.name[0].toUpperCase()})).filter((function(e,n,t){return t.indexOf(e)===n})),l=function(e){return s().filter((function(n){return n.name[0].toUpperCase()===e}))};return(0,$.jsxs)("div",{children:[0===n.length&&i&&(0,$.jsx)(r.M,{children:(0,$.jsx)(X.D,{isIndeterminate:!0,color:"#ffd76d"})}),0===n.length&&!i&&(0,$.jsx)(re.x,{textAlign:"center",fontSize:"2xl",children:"There are no contacts yet. Please add a new contact."}),0===s().length&&0!==n.length&&(0,$.jsx)(re.x,{children:"There is no such contact"}),0!==n.length&&s().length>0&&(0,$.jsx)(o.xu,{position:"relative",children:(0,$.jsx)(R.aV,{position:"relative",children:d.map((function(e){return(0,$.jsx)(R.HC,{children:(0,$.jsxs)(R.aV,{children:[(0,$.jsx)(h.X,{position:"sticky",top:"15px",color:"#ffd76d",bg:"#161821",p:"8px",borderRadius:"4px",fontSize:24,lineHeight:1,children:e}),(0,$.jsx)(o.xu,{children:l(e).map((function(e){return(0,$.jsx)(te,{contact:e},e.id)}))})]})},"section-".concat(e))}))})})]})},ie=t(2276),se=t(6895),ae=function(){var e=(0,a.v9)(f.AD),n=(0,a.v9)(f.Af),t=(0,a.I0)();return(0,$.jsx)($.Fragment,{children:0!==n.length&&(0,$.jsxs)(p.NI,{mb:2,children:[(0,$.jsx)(j.I,{name:"filter",placeholder:"Find contacts by name or phone number",_placeholder:{opacity:.5,color:"#ffd76d"},type:"text",value:e,onChange:function(e){return t((0,se.T)(e.target.value))},pos:"relative",bg:"#1a1d2b",borderColor:"#ffd86d78",borderRadius:"8px",border:"none"}),(0,$.jsx)(ie.W,{pos:"absolute",top:"50%",right:"16px",transform:"translateY(-50%)",zIndex:2,color:"#ffd76d"})]})})},de=function(){return(0,$.jsx)($.Fragment,{children:(0,$.jsx)(r.M,{children:(0,$.jsxs)(o.xu,{w:"500px",children:[(0,$.jsx)(_,{}),(0,$.jsxs)(o.xu,{flexGrow:1,children:[(0,$.jsx)(ae,{}),(0,$.jsx)(oe,{})]})]})})})}}}]);
//# sourceMappingURL=947.47def6ba.chunk.js.map