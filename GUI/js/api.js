function js_connect_to_server(status) {
  console.log(Notification.permission);

  if (Notification.permission === "granted") {
    alert ("You are connected to Republic City server.\n ~~HAPPY ROLEPLAY~~");
    return "Bermain"
  } else {
    Notification.requestPermission().then (permission => {
      console.log(permission);
    });
  }
}

function js_open_setting(status) {
  console.log(status);
}

function js_connect_to_discord(status) {
  console.log(status);
}