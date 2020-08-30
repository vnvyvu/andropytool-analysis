document.getElementById('u-file').addEventListener('change', ()=>{
    let reader=new FileReader();
    reader.onload=function(e){
        document.getElementById("analysis").value=e.target.result;
    };
    reader.readAsText(document.getElementById('u-file').files[0]);
    document.getElementById('u-file').value='';
});
function textJSON(){
    document.getElementById("opcode").innerHTML='';
    document.getElementById("apicall").innerHTML='';
    document.getElementById("string").innerHTML='';
    let obj=JSON.parse(document.getElementById("analysis").value), 
    opcodeArr=Object.entries(obj["Static_analysis"]["Opcodes"]), 
    apiArr=Object.entries(obj["Static_analysis"]["API calls"]);
    stringArr=Object.entries(obj["Static_analysis"]["Strings"]);
    
    addLI("opcode", "Opcode xuất hiện nhiều nhất: "+maxTime(opcodeArr));
    addLI("opcode", "Opcode xuất hiện ít nhất: "+minTime(opcodeArr));
    addLI("opcode", "Tổng số opcode quan sát được: "+opcodeArr.length);
    addLI("apicall", "API call được gọi nhiều nhất: "+maxTime(apiArr));
    addLI("apicall", "API call được gọi ít nhất: "+minTime(apiArr));
    addLI("apicall", "Tổng số api quan sát được: "+apiArr.length);
    let temp=longest(stringArr).replace(/\\/g,'\\\\');
    addLI("string", `Chuỗi dài nhất: (${temp.length} ký tự) ${temp}`);

}
function addLI(id, text){
    let node=document.createElement("li"), content=document.createTextNode(text);
    node.appendChild(content);
    document.getElementById(id).appendChild(node);
}
function maxTime(arr){
    let clone=JSON.parse(JSON.stringify(arr));
    return myJoin(clone.reduce((p, c)=>p[1]?(p[1]>c[1]?p:p[1]<c[1]?c:[...p,...c]):c, [])).join(` `);
}
function minTime(arr){
    let clone=JSON.parse(JSON.stringify(arr));
    return myJoin(clone.reduce((p, c)=>p[1]?(p[1]>c[1]?c:p[1]<c[1]?p:[...p,...c]):c, [])).join(` `);
}
function longest(arr){
    let clone=JSON.parse(JSON.stringify(arr));
    return clone.map((v)=>v[0]).reduce((p,c)=>p?(p.length>c.length?p:c):c,"");
}
function myJoin(arr){
    let i, res=[`(${arr[1]} lần)`];
    for(i=0;i<arr.length-1;i+=2){
        res=[...res, `${arr[i]}`];
    }
    return res;
}