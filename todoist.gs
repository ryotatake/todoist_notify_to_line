function getActiveTasks(params) {
  var url = "https://api.todoist.com/rest/v1/tasks"
  if (params) {
    url += "?" + params;
  }
  var method = 'GET';
  var payload = "";
  return todoistAPI(url, method, payload);
}

function todoistAPI(url, method, payload) {
  var accessToken = PropertiesService.getScriptProperties().getProperty("todoist_access_token");
  var headers = {
    'Authorization': 'Bearer ' + accessToken
  };
  var options = {
    'method' : method,
    'headers': headers,
    'payload': payload
  };
  
  var response = UrlFetchApp.fetch(url, options);
  return response;
}
