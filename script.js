const a=['dS1maWxl','cmVkdWNl','IGzhuqduKQ==','am9pbg==','YXBpY2FsbA==','U3RyaW5ncw==','cmVzdWx0','cmVwbGFjZQ==','bGVuZ3Ro','c3RyaW5n','cmVhZEFzVGV4dA==','ZW50cmllcw==','Y2hhbmdl','Y3JlYXRlVGV4dE5vZGU=','VOG7lW5nIHPhu5EgYXBpIHF1YW4gc8OhdCDEkcaw4bujYzog','aW5uZXJIVE1M','YW5hbHlzaXM=','T3Bjb2Rlcw==','dmFsdWU=','Y3JlYXRlRWxlbWVudA==','Z2V0RWxlbWVudEJ5SWQ=','U3RhdGljX2FuYWx5c2lz','dGFyZ2V0','b3Bjb2Rl','cGFyc2U=','YWRkRXZlbnRMaXN0ZW5lcg==','QVBJIGNhbGwgxJHGsOG7o2MgZ+G7jWkgbmhp4buBdSBuaOG6pXQ6IA==','YXBwZW5kQ2hpbGQ=','QVBJIGNhbGxz','c3RyaW5naWZ5','ZmlsZXM=','Q2h14buXaSBkw6BpIG5o4bqldDog'];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x153));const b=function(c,d){c=c-0x0;let e=a[c];if(b['qDjUSI']===undefined){(function(){const g=function(){let j;try{j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(k){j=window;}return j;};const h=g();const i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(j){const k=String(j)['replace'](/=+$/,'');let l='';for(let m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=i['indexOf'](o);}return l;});}());b['qWpaTy']=function(g){const h=atob(g);let j=[];for(let k=0x0,l=h['length'];k<l;k++){j+='%'+('00'+h['charCodeAt'](k)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};b['QjBdQA']={};b['qDjUSI']=!![];}const f=b['QjBdQA'][c];if(f===undefined){e=b['qWpaTy'](e);b['QjBdQA'][c]=e;}else{e=f;}return e;};document[b('0x1')]('u-file')[b('0x6')](b('0x19'),()=>{let c=new FileReader();c['onload']=function(d){document[b('0x1')](b('0x1d'))['value']=d[b('0x3')][b('0x13')];};c[b('0x17')](document[b('0x1')]('u-file')[b('0xb')][0x0]);document['getElementById'](b('0xd'))[b('0x1f')]='';});function textJSON(){document['getElementById'](b('0x4'))[b('0x1c')]='';document[b('0x1')](b('0x11'))[b('0x1c')]='';document[b('0x1')](b('0x16'))[b('0x1c')]='';let c=JSON[b('0x5')](document['getElementById'](b('0x1d'))[b('0x1f')]),d=Object[b('0x18')](c[b('0x2')][b('0x1e')]),e=Object[b('0x18')](c[b('0x2')][b('0x9')]);stringArr=Object[b('0x18')](c[b('0x2')][b('0x12')]);addLI(b('0x4'),'Opcode\x20xuất\x20hiện\x20nhiều\x20nhất:\x20'+maxTime(d));addLI(b('0x4'),'Opcode\x20xuất\x20hiện\x20ít\x20nhất:\x20'+minTime(d));addLI(b('0x4'),'Tổng\x20số\x20opcode\x20quan\x20sát\x20được:\x20'+d[b('0x15')]);addLI('apicall',b('0x7')+maxTime(e));addLI(b('0x11'),'API\x20call\x20được\x20gọi\x20ít\x20nhất:\x20'+minTime(e));addLI('apicall',b('0x1b')+e[b('0x15')]);addLI('string',b('0xc')+longest(stringArr)[b('0x14')](/\\/g,'\x5c\x5c'));}function addLI(c,d){let e=document[b('0x0')]('li'),f=document[b('0x1a')](d);e['appendChild'](f);document[b('0x1')](c)[b('0x8')](e);}function maxTime(c){let d=JSON[b('0x5')](JSON[b('0xa')](c));return myJoin(d[b('0xe')]((e,f)=>e[0x1]?e[0x1]>f[0x1]?e:e[0x1]<f[0x1]?f:[...e,...f]:f,[]))[b('0x10')]('\x20');}function minTime(c){let d=JSON[b('0x5')](JSON['stringify'](c));return myJoin(d[b('0xe')]((e,f)=>e[0x1]?e[0x1]>f[0x1]?f:e[0x1]<f[0x1]?e:[...e,...f]:f,[]))[b('0x10')]('\x20');}function longest(c){let d=JSON[b('0x5')](JSON['stringify'](c));return d['map'](e=>e[0x0])[b('0xe')]((e,f)=>e?e['length']>f['length']?e:f:f,'');}function myJoin(c){let d,e=['('+c[0x1]+b('0xf')];for(d=0x0;d<c[b('0x15')]-0x1;d+=0x2){e=[...e,''+c[d]];}return e;}