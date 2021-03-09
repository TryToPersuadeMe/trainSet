class ResponsiveBlock {
  constructor(props) {
    this.$block = document.querySelector(props.block);
    this.$newParent = document.querySelector(props.newParent);
    this.$oldParent = document.querySelector(props.oldParent);
    this.windowWidth = props.windowWidth;

    this.togglePosition();
    this.windowEventHandler();
  }

  moveBlock(parent) {
    parent.prepend(this.$block);
  }

  togglePosition() {
    if (window.innerWidth < this.windowWidth) {
      this.moveBlock(this.$newParent);
    } else {
      this.moveBlock(this.$oldParent);
    }
  }

  windowEventHandler() {
    window.addEventListener("resize", () => {
      this.togglePosition();
    });
  }
}

const responsiveBlock = new ResponsiveBlock({
  block: ".cardSection__title",
  oldParent: ".cardSection__information",
  newParent: ".cardSection__row",
  windowWidth: "1200",
});
