import dispatcher from './Dispatcher';

export function createTask(description)
{
    dispatcher.dispatch({type: "CREATE", description});
}

export function loadData()
{
    dispatcher.dispatch({type: "FETCH"});
}

export function executeTask(id)
{
    dispatcher.dispatch({type: "EXECUTE_ONE", id});
}

export function deleteTask(id)
{
    dispatcher.dispatch({type: "DELETE_ONE", id});
}

export function generateTasks(amount)
{
    dispatcher.dispatch({type: "GENERATE", amount});
}

export function executeAll()
{
    dispatcher.dispatch({type: "EXECUTE_ALL"});
}

export function deleteAll()
{
    dispatcher.dispatch({type: "DELETE_ALL"});
}