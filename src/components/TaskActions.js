import dispatcher from './Dispatcher';

export function createTask()
{
    dispatcher.dispatch({type: "e"});
}