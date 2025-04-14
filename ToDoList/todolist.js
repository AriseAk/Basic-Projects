const form=document.querySelector("form")
const input=document.querySelector("input")
const tasklist=document.querySelector("#task")


form.addEventListener("submit", async function(e){
    e.preventDefault();
    const list=input.value.trim();
    await addlist(list);
    input.value="";
});

async function addlist(list) {
    const li=document.createElement("li");
    li.classList.add("li");
    li.textContent=list;

    const deletelist=document.createElement("button");
    deletelist.classList.add("delete");
    deletelist.textContent="Delete";
    deletelist.addEventListener("click", () => {
        li.remove();
    });

    tasklist.appendChild(li);
    li.appendChild(deletelist);
}