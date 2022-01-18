<template>
  <div class="artplayer-app" id="player"></div>
</template>

<script>
import Artplayer from "artplayer";
import Hls from "hls.js";

export default {
  components: {
    Artplayer,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let hls = new Hls();
    var art = new Artplayer({
      container: ".artplayer-app",
      theme: "#eb0000",
      poster: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      customType: {
        m3u8: function (video, url) {
          hls.loadSource(url);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
          });
        },
      },
      // layers: [
      //   {
      //     html:
      //       '<img style="width: 100px" src="https://artplayer.org/assets/sample/layer.png">',
      //     click: function () {
      //       console.info("You clicked on the custom layer");
      //     },
      //     style: {
      //       position: "absolute",
      //       top: "20px",
      //       right: "20px",
      //       opacity: ".9",
      //     },
      //   },
      // ],
      // quality: [
      //   {
      //     default: true,
      //     html: "SD 480P",
      //     url: "/assets/sample/video.mp4",
      //   },
      //   {
      //     html: "HD 720P",
      //     url: "/assets/sample/video.mp4",
      //   },
      // ],
      subtitle: {
        url: "/assets/sample/subtitle.srt",
        type: "srt",
        style: {
          color: "#03A9F4",
        },
        encoding: "utf-8",
        bilingual: true,
      },
      autoplay: true,
      muted: false,
      pip: true,
      setting: true,
      playbackRate: true,
      aspectRatio: true,
      whitelist: ["*"],
      fullscreen: true,
      subtitleOffset: true,
      miniProgressBar: true,
      backdrop: true,
      lang: navigator.language.toLowerCase(),
      moreVideoAttr: {
        playsInline: true,
        "webkit-playsinline": true,
        crossOrigin: "anonymous",
      },
    });
  },
};
</script>

<style scoped>
.artplayer-app {
  height: 100vh;
}
</style>
