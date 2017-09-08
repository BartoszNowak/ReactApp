import dispatcher from './Dispatcher';

export function createTask()
{
    dispatcher.dispatch({type: "CREATE"});
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