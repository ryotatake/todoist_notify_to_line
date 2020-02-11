function getActiveTasks(params) {
  var url = "https://api.todoist.com/rest/v1/tasks"
  if (params) {
    url += "?" + createURLSearchParams(params, true);
  }
  var method = 'GET';
  var payload = "";
  return todoistAPI(url, method, payload);
}

function createURLSearchParams(obj, encode) {
  // :param encode use encodeURIComponent defalut:false
  return Object.keys(obj).map(function(key) {
    if (encode) {
      return key + '=' + encodeURIComponent(obj[key]);
    }else {
      return key + '=' + obj[key];
    }
  }).join('&');
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
