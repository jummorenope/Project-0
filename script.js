const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



count=0
check=0
function newTodo() 
{
  const resp = window.prompt("Add TODO")
  if(resp!==null & resp!==""){
    document.getElementById('todo-list').innerHTML+="<li>"+resp+"<span class=\"close\">&times;</span></li>"
    count+=1
    document.getElementById('item-count').innerHTML=count
    document.getElementById('unchecked-count').innerHTML=count
  }

  var closebtns = document.getElementsByClassName("close")
  for (var i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none'
      check+=1
      document.getElementById('unchecked-count').innerHTML=count-check
    })
  }
}

