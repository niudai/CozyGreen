// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';

export default async function (params: any, context: any) {
  const { action, username, todo, todo_idx, _id } = params;

  const todoTable = aircode.db.table('TODO');

  let result;
  
  if (action === 'get') {
  
    result = await todoTable.where({
    }).find();
  
  } else if (action === 'add') {
  
    result = await todoTable.save({
      action,
      username,
      todo,
      todo_idx,
    });
    
  } else if (action === 'delete') {
    result = await todoTable.where({
      _id: _id
    });
  }

  console.log('Received params:', params);
  
  return result;
}
