"use strict";var e=require("../../../../common/vendor.js");const o={data:()=>({shelfid:"",data:{}}),components:{ShelfHead:()=>"./shelf/components/shelfHead.js"},onLoad(e){if(e.q){console.log("外部扫码模式");const o=decodeURIComponent(e.q);parseInt(e.scancode_time),o&&(this.shelfid=o.split("shelf/")[1])}else{console.log("内部扫码模式");const t=e.detailDate||e.payload;try{this.data=JSON.parse(decodeURIComponent(t)),this.shelfid=this.data.shelfid}catch(o){}}this.$refs.myhead.getInfo(this.shelfid)},methods:{openAddUrl(){let o={shelfid:this.shelfid,ftype:"add"};e.index.navigateTo({url:"./shelf/addstock?detailDate="+encodeURIComponent(JSON.stringify(o))})},openSubUrl(){let o={shelfid:this.shelfid,ftype:"sub"};e.index.navigateTo({url:"./shelf/outstock?detailDate="+encodeURIComponent(JSON.stringify(o))})}}};if(!Array){e.resolveComponent("ShelfHead")()}var t=e._export_sfc(o,[["render",function(o,t,s,d,n,l){return{a:e.sr("myhead","8403c484-0"),b:e.p({shelfid:n.shelfid}),c:e.o(((...e)=>l.openAddUrl&&l.openAddUrl(...e))),d:e.o(((...e)=>l.openSubUrl&&l.openSubUrl(...e)))}}]]);wx.createPage(t);