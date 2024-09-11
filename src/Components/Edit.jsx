// import React, { useState, useEffect } from 'react';

// const TodoList = () => {
//   const [lists, setLists] = useState(() => {
//     const savedLists = localStorage.getItem('todoLists');
//     return savedLists ? JSON.parse(savedLists) : [];
//   });

//   const [editId, setEditId] = useState(null); // Track the ID of the list being edited
//   const [editName, setEditName] = useState(''); // Track the new name being edited

//   useEffect(() => {
//     localStorage.setItem('todoLists', JSON.stringify(lists));
//   }, [lists]);

//   // Function to handle editing a list's name
//   const handleEdit = (id, name) => {
//     setEditId(id); // Set the id of the item being edited
//     setEditName(name); // Set the current name to the input field
//   };

//   // Function to save the edited name
//   const saveEdit = (id) => {
//     const updatedLists = lists.map((list) => 
//       list.id === id ? { ...list, name: editName } : list
//     );
//     setLists(updatedLists);
//     setEditId(null); // Exit edit mode
//     localStorage.setItem('todoLists', JSON.stringify(updatedLists));
//   };

  return (
    <div>
      {lists.map((list) => (
        <div key={list.id}>
          {editId === list.id ? (
            // Show input for editing
            <input 
              type="text" 
              value={editName} 
              onChange={(e) => setEditName(e.target.value)} 
            />
          ) : (
            Display the list name
            <h3>{list.name}</h3>
          )}

          {editId === list.id ? (
            // Show Save button when in edit mode
            <button onClick={() => saveEdit(list.id)}>Save</button>
          ) : (
            // Show Edit button when not in edit mode
            <button onClick={() => handleEdit(list.id, list.name)}>Edit</button>
          )}

//           {/* Remove button stays the same */}
//           <button className='btn2' onClick={() => removeList(list.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// // export default TodoList;
