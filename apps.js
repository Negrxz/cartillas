
const D={negocio:CONFIG.negocio,wa:CONFIG.whatsapp,products:PRODUCTOS};
let P=D.products, ADMIN=false, marca="Todos", editId=null, foto="";
const NEG=D.negocio, WA=D.wa, $=i=>document.getElementById(i), cart={};
const fmt=n=>"$"+Number(n).toLocaleString("es-AR");
const esc=t=>String(t==null?"":t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
$("root").innerHTML=`<header><h1>${esc(NEG)} · Catálogo</h1><p>Elige tus productos y envía tu pedido directo a WhatsApp.</p></header>
<div class="adm" id="adm" hidden><button class="add" id="newp">+ Agregar producto</button> <button class="add" id="dl">Descargar productos.js</button></div>
<div class="tabs" id="tabs"></div><div class="grid" id="grid"></div><div id="list"></div>
<div class="bar"><div class="in"><div class="sum"><span id="count">0 productos</span><br>Total: <b id="total">$0</b></div><button class="wa" id="send" disabled>Enviar pedido por WhatsApp</button></div></div>
<div id="modal" hidden><div class="box"><h2 id="mt">Agregar producto</h2>
<label>Marca / cartilla<input id="f_marca" list="dl" placeholder="Millanel, Amodil..."><datalist id="dl"></datalist></label>
<label>Nombre<input id="f_nombre"></label><label>Código (opcional)<input id="f_cod"></label>
<label>Descripción<textarea id="f_desc" rows="3"></textarea></label>
<label>Precio (solo números)<input id="f_precio" type="number" inputmode="numeric" min="0"></label>
<label>Foto<input id="f_foto" type="file" accept="image/*"></label><img id="prev" hidden alt="">
<div id="msg"></div><div class="mini"><button id="cancel">Cancelar</button><button id="save" style="background:#1f8a5b;color:#fff;border:0">Guardar</button></div></div></div>`;
function tabs(){const m=["Todos",...new Set(P.map(p=>p.marca))];if(!m.includes(marca))marca="Todos";
 $("tabs").innerHTML="";m.forEach(x=>{const b=document.createElement("button");b.textContent=x;if(x===marca)b.className="on";b.onclick=()=>{marca=x;tabs();grid()};$("tabs").appendChild(b)});
 $("dl").innerHTML=m.slice(1).map(x=>`<option value="${esc(x)}">`).join("")}
function grid(){const g=$("grid");g.innerHTML="";
 P.forEach(p=>{if(marca!=="Todos"&&p.marca!==marca)return;const q=cart[p.id]||0,c=document.createElement("div");c.className="card";
  c.innerHTML=`<div class="brand">${esc(p.marca)}</div>${p.img?`<img src="${p.img}" alt="${esc(p.nombre)}" loading="lazy">`:""}<h3>${esc(p.nombre)}</h3><p>${esc(p.desc)}</p>${p.cod?`<div class="cod">Cód. ${esc(p.cod)}</div>`:""}<div class="price">${fmt(p.precio)}</div>`+
  (q?`<div class="qty"><button data-i="${p.id}" data-d="-1">−</button><b>${q}</b><button data-i="${p.id}" data-d="1">+</button></div>`:`<button class="add" data-i="${p.id}" data-d="1">Agregar al pedido</button>`)+
  (ADMIN?`<div class="mini"><button data-act="edit" data-i="${p.id}">Editar</button><button class="red" data-act="del" data-i="${p.id}">Eliminar</button></div>`:"");
  g.appendChild(c)})}
function resumen(){let n=0,t=0,h="";P.forEach(p=>{const q=cart[p.id];if(q){n+=q;t+=q*p.precio;h+=`<div><span>${q} × ${esc(p.nombre)}</span><span>${fmt(q*p.precio)}</span></div>`}});
 $("list").innerHTML=h;$("count").textContent=n+(n===1?" producto":" productos");$("total").textContent=fmt(t);$("send").disabled=!n}
let delArm=null;
$("grid").onclick=e=>{const b=e.target.closest("button[data-i]");if(!b)return;const id=b.dataset.i,a=b.dataset.act;
 if(a==="edit"){openForm(P.find(p=>p.id===id));return}
 if(a==="del"){if(delArm!==id){delArm=id;b.textContent="¿Seguro?";return}delArm=null;save(P.filter(p=>p.id!==id),null);return}
 cart[id]=Math.max(0,(cart[id]||0)+ +b.dataset.d);if(!cart[id])delete cart[id];grid();resumen()};
$("send").onclick=()=>{let t=0,m="Hola, quiero hacer este pedido:\n\n";P.forEach(p=>{const q=cart[p.id];if(q){t+=q*p.precio;m+=`• ${q} × ${p.nombre}${p.cod?" (Cód. "+p.cod+")":""} — ${fmt(q*p.precio)}\n`}});
 m+=`\n*Total: ${fmt(t)}*`;window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank")};
function openForm(p){editId=p?p.id:null;foto=p?p.img||"":"";$("mt").textContent=p?"Editar producto":"Agregar producto";
 $("f_marca").value=p?p.marca:(marca!=="Todos"?marca:"");$("f_nombre").value=p?p.nombre:"";$("f_cod").value=p?p.cod||"":"";$("f_desc").value=p?p.desc:"";$("f_precio").value=p?p.precio:"";$("f_foto").value="";
 $("prev").hidden=!foto;if(foto)$("prev").src=foto;$("msg").textContent="";$("modal").hidden=false}
$("newp").onclick=()=>openForm(null);$("cancel").onclick=()=>{$("modal").hidden=true};
$("f_foto").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,360/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;
 const x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);foto=c.toDataURL("image/jpeg",.72);$("prev").src=foto;$("prev").hidden=false};im.src=r.result};r.readAsDataURL(f)};
$("save").onclick=()=>{const n=$("f_nombre").value.trim(),pr=parseInt($("f_precio").value,10),mk=$("f_marca").value.trim();
 if(!n||!mk||!(pr>=0)){$("msg").textContent="Completá marca, nombre y precio.";return}
 const it={id:editId||"p"+Date.now(),marca:mk,cod:$("f_cod").value.trim(),nombre:n,desc:$("f_desc").value.trim(),precio:pr,img:foto};
 save(editId?P.map(p=>p.id===editId?it:p):[...P,it],it)};
function save(list,it){P=list;localStorage.setItem("cat_admin",JSON.stringify(list));$("modal").hidden=true;tabs();grid();resumen()}
$("dl").onclick=()=>{const t="const PRODUCTOS = "+JSON.stringify(P,null,1)+";\n";const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([t],{type:"text/javascript"}));a.download="productos.js";a.click()};
tabs();grid();resumen();
if(new URLSearchParams(location.search).has("admin")){
  const pw=prompt("Contraseña de administrador");
  if(pw===CONFIG.adminPass){ADMIN=true;$("adm").hidden=false;const s=localStorage.getItem("cat_admin");if(s)P=JSON.parse(s);tabs();grid();resumen()}
}
