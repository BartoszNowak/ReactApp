import dispatcher from './Dispatcher';

export function createTask()
{
    dispatcher.dispatch({type: "e"});
}

export function loadData()
{
    dispatcher.dispatch({type: "FETCH"});
}