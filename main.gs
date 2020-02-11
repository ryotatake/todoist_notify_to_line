function notifyTodayTasks() {
  var todayAndOverdueTasks = JSON.parse(getActiveTasks({"filter": "(today|overdue)"}));
  var message = "今日までのタスクだよ\n\n" + createMessage(todayAndOverdueTasks);
  
  sendMessageToLine(message);
}

function createMessage(tasks) {
  var message = '';
  
  tasks.forEach(function(task, index) {
    message += task.due.date + " " + task.content + "\n";
  });
  
  return message;
}