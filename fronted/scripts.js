// from pathlib import Path
// js=r"""
const chatBox=document.getElementById("chatBox");
const sendBtn=document.getElementById("send");
const question=document.getElementById("question");
const fileInput=document.getElementById("fileInput");
const urlInput=document.getElementById("url");
const urlBtn=document.getElementById("urlBtn");
const files=document.getElementById("files");
const clearBtn=document.getElementById("clearBtn");

const API="http://127.0.0.1:8000";

function addMessage(text,type="ai"){
 const div=document.createElement("div");
 div.className=`message ${type}`;
 div.textContent=text;
 chatBox.appendChild(div);
 chatBox.scrollTop=chatBox.scrollHeight;
}

async function askQuestion(){
 const q=question.value.trim();
 if(!q)return;
 addMessage(q,"user");
 question.value="";
 try{
   const res=await fetch(`${API}/chat`,{
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify({question:q})
   });
   const data=await res.json();
   addMessage(data.answer||"No response");
 }catch(e){addMessage("Backend connection failed.");}
}

sendBtn?.addEventListener("click",askQuestion);
question?.addEventListener("keydown",e=>{
 if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();askQuestion();}
});

fileInput?.addEventListener("change",async()=>{
 const file=fileInput.files[0];
 if(!file)return;
 const fd=new FormData();
 fd.append("file",file);
 try{
   const res=await fetch(`${API}/upload`,{method:"POST",body:fd});
   const data=await res.json();
   const item=document.createElement("div");
   item.className="file-item";
   item.textContent=file.name;
   files.appendChild(item);
   addMessage(data.message||"Document uploaded.");
 }catch(e){addMessage("Upload failed.");}
});

urlBtn?.addEventListener("click",async()=>{
 const url=urlInput.value.trim();
 if(!url)return;
 try{
   const res=await fetch(`${API}/upload-url`,{
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify({url})
   });
   const data=await res.json();
   const item=document.createElement("div");
   item.className="file-item";
   item.textContent=url;
   files.appendChild(item);
   addMessage(data.message||"Website indexed.");
   urlInput.value="";
 }catch(e){addMessage("Website upload failed.");}
});

clearBtn?.addEventListener("click",async()=>{
 chatBox.innerHTML="";
 try{await fetch(`${API}/clear-db`,{method:"DELETE"});}catch(e){}
 addMessage("Chat cleared.");
});
// """
path="/mnt/data/script.js"
Path(path).write_text(js,encoding="utf-8")
print(path)
