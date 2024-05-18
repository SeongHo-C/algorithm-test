function solution(operations) {
  const queue = [];

  operations.forEach((operation) => {
    const [command, data] = operation.split(' ');

    if (command === 'I') queue.push(parseInt(data));
    if (command === 'D' && queue.length > 0) {
      const deleteIdx = data === '1' ? Math.max(...queue) : Math.min(...queue);
      queue.splice(queue.indexOf(deleteIdx), 1);
    }
  });

  return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}

console.log(solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']));
console.log(solution(['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333']));
