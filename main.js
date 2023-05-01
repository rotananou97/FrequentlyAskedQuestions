const getQuestionElm = document.getElementsByClassName("container");

const clickOnQuestion = (event) => {
  event.target.style.display = "block";
};

const showMoreDeatail = () => {
  for (let i = 0; i < getQuestionElm.length; i++) {
    getQuestionElm[i].addEventListener("click", function () {
      this.classList.toggle("active-toggle");
    });
  }
};
showMoreDeatail();
const getAccordian = document.querySelector(".accordian");
console.log(getAccordian);
