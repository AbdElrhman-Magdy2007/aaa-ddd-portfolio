(()=>{var e={};e.id=8700,e.ids=[8700],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27974:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>h,routeModule:()=>c,serverHooks:()=>l,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>x});var s={};r.r(s),r.d(s,{GET:()=>p});var o=r(96559),i=r(48088),a=r(37719),u=r(32190),n=r(15912);async function p(e){try{return await (0,n.getToken)({req:e}),u.NextResponse.json({status:"success",message:"Auth configuration is valid",hasSecret:!0,secretLength:64,nextAuthUrl:"http://localhost:3000/",timestamp:new Date().toISOString()})}catch(e){return u.NextResponse.json({status:"error",message:e instanceof Error?e.message:"Unknown error",timestamp:new Date().toISOString()},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/verify-auth/route",pathname:"/api/verify-auth",filename:"route",bundlePath:"app/api/verify-auth/route"},resolvedPagePath:"C:\\Users\\raya\\ShoppingCart\\portfolio - Copy - Copy - Copy - Copy - Copy - Copy (2)\\src\\app\\api\\verify-auth\\route.ts",nextConfigOutput:"standalone",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:x,serverHooks:l}=c;function h(){return(0,a.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:x})}},28354:e=>{"use strict";e.exports=require("util")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79428:e=>{"use strict";e.exports=require("buffer")},81630:e=>{"use strict";e.exports=require("http")},94735:e=>{"use strict";e.exports=require("events")},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[4243,5912,580],()=>r(27974));module.exports=s})();