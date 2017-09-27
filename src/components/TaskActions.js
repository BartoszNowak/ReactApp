import dispatcher from './Dispatcher';
import CONST from '../Const.js';

export function createTask(description, operation)
{
    dispatcher.dispatch({type: CONST.EVENTS.CREATE, description, operation});
}

export function loadData()
{
    dispatcher.dispatch({type: CONST.EVENTS.FETCH});
}

export function executeTask(id)
{
    dispatcher.dispatch({type: CONST.EVENTS.EXECUTE_ONE, id});
}

export function deleteTask(id)
{
    dispatcher.dispatch({type: CONST.EVENTS.DELETE_ONE, id});
}

export function generateTasks(amount)
{
    dispatcher.dispatch({type: CONST.EVENTS.GENERATE, amount});
}

export function executeAll()
{
    dispatcher.dispatch({type: CONST.EVENTS.EXECUTE_ALL});
}

export function deleteAll()
{
    dispatcher.dispatch({type: CONST.EVENTS.DELETE_ALL});
}

export function addNumberToTask(id, number)
{
    dispatcher.dispatch({type: CONST.EVENTS.ADD_NUMBER, id, number});
}