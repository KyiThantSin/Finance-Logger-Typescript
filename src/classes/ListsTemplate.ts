import { HasFormatter } from "../interfaces/HasFormatter";

export class ListsTemplate{
   constructor(private container:HTMLUListElement) {} 
   //item = invoice or payment 
   render(item:HasFormatter, heading:string, pos: 'start' | 'end'){
      const box = document.createElement('div')
      const li = document.createElement('li')
      const h4 = document.createElement('h4')
      const button = document.createElement('button')
      button.innerText = 'Delete'

      h4.innerHTML = heading
      li.append(h4)
      
      const p = document.createElement('p')
      p.innerText = item.format()
      box.append(p)

      if(pos === 'start'){
        this.container.prepend(li)
      }else{
        this.container.append(li)
      }
      box.append(button)

      button.addEventListener('click',()=>{
        li.remove()
      })
      li.append(box)
      //style 
      box.style.display = 'flex';
      box.style.justifyContent = 'space-between'
   }
}