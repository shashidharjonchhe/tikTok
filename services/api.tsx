export interface Video {
  id: number;
  video: string;
  poster: string;
  count: {
    like: string;
    comment: number;
    share: number;
  };
}

const videoApi: Array<Video> = [
  {
    id: 0,
    video: require("../assets/videos/01.mp4"),
    poster: require("../assets/poster/01.jpg"),
    count: {
      like: "1.1M",
      comment: 4080,
      share: 2800,
    },
  },
  {
    id: 1,
    video: require("../assets/videos/02.mp4"),
    poster: require("../assets/poster/02.jpg"),

    count: {
      like: "10K",
      comment: 1258,
      share: 55,
    },
  },
  {
    id: 2,
    video: require("../assets/videos/02.mp4"),
    poster: require("../assets/poster/02.jpg"),
    count: {
      like: "10K",
      comment: 1258,
      share: 55,
    },
  },
  {
    id: 3,
    video: require("../assets/videos/02.mp4"),
    poster: require("../assets/poster/02.jpg"),
    count: {
      like: "10K",
      comment: 1258,
      share: 55,
    },
  },
];

export default videoApi;
