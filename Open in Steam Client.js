// ==UserScript==
// @name        Open in Steam Client
// @include     https://store.steampowered.com/*
// @grant       none
// @version     1.0
// @author      - KATC14
// @description 12/23/2022, 3:01:28 AM
// ==/UserScript==

function start(){
  var a  = document.getElementsByClassName("details_block")[1]
  var b  = document.createElement("a");

  b.innerHTML = "Open in Steam Client"
  b.className = "linkbar responsive_chevron_right"
  b.title     = "KATC14 made this"
  b.href      = `steam://openurl/${document.location.href}`

  a.insertBefore(b, a.firstChild)


  var c = document.getElementById("global_action_menu")
  var d = document.createElement("div");
  var e = document.createElement("a");

  d.className = "header_installsteam_btn header_installsteam_btn_gray"

  e.className = "header_installsteam_btn_content"
  e.title     = "KATC14 made this"
  e.href = `steam://openurl/${document.location.href}`
  e.style.backgroundColor = '#194c75'
  e.style.backgroundImage = 'unset'
  e.style.paddingLeft = '10px'
  e.innerHTML = "Open in Steam Client"

  d.appendChild(e)
  c.insertBefore(d, c.firstChild)
}
start()
