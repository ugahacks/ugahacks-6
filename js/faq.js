
var question = document.getElementsByClassName("faq-question");

expand(question)
//expand(faqContainer)

function expand(coll){
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;

      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.height = "auto";

      }
    });
  }

}
