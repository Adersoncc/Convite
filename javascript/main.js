const links_social_media = {
  github: 'adersoncc',
  twitter: 'adersoncc',
  linkedin: 'in/aderson1cc'
}
function changeSocialMediaLinks() {
  for (let li of social_links.children) {
    const media = li.getAttribute('class')
    li.children[0].href = `https://${media}.com/${links_social_media[media]}`
    li.children[0].href
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_img.src = data.avatar_url
      user_name.textContent = data.name
      user_link.href = data.html_url
      user_login.textContent = data.login
      user_bio.textContent = data.bio
    })
}
getGithubProfileInfos()