export const displayTodo = (todo, checked) => `<li class="todo-added">
                    <div>
                    <input ${checked} class="check" type="checkbox" value="${todo.index}"/>
                     <span class="text-lined" data-index="${todo.index}" contentEditable="true"> ${todo.description} </span>
                     </div>
                     <div>
                     <i class="fas fa-ellipsis-v"></i>
                     <button class="delete" value="${todo.index}">
                     <i class="fa fa-trash"></i>
                  </button>
                    </div>
                </li>`;

export const block = () => `<section class="main-container">
        <div>
            <div class="heading">
                <h2 class="todays"> Today's To Do</h2>
                <span> <i class="fas fa-sync-alt"></i> </span>
            </div>
                <form class="todo-form">
                    <input class="italic-text" name="description" type="text" placeholder="Add to your list"/>
                </form>
            <ul class="todos">
            </ul>
            <div class="clear">
                <a> Clear all completed </a>
            </div>
        </div>
    </section>`;
