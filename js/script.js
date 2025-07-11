$(document).ready(function () {
  $(".wrapper").addClass("loaded");

  $(".icon-menu").click(function (event) {
    $(this).toggleClass("active");
    $(".menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });

  function ibg() {
    $(".ibg").each(function () {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }

  ibg();
});

if ($(".slider__body").length > 0) {
  $(".slider__body").slick({
    dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // dots: true,
        },
      },
    ],
  });
}

// function forms() {
//   $("input, textarea").focus(function () {
//     if ($(this).val() == $(this).attr("data-value")) {
//       $(this).addClass("focus");
//       $(this).parent().addClass("focus");
//       if ($(this).attr("data-type") == "pass") {
//         $(this).attr("type", "password");
//       }
//       $(this).val("");
//     }
//     removeError($(this));
//   });

//   $("input[data-value], textarea[data-value]").each(function () {
//     if (this.value == "" || this.value == $(this).attr("data-value")) {
//       if (
//         $(this).hasClass("l") &&
//         $(this).parent().find(".form__label").length == 0
//       ) {
//         $(this)
//           .parent()
//           .append(
//             '<div class="form__label">' + $(this).attr("data-value") + "</div>"
//           );
//       } else {
//         this.value = $(this).attr("data-value");
//       }
//     }

//     if (this.value != $(this).attr("data-value") && this.value != "") {
//       $(this).addClass("focus");
//       $(this).parent().addClass("focus");
//       if (
//         $(this).hasClass("l") &&
//         $(this).parent().find(".form__label").length == 0
//       ) {
//         $(this)
//           .parent()
//           .append(
//             '<div class="form__label">' + $(this).attr("data-value") + "</div>"
//           );
//       }
//     }
//     $(this).click(function () {
//       if (this.value == $(this).attr("data-value")) {
//         if ($(this).attr("data-type") == "pass") {
//           $(this).attr("type", "password");
//         }
//         this.value = "";
//       }
//     });
//     $(this).blur(function () {
//       if (this.value == "") {
//         if (!$(this).hasClass("l")) {
//           this.value = $(this).attr("data-value");
//         }
//         $(this).removeClass("focus");
//         $(this).parent().removeClass("focus");
//         if ($(this).attr("data-type") == "pass") {
//           $(this).attr("type", "text");
//         }
//       }
//       if ($(this).hasClass("vn")) {
//         formValidate($(this));
//       }
//     });
//   });
//   $(".form-input__viewpass").click(function (event) {
//     if ($(this).hasClass("active")) {
//       $(this).parent().find("input").attr("type", "password");
//     } else {
//       $(this).parent().find(input).attr("type", "text");
//     }
//     $(this).toggleClass("active");
//   });
// }

// forms();

// $(".form-button[type=submit]").click(function () {
//   var er = 0;
//   var form = $(this).parents("form");
//   var ms = form.data("ms");
//   $.each(form.find(".req"), function (index, val) {
//     er += formValidate($(this));
//   });
//   if (er == 0) {
//     removeFormError(form);

//     if (ms != null && ms != "") {
//       showMessageByClass(ms);
//       return false;
//     }
//   } else {
//     return false;
//   }
// });

// function formValidate(input) {
//   var er = 0;
//   var form = input.parents("form");
//   if (input.attr("name") == "email" || input.hasClass("email")) {
//     if (input.val() != input.attr("data-value")) {
//       var em = input.val().replace(" ", "");
//       input.val(em);
//     }
//     if (
//       !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val()) ||
//       input.val() == input.attr("data-value")
//     ) {
//       er++;
//       addError(input);
//     } else {
//       removeError(input);
//     }
//   } else {
//     if (input.val() == "" || input.val() == input.attr("data-value")) {
//       er++;
//       addError(input);
//     } else {
//       removeError(input);
//     }
//   }
//   if (input.attr("type") == "checkbox") {
//     if (input.prop("checked") == true) {
//       input.removeError("err").parent().removeClass("err");
//     } else {
//       err++;
//       input.addClass("err").parent().addClass("err");
//     }
//   }
//   if (input.hasClass("name")) {
//     if (!/^[А-Яа-яа-zA-Z-]+([А-Яа-яа-zA-Z]+)$/.test(input.val())) {
//       err++;
//       addError(input);
//     }
//   }
//   if (input.hasClass("pass-2")) {
//     if (form.find(".pass-1").val() != form.find(".pass-2").val()) {
//       addError(input);
//     } else {
//       removeError(input);
//     }
//   }
//   return er;
// }

// function formLoad() {
//   $(".popup").hide();
//   $(".popup-message-body").hide();
//   $(".popup-message .popup-body").append(
//     '<div class="popup-loading"><div class="popup-loading__title">Start loading...</div><div class="popup-loading__spinner"></div></div>'
//   );
//   $(".popup-message").addClass("active").fadeIn(300);
// }

// function showMessageByClass(ms) {
//   $(".popup").hide();
//   popupOpen("message." + ms, "");
// }

// function showMessage(html) {
//   $(".popup-loading").remove();
//   ".popup-message-body".show().html(html);
// }

// function clearForm(form) {
//   $.each(form.find(".input"), function (index, val) {
//     $(this).removeClass("focus").val($(this).data("value"));
//     $(this).parent().removeClass("focus");
//     if ($(this).hasClass("phone")) {
//       maskclear($(this));
//     }
//   });
// }

// function addError(input) {
//   input.addClass("err");
//   input.parent().addClass("err");
//   input.parent().find(".form__error").remove();
//   if (input.hasClass("email")) {
//     var error = "";
//     if (input.val() == "" || input.val() == input.attr("data-value")) {
//       error = input.data("error");
//     } else {
//       error = input.data("error");
//     }
//     if (error != null) {
//       input.parent().append('<div class="form__error">' + error + "</div>");
//     }
//   } else {
//     if (
//       input.data("error") != null &&
//       input.parent().find(".form__error").length == 0
//     ) {
//       input
//         .parent()
//         .append('<div class="form__error">' + input.data("error") + "</div>");
//     }
//   }
//   if (input.parents(".select-block").length > 0) {
//     input.parents(".select-block").parent().addClass("err");
//     input.parents(".select-block").find(".select").addClass("err");
//   }
// }

// function addErrorByName(form, input__name, error__text) {
//   var input = form.find('[name="' + input__name + '"]');
//   input.attr("data-error", error__text);
//   addError(input);
// }

// function addFormError(form, error__text) {
//   form.find(".form__generalerror").show().html(error__text);
// }

// function removeFormError(form) {
//   form.find(".form__generalerror").hide().html("");
// }

// function removeError(input) {
//   input.removeClass("error");
// }

function forms() {
  $("input, textarea").focus(function () {
    if ($(this).val() === $(this).attr("data-value")) {
      $(this).addClass("focus");
      $(this).parent().addClass("focus");
      if ($(this).attr("data-type") === "pass") {
        $(this).attr("type", "password");
      }
      $(this).val("");
    }
    removeError($(this));
  });

  $("input[data-value], textarea[data-value]").each(function () {
    if ($(this).val() === "" || $(this).val() === $(this).attr("data-value")) {
      if ($(this).hasClass("l") && $(this).parent().find(".form__label").length === 0) {
        $(this).parent().append('<div class="form__label">' + $(this).attr("data-value") + "</div>");
      } else {
        $(this).val($(this).attr("data-value"));
      }
    }

    if ($(this).val() !== $(this).attr("data-value") && $(this).val() !== "") {
      $(this).addClass("focus");
      $(this).parent().addClass("focus");
    }

    $(this).click(function () {
      if ($(this).val() === $(this).attr("data-value")) {
        if ($(this).attr("data-type") === "pass") {
          $(this).attr("type", "password");
        }
        $(this).val("");
      }
    });

    $(this).blur(function () {
      if ($(this).val() === "") {
        if (!$(this).hasClass("l")) {
          $(this).val($(this).attr("data-value"));
        }
        $(this).removeClass("focus");
        $(this).parent().removeClass("focus");
        if ($(this).attr("data-type") === "pass") {
          $(this).attr("type", "text");
        }
      }
      if ($(this).hasClass("vn")) {
        formValidate($(this));
      }
    });
  });

  $(".form-input__viewpass").click(function () {
    let input = $(this).parent().find("input");
    if ($(this).hasClass("active")) {
      input.attr("type", "password");
    } else {
      input.attr("type", "text");
    }
    $(this).toggleClass("active");
  });
}

forms();

$(".form-button[type=submit]").click(function () {
  let er = 0;
  let form = $(this).closest("form");
  let ms = form.data("ms");

  form.find(".req").each(function () {
    er += formValidate($(this));
  });

  if (er === 0) {
    removeFormError(form);
    if (ms) {
      showMessageByClass(ms);
      return false;
    }
  } else {
    return false;
  }
});

function formValidate(input) {
  let er = 0;
  let form = input.closest("form");

  if (input.attr("name") === "email" || input.hasClass("email")) {
    let em = input.val().trim();
    input.val(em);
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,8}$/.test(em) || em === input.attr("data-value")) {
      er++;
      addError(input);
    } else {
      removeError(input);
    }
  } else {
    if (input.val() === "" || input.val() === input.attr("data-value")) {
      er++;
      addError(input);
    } else {
      removeError(input);
    }
  }

  if (input.attr("type") === "checkbox" && !input.prop("checked")) {
    er++;
    addError(input);
  }

  if (input.hasClass("name") && !/^[A-Za-zА-Яа-я-]+$/.test(input.val())) {
    er++;
    addError(input);
  }

  if (input.hasClass("pass-2") && form.find(".pass-1").val() !== input.val()) {
    er++;
    addError(input);
  }

  return er;
}

function addError(input) {
  input.addClass("err");
  input.parent().addClass("err");
  input.parent().find(".form__error").remove();
  let error = input.data("error") || "Invalid input";
  input.parent().append('<div class="form__error">' + error + "</div>");
}

function removeError(input) {
  input.removeClass("err");
  input.parent().removeClass("err");
  input.parent().find(".form__error").remove();
}

function removeFormError(form) {
  form.find(".form__generalerror").hide().html("");
}

function showMessageByClass(ms) {
  $(".popup").hide();
  popupOpen("message." + ms, "");
}

