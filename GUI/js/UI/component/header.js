const voice_status = `Voice <span class="badge bg-success"><i class="far fa-check-circle"></i> Terhubung</span>`;
const versions_status =
  "PERINGATAN : Kamu sedang menggunakan Patch Versi 1.9, harap update sebelum terhubung ke server.";
let max_player = "100";
let current_player = "-";
let current_status = "idle";

export default new Vue({
  el: "#app",
  data: {
    players_count: current_player + " / " + max_player,
    voice_check: true,
    voice_status: voice_status,
    version_check: false,
    versions: versions_status,
    button_discord: "DISCORD",
    button_setting: "PENGATURAN",
    button_connect: "CONNECT",
    status: current_status,
  },
  components: {
    rTitle: {
      template: `
            <div class="pbody">
            <p class="ptitle">Republic City</p>
            <p class="sub-ptitle">V2 Beta</p>
            </div>`,
    },
  },
  methods: {
    discord: function () {
      let result = js_connect_to_discord(this.status);
      this.button_connect = result;
    },
    setting: function () {
      this.status = "in setting";
      js_open_setting(this.status);
    },
    play: function () {
      let result = js_connect_to_server(this.status);
      this.button_connect = result;
    },
  },
});
