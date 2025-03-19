
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('create-task-form').addEventListener('submit', function (event) {
      event.preventDefault(); 
      
      const taskInput = document.getElementById('new-task-description');
      const taskText = taskInput.value.trim(); 
  
      if (taskText === '') return; 
  
      
      const li = document.createElement('li');
      li.textContent = taskText;
      li.classList.add('p-2', 'mt-2');
  
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('p-2', 'btn', 'btn-danger','mx-5');
  
      
      li.appendChild(removeButton);
      document.getElementById('tasks').appendChild(li);
  
      
      removeButton.addEventListener('click', () => li.remove());
  
      
      taskInput.value = '';
    });
  });
