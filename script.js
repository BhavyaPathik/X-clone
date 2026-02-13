const input = document.getElementById("tweetInput")
const postBtn = document.getElementById("postbtn2")
const tweets = document.getElementById("tweets")
const empty = document.getElementById("emptyState")
const conti = document.querySelector(".conti");
const login = document.querySelector(".login");
const app = document.querySelector(".app");
const usernameInput = document.querySelector(".username"); 
const bioInput = document.querySelector(".bio");
const user_name = document.querySelectorAll(".u_name");
const user_bio = document.querySelector(".u_bio");
const date_joined = document.querySelector(".date_joined");
const profile_nav_element = document.querySelectorAll(".profile_nav_ele")
const userProfile = document.querySelector(".userProfile")
const home = document.querySelector(".main_feed")
const profile = document.querySelector(".profile")
const userhome = document.querySelector(".userhome")
const profile_post = document.querySelector(".profile_post")

let Username = "";

const MAX_CHARS = 280
const counter = document.getElementById("charCounter")

conti.addEventListener("click",function(){
  Username = usernameInput.value.trim();
  const bio = bioInput.value.trim();
  if (Username === "") {
    alert("Please Enter a Username")
    return;
  }
    
    user_name.forEach(function(e){
    e.innerHTML = Username;
    });
    user_bio.innerHTML = bio;
    const now = new Date();
    date_joined.textContent = `📅 Joined ${now.toDateString()} >`;
    login.classList.toggle("hidden");
    app.classList.remove("hidden");
})
console.log(Username , "cool")

postBtn.disabled = true

input.addEventListener("input", () => {
  input.style.height = "0px"
  input.style.height = input.scrollHeight + "px"

  const remaining = MAX_CHARS - input.value.length
  counter.textContent = remaining

  if (remaining < 0 || !input.value.trim()) {
    postBtn.disabled = true
    counter.classList.add("over")
  } else {
    postBtn.disabled = false
    counter.classList.remove("over")
  }
})

function createTweet(text, className) {
  const tweet = document.createElement("div")
  tweet.className = className

  tweet.innerHTML = `
    <div class="${className}_avatar">
      <img src="logo-icon-pack/Default_pfp.svg" />
    </div>
    <div class="${className}_body">
      <div class="${className}_header">
        <span class="${className}_name">${Username}</span>
        <span class="${className}_handle">@${Username}</span>
        <span class="${className}_dot">·</span>
        <span class="${className}_time">now</span>
      </div>
      <div class="${className}_text">${text}</div>
    </div>
  `
  return tweet
}
postBtn.addEventListener("click", () => {
  const text = input.value.trim()
  if (!text) return

  empty.style.display = "none"

  const tweet = createTweet(text, "tweet")
  const tweet2 = createTweet(text, "tweet2")

  tweets.prepend(tweet)
  profile_post.prepend(tweet2)

  input.value = ""
  input.style.height = "0px"
  postBtn.disabled = true
  counter.textContent = MAX_CHARS
  counter.classList.remove("over")

})

userProfile.addEventListener("click",function(){
  profile.classList.remove("hidden")
  home.classList.add("hidden")
})

userhome.addEventListener("click",function(){
  profile.classList.add("hidden")
  home.classList.remove("hidden")
})