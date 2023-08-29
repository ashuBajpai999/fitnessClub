const HandleEnter = (e) => {
  const keyCode = e.keyCode;

  const form = e.target.form.querySelectorAll(
    `input:not(.d-none):not([disabled]):not([type="submit"]):not([type="file"]),textarea:not([aria-hidden="true"]):not([disabled]):not(.d-none),.SecondaryButton,.PrimaryButton`
  );
  const index = [...form].indexOf(e.target);
  if (keyCode === 13) {
    const nextelement = form[index + 1];

    if (index === form.length - 1)
      setTimeout(() => {
        e.preventDefault();
        e.stopPropagation(e);
        document.getElementById("signUpButton").focus();
      });
    else {
      e.preventDefault();
      nextelement.focus();
    }
  } else if (keyCode === 8) {
    const previousElement = form[index - 1];
    const currElement = form[index].value;
    if (previousElement !== undefined && currElement === "")
      previousElement.focus();
  }
};

export default HandleEnter;
