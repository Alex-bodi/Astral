 export default {
  domain: "http://localhost:8070",

  time: {
    //Getters
    getDate:"time/getDate",
    getTime:"time/getTime",
    //Mutations
    updateDateTime: "time/updateDateTime",
    //Actions
    timeRefresh: "time/timeRefresh",
    clearDateInterval: "time/clearDateInterval"
  },
   music: {
     //Getters
     getMusic: "music/getMusic",
     getAlbum: "music/getAlbum",
     getAlbums: "music/getAlbums",
     getSongsOfAlbum: "music/getSongsOfAlbum",
     getCurrentSong: "music/getCurrentSong",
     //Mutations
     setMusicList: "music/setMusicList",
     setSong: "music/setSong",
     //Actions
     loadMusicList: "music/loadMusicList",
     loadMusic: "music/loadMusic",
     player: {
       //Getters
       getPlay: "player/getPlay",
       getProgress: "player/getProgress",
       getCurrentAlbum:"player/getCurrentAlbum",
       getBreadcrumbs:"player/getBreadcrumbs",
       //Mutations
       setPlay: "player/setPlay",
       setProgress: "player/setProgress",
       setDuration: "player/setDuration",
       setCurrentAlbum: "player/setCurrentAlbum",
       setBreadcrumbs:"player/setBreadcrumbs",
       //Actions
       start: "player/start",
       stop: "player/stop",
       getMetaData: "player/getMetaData",
       changeCurrentAlbum:"player/changeCurrentAlbum",
       modifyBreadcrumbs:"player/modifyBreadcrumbs",
     },
     folders: {
       //Getters
        getBreadcrumbs: "folders/getBreadcrumbs",
       //Mutations
       setBreadcrumbs: "folders/setBreadcrumbs",
       //Actions
       modifyBreadcrumbs: "folders/modifyBreadcrumbs"
     },
     youtube: {
       //Getters

       //Mutations

       //Actions

     },
  },
  todo:{
    //Getters
    getDailyTasks: "todo/getDailyTasks",
    //Mutations
    addDailyTask: "todo/addDailyTask",
    changeStatus: "todo/changeStatus",
    //Actions
    queryDailyTasks: "todo/queryDailyTasks",
    crossout: "todo/crossout"
  },
   weather:{
    //Getters
    getDailyWeather: "weather/getDailyWeather",
    //Mutations
    setDailyWeather: "weather/setDailyWeather",
    //Actions
    updateDailyWeather: "weather/updateDailyWeather"
   }
 }