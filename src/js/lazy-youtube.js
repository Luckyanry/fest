let video_wrapper = document.querySelector('.youtube-video-place')
let video_frame = document.querySelector('.play-youtube-video')

console.log(video_wrapper)
console.log(video_frame)
//  Check to see if youtube wrapper exists
// if (video_wrapper.length) {
// If user clicks on the video wrapper load the video.
video_frame.addEventListener('click', function(e) {
  /* Dynamically inject the iframe on demand of the user.
     Pull the youtube url from the data attribute on the wrapper element. */

  let insertFrame =
    '<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' +
    video_wrapper.dataset.ytUrl +
    '"></iframe>'
  video_wrapper.innerHTML = insertFrame
})
// }
