import dispatcher from './Dispatcher';

export function createTask()
{
    dispatcher.dispatch({type: "CREATE"});
}

export function loadData()
{
    dispatcher.dispatch({type: "FETCH"});
}