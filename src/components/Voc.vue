<template>
    <div class="container">
        <h1 class="mb-4 text-center">Voc Page</h1>
        <div class="row">
            <div class=" mb-3" v-for="playlist in playlists" :key="playlist.id">
                <div class="playlist-card p-3 mb-3">
                    <video id="myVideo" controls>
                        <source :src="playlist.video" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="playlist-info ">
                        <div class="playlist-title">{{ playlist.title }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            playlists: [
                
                {
                    title: "voc-part1-ch1-p1",
                    video: "video/voc/voc-part1-ch1-p1.mp4"

                },
                {
                    title: "voc-part1-ch1-p2",
                    video: "video/voc/voc-part1-ch1-p2.mp4"

                },
                {
                    title: "voc-Part1-Ch3",
                    video: "video/voc/voc-Part1-Ch3.sd.mp4"

                },
            ]
        };
    }
};
</script>
<style>
body {
    background-color: #0f0f0f;
    color: white;
    text-align: center;
    padding: 20px;
}


.playlist-card {
    background: #181818;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    text-align: left;
    overflow: hidden;
}

.playlist-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}

/* Responsive Video */
video {
    width: 100%;
    height: auto;
    display: block;
}
</style>
