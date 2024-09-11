// import React, { useState, useEffect } from 'react'

// export default function Output({newText}) {
//     const myStorage = localStorage;
//     const [lastStorage, setLastStorage] = useState([]);
//     const [editKey, setEditKey] = useState('null')
//     const [editValue, setEditValue] = useState('')

//     useEffect(() =>{
//       setInterval(function () {
//         setLastStorage(Object.entries(myStorage));
//       }, 1000); 
//     }, []);
//     // console.log(lastStorage);
//     // const remove = (key) => {
//     //   const updated;
//     // }
//     const handleClick = (val) => { 
//       myStorage.removeItem(val) 
//       setLastStorage(Object.entries(myStorage))
//     } 

   
//   return (
//     <div>
//       {
//         lastStorage.sort().map((item, i)=> (
//             <li className='list' key={i}>{item[1]}
//               <button className='btn2' onClick={() => handleClick(item[0])}>Remove</button>
//               <button className='btn3'>Edit</button>
//             </li>
//         ))
//       }
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'

export default function Output({ newText }) {
  const myStorage = localStorage;
  const [lastStorage, setLastStorage] = useState([]);
  const [editKey, setEditKey] = useState(null); // Tracks which key is being edited
  const [editValue, setEditValue] = useState(''); // Stores the edited value

  // Load and update storage every second
  useEffect(() => {
    const interval = setInterval(() => {
      setLastStorage(Object.entries(myStorage));
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [myStorage]);

  // Remove a key from localStorage
  const handleRemove = (key) => {
    myStorage.removeItem(key);
    setLastStorage(Object.entries(myStorage));
  };

  // Start editing a list item
  const handleEdit = (key, value) => {
    setEditKey(key); // Set the key for editing
    setEditValue(value); // Set the current value to input for editing
  };

  // Save the edited value
  const saveEdit = (key) => {
    myStorage.setItem(key, editValue); // Update localStorage with new value
    setLastStorage(Object.entries(myStorage)); // Update the state with the new storage
    setEditKey(null); // Exit edit mode
    setEditValue(''); // Clear the input
  };

  return (
    <div >
      {lastStorage.sort().map((item, i) => (
        <li className='list' key={i}>
          {/* If the current item is being edited, show an input field */}
          {editKey === item[0] ? (
            <input
              type='text'
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            item[1] // Otherwise, show the item value
          )}
          <div className='btns'>
              {/* Render Save button if in edit mode, otherwise show Edit */}
          {editKey === item[0] ? (
            <button className='btn2' onClick={() => saveEdit(item[0])}>
              Save
            </button>
          ) : (
            <button className='btn2' onClick={() => handleEdit(item[0], item[1])}>
              Edit
            </button>
          )}

          <button className='btn3' onClick={() => handleRemove(item[0])}>
            Remove
          </button>
          </div>
          
        </li>
      ))}
    </div>
  );
}
