const input = document.getElementById("tweetInput")
const postBtn = document.getElementById("postbtn2")
const tweets = document.getElementById("tweets")
const empty = document.getElementById("emptyState")

postBtn.disabled = true

input.addEventListener("input", () => {
  input.style.height = "0px"
  input.style.height = input.scrollHeight + "px"
  postBtn.disabled = !input.value.trim()
})

postBtn.addEventListener("click", () => {
  const text = input.value.trim()
  if (!text) return

  empty.style.display = "none"

  const tweet = document.createElement("div")
  tweet.className = "tweet"
  tweet.innerHTML = `
    <div class="tweet_avatar">
      <img src="logo-icon-pack/Default_pfp.svg" />
    </div>
    <div class="tweet_body">
      <div class="tweet_header">
        <span class="tweet_name">You</span>
        <span class="tweet_handle">@you</span>
        <span class="tweet_dot">·</span>
        <span class="tweet_time">now</span>
      </div>
      <div class="tweet_text">${text}</div>
    </div>
  `

  tweets.prepend(tweet)

  input.value = ""
  input.style.height = "0px"
  postBtn.disabled = true
})
