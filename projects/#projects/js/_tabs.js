class Tabs {
  constructor(props) {
    this.$container = document.querySelector("." + props.container);
    this.$button = this.$container.querySelectorAll("." + props.button);
    this.$tab = this.$container.querySelectorAll("." + props.tab);

    this.animation = props.animation;

    this.currentButon;
    this.currentTab;

    this.containerClickHandler(props);
  }

  containerClickHandler(props) {
    this.$container.addEventListener("click", () => {
      if (event.target.classList.contains(props.button)) {
        this.currentButon = event.target.dataset.tab_button;
        this.iteration(props);
        event.target.classList.add("active");
      }
    });
  }

  iteration(props) {
    this.$tab.forEach((item, index) => {
      if (this.animation) item.classList.add("animate__animated");
      if (item.dataset.tab == this.currentButon) {
        item.classList.add("active", props.animation_show);
      } else {
        item.classList.remove("active");
        this.$button[index].classList.remove("active");
      }
    });
  }
}

const tabs = new Tabs({
  button: "tabs__controlLink",
  tab: "tabs__item",
  container: "projects",

  animation: true,
  animation_show: "animate__fadeInRightBig",
});
