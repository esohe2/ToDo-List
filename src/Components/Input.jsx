import React, {useState} from 'react'

export default function Input() {
    const [text, setText] = useState("")
    const myStorage = localStorage;
    const handleSave = () => {
        if (text?.length){
            myStorage.setItem(myStorage.length + 1, text)
        }
        setText("")
    }
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button className='btn1' onClick={handleSave}>Add</button>
    </div>
  )
}
