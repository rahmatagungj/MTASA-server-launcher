function js_connect_to_server(status) {
  console.log(Notification.permission);

  if (Notification.permission === "granted") {
    alert ("You are connected to Republic City server.\n ~~HAPPY ROLEPLAY~~");
    return "Bermain"
<<<<<<< HEAD
  } else {
=======
  } else if (Notification.permission !== "denied") {
>>>>>>> 47da718206f2fb8d390d228620da1337ab2395cd
    Notification.requestPermission().then (permission => {
      console.log(permission);
    });
  }
}

function js_open_setting(status) {
  console.log(status);
<<<<<<< HEAD
}

function js_connect_to_discord(status) {
  console.log(status);
=======
>>>>>>> 47da718206f2fb8d390d228620da1337ab2395cd
}