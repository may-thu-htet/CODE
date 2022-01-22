let input = prompt('What would you like to do?');
const Todos = ['collect chicken eggs', 'clean litter box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***************')
        for (i = 0; i < Todos.length; i++) {
            console.log(`${i} : ${Todos[i]}`);
        }
        console.log('***************')
    } else if (input === 'new') {
        const newTodo = prompt('OK, what is your new todo?');
        Todos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK, enter an index number to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = Todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?')
}
console.log('OK, you quit the app')



