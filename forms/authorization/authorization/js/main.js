const toggleElements = (form, button, container) => {
  const $container = document.querySelector(container);

  $container.addEventListener("click", function (e) {
    if (event.target.classList.contains(form)) {
      const $button = $container.querySelectorAll("." + button);
      const $forms = $container.querySelectorAll("." + form);

      let data = event.target.dataset.form_button;
      const anchoredForm = $container.querySelector("#" + data);

      Array.from($button).forEach((item, index) => {
        item.classList.remove("active");
        $forms[index].classList.remove("active");
      });

      anchoredForm.classList.add("active", "animate__animated");
      event.target.classList.add("active");
    }
  });
};

toggleElements("authorization__titleLink", "authorization__form", ".authorization");

const validation = () => {
  const $form = document.querySelector("#signUpForm");
  const passwordFields = $form.querySelectorAll(`input[type="password"]`);
  const $errorMessage = $form.querySelector(".form__errorMessage");

  passwordFields.forEach((el) => {
    el.addEventListener("input", () => {
      if (passwordFields[0].value != passwordFields[1].value && passwordFields[0].value.length > 0) {
        $errorMessage.classList.add("active");
        $form.classList.add("error");
      } else {
        $form.classList.remove("error");
        $errorMessage.classList.remove("active");
      }
    });
  });

  $form.addEventListener("submit", () => {
    if (event.currentTarget.classList.contains("error")) return event.preventDefault();
  });
};

validation();
;
class responsiveHeader {
  constructor(props) {
    this.navigation = document.querySelector("." + props.navigation);
    this.burgerIcon = document.querySelector("." + props.burgerIcon);

    this.htmlBody = document.querySelector("body");

    this.BurgerClick();
    this.WindowClick();
  }

  openState() {
    this.navigation.classList.add("active");
    this.burgerIcon.classList.add("active");
    this.htmlBody.classList.add("body-overlay");
  }

  closeState() {
    this.navigation.classList.remove("active");
    this.burgerIcon.classList.remove("active");
    this.htmlBody.classList.remove("body-overlay");
  }

  BurgerClick() {
    this.burgerIcon.addEventListener("click", () => {
      if (!event.currentTarget.classList.contains("active")) {
        this.openState();
      } else {
        this.closeState();
      }
    });
  }

  WindowClick() {
    document.addEventListener("click", () => {
      if (event.target.classList.contains("body-overlay")) {
        this.closeState();
      }
    });
  }
}

const headerBurgerMenu = new responsiveHeader({
  navigation: "header",
  burgerIcon: "burgerIcon",
});
;
