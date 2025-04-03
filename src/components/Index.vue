<template>
    <div>
        <div class="container">
            <h2 class="mb-4 text-center text-success ">Yamin N3 Complete</h2>
            <div class="row">
                <div class="col-md-4 col-sm-6 mb-4" v-for="playlist in playlists" :key="playlist.id">
                    <div class="playlist-card p-3">
                        <img :src="playlist.thumbnail" alt="Playlist Thumbnail">
                        <div class="playlist-info mt-2">
                            <div class="playlist-title">{{ playlist.title }}</div>
                            <div class="video-count">{{ playlist.videoCount }} videos</div>
                            <router-link :to="playlist.path" class="view-playlist">Watch Now</router-link>
                        </div>
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
                    title: "Grammar",
                    thumbnail: "img/grammar-pic.jpg",
                    videoCount: 2,
                    path: "/grammar"
                },
                {
                    title: "Kanji",
                    thumbnail: "img/kanji.jpg",
                    videoCount: 3,
                    path: "/kanji"
                }, 
                 {
                   
                    title: "listening",
                    videoCount: 2,
                    thumbnail: "/img/listening-pic.jpg",
                   path: "/listening"
                },
                {
                    
                    title: "reading",
                    videoCount: 2,
                    thumbnail: "/img/reading-pic.jpg",
                    path: "/reading"
                },
                {
                    
                    title: "Voc",
                    videoCount: 2,
                    thumbnail: "/img/voc-pic.jpg",
                    path: "/voc"
                },
                {
                    title: "Old Question",
                    thumbnail: "img/grammar-pic.jpg",
                    videoCount: 2,
                    path: "/oldq"
                },
            ]
        };
    }
};
</script>


<style>
body {
    background-color:rgb(255, 213, 205);
    color: white;
    text-align: center;
    padding: 20px;
}


.playlist-card {
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(20, 174, 164, 0.679);
    text-align: left;
    overflow: hidden;
}


.playlist-card img {
    width: 100%;
    height: 170px;
    border-radius: 8px;
    object-fit: cover;
}


.playlist-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: aquamarine;
}


.video-count {
    font-size: 14px;
    color: #aaa;
}


.view-playlist {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #3ea6ff;
    text-decoration: none;
}


.view-playlist:hover {
    text-decoration: underline;
}
</style>
