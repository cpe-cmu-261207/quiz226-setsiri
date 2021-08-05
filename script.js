const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
var authorText = author.innerText
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search_btn = document.querySelector("#search");
const reset_btn = document.querySelector("#reset");
const text = document.querySelector('#text')
var toggle = false
var textData = text.innerText;

btn_toggle.onclick = () => {
  // your code here
  if (!toggle) {
    var leng = length.value
    var code = parseInt(author.innerText.split(" ")[0])
    var intcode =parseInt(code, 10);
    var intl =parseInt(leng, 10);
    var pp = intcode + intl
    console.log(pp)
    author.innerText = code + leng
    btn_toggle.innerText = "Display Author"
    toggle = true
  }
  else {
    author.innerText = authorText
    btn_toggle.innerText = "Display Calculation"
    toggle = false
  }
}

search_btn.onclick = () => {

  text.innerText = textData
  var leng = length.value
  var words = text.innerText.split(" ")
  var selectword = []
  var color = document.querySelector("#color").value

  for (const word of words) {
    if (word.length >= leng)
      selectword.push(word)
  }
  for (const word of selectword) {
    var innerHTML = text.innerHTML
    var index = innerHTML.indexOf(word)
    innerHTML = innerHTML.substring(0, index) + "<span style='color:" + color + " ;'>" + innerHTML.substring(index, index + word.length) + "</span>" + innerHTML.substring(index + word.length);
    text.innerHTML = innerHTML;
  }

}



reset_btn.onclick = () => {
  location.reload()
}