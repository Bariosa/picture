/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../\u0000#2Project/src/js/modules/accordion.js":
/*!*************************************************!*\
  !*** ../ #2Project/src/js/modules/accordion.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active-style");
      this.nextElementSibling.classList.toggle("active-content");
      if (this.classList.contains("active-style")) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });

  // const blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach((block) => {
  //   block.classList.add("animated", "fadeInDown");
  // });
  //
  // btns.forEach((btn) => {
  //   btn.addEventListener("click", function () {
  //     if (!this.classList.contains("active")) {
  //       btns.forEach((btn) => {
  //         btn.classList.remove("active", "active-style");
  //       });
  //       this.classList.add("active", "active-style");
  //     }
  //   });
  // });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/burger.js":
/*!**********************************************!*\
  !*** ../ #2Project/src/js/modules/burger.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = "none";
  burgerElem.addEventListener("click", () => {
    if (menuElem.style.display === "none" && window.screen.availWidth < 993) {
      menuElem.style.display = "block";
    } else {
      menuElem.style.display = "none";
    }
  });
  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = "none";
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/calc.js":
/*!********************************************!*\
  !*** ../ #2Project/src/js/modules/calc.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);
  let sum = 0;
  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value === "" || materialBlock === "") {
      resultBlock.textContent = "Пожалуйста выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/checkTextInputs.js":
/*!*******************************************************!*\
  !*** ../ #2Project/src/js/modules/checkTextInputs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^а-яї 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/drop.js":
/*!********************************************!*\
  !*** ../ #2Project/src/js/modules/drop.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const drop = () => {
  const fileInputs = document.querySelectorAll("[name=upload]");
  ["dragenter", "dragleave", "dragover", "drop"].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function highlight(item) {
    item.closest(".file_upload").style.border = "5px solid yellow";
    item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0, .7)";
  }
  function unHighlight(item) {
    item.closest(".file_upload").style.border = "none";
    if (item.closest(".calc_form")) {
      item.closest(".file_upload").style.backgroundColor = "#fff";
    } else {
      item.closest(".file_upload").style.backgroundColor = "#ededed";
    }
  }
  ["dragenter", "dragover"].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ["dragleave", "drop"].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unHighlight(input), false);
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener("drop", e => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split(".");
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/filter.js":
/*!**********************************************!*\
  !*** ../ #2Project/src/js/modules/filter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad");
  const wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    markGirl = wrapper.querySelectorAll(".girl"),
    markLovers = wrapper.querySelectorAll(".lovers"),
    markChef = wrapper.querySelectorAll(".chef"),
    markGuy = wrapper.querySelectorAll(".guy");
  const no = document.querySelector(".portfolio-no");
  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };
  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener("click", () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener("click", () => {
    typeFilter(markChef);
  });
  btnGuy.addEventListener("click", () => {
    typeFilter(markGuy);
  });
  btnGirl.addEventListener("click", () => {
    typeFilter(markGirl);
  });
  btnGrandmother.addEventListener("click", () => {
    typeFilter();
  });
  btnGranddad.addEventListener("click", () => {
    typeFilter();
  });
  menu.addEventListener(".click", e => {
    let target = e.target;
    if (target && target.tagName === "LI") {
      items.forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/forms.js":
/*!*********************************************!*\
  !*** ../ #2Project/src/js/modules/forms.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "../\u0000#2Project/src/js/services/requests.js");
// import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const form = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const upload = document.querySelectorAll("[name='upload']");

  // checkNumInputs("input[name='user_phone']");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png"
  };
  const path = {
    designer: "assets/server.php",
    question: "assets/question.php"
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = "";
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };
  upload.forEach(item => {
    item.addEventListener("input", () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split(".");
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.parentNode.appendChild(statusMessage);
      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 400);
      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement("p");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest(".popup-design") || item.classList.contains("calc_form") ? api = path.designer : api = path.question;
      console.log(api);
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute("src", message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute("src", message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = "block";
          item.classList.remove("fadeOutUp");
          item.classList.add("fadeInUp");
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/mask.js":
/*!********************************************!*\
  !*** ../ #2Project/src/js/modules/mask.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  const setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = "+38 (___) ___ __ __";
    let i = 0;
    let def = matrix.replace(/\D/g, "");
    console.log(def);
    let val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (event.type === "blur") {
      if (this.value.length === 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("click", createMask);
    input.addEventListener("blur", createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/modals.js":
/*!**********************************************!*\
  !*** ../ #2Project/src/js/modules/modals.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = modalState => {
  let btnPressed;
  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");
    const scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (destroy) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = "none";
          item.classList.add("animated", "fadeIn");
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener("click", () => {
      windows.forEach(item => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;
      document.querySelectorAll("[data-modal]").forEach(item => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        const scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }
  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 5) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  openByScroll(".fixed-gift");

  // showModalByTime(".popup-consultation", 60000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/pictureSize.js":
/*!***************************************************!*\
  !*** ../ #2Project/src/js/modules/pictureSize.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p:not(.size-hit)").forEach(p => {
      p.style.display = "none";
    });
  }
  function hideImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p").forEach(p => {
      p.style.display = "block";
    });
  }
  blocks.forEach(block => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/scrolling.js":
/*!*************************************************!*\
  !*** ../ #2Project/src/js/modules/scrolling.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  //Scrolling with requestAnimationFrame
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop;
      let hash = this.hash;
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start;
        let r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r !== widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  //Pure js scrolling

  //   const element = document.documentElement;
  //   const body = document.body;
  //
  //   const calcScroll = () => {
  //     upElem.addEventListener("click", function (event) {
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //
  //       if (this.hash !== "") {
  //         event.preventDefault();
  //         let hashElement = document.querySelector(this.hash);
  //         let hashElementTop = 0;
  //
  //         while (hashElement.offsetParent) {
  //           hashElementTop += hashElement.offsetTop;
  //           hashElement = hashElement.offsetParent;
  //         }
  //
  //         hashElementTop = Math.round(hashElementTop);
  //         smoothScroll(scrollTop, hashElementTop, this.hash);
  //       }
  //     });
  //   };
  //
  //   const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1;
  //     let prevScrollTop;
  //     let speed;
  //
  //     if (to > from) {
  //       speed = 30;
  //     } else {
  //       speed = -30;
  //     }
  //
  //     let move = setInterval(function () {
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //
  //       if (
  //         prevScrollTop === scrollTop ||
  //         (to > from && scrollTop >= to) ||
  //         (to < from && scrollTop <= to)
  //       ) {
  //         clearInterval(move);
  //         history.replaceState(
  //           history.state,
  //           document.title,
  //           location.href.replace(/#.*$/g, "") + hash,
  //         );
  //       } else {
  //         body.scrollTop += speed;
  //         element.scrollTop += speed;
  //         prevScrollTop = scrollTop;
  //       }
  //     }, timeInterval);
  //   };
  //   calcScroll();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/showMoreStyles.js":
/*!******************************************************!*\
  !*** ../ #2Project/src/js/modules/showMoreStyles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "../\u0000#2Project/src/js/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // cards.forEach((card) => {
  //   card.classList.add("animated", "fadeInUp");
  // });
  //
  // btn.addEventListener("click", () => {
  //   cards.forEach((card) => {
  //     card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //     card.classList.add(
  //       "col-sm-3",
  //       "col-sm-offset-0",
  //       "col-xs-10",
  //       "col-xs-offset-1",
  //     );
  //   });
  //   // btn.style.direction = "none";
  //   btn.remove();
  // });

  btn.addEventListener("click", function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)("http://localhost:3000/styles").then(res => createCards(res)).catch(error => console.log(error));
    this.remove();
  });
  function createCards(response) {
    response.forEach(({
      src,
      title,
      link
    }) => {
      let card = document.createElement("div");
      card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
      card.innerHTML = `
        <div class=styles-block>
            <img src=${src} alt="style">
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
        </div>
      `;
      console.log(`%c::${"wrapper"} =>`, "background: #5ebaf2; color: #fff; border-radius: 5px; padding: 2px 5px;", wrapper);
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ }),

/***/ "../\u0000#2Project/src/js/modules/sliders.js":
/*!***********************************************!*\
  !*** ../ #2Project/src/js/modules/sliders.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1;
  let paused = false;
  const items = document.querySelectorAll(slides);
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener("click", () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}
  function activateAnimation() {
    if (dir === "vertical") {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }
  activateAnimation();
  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ }),

/***/ "../\u0000#2Project/src/js/services/requests.js":
/*!*************************************************!*\
  !*** ../ #2Project/src/js/services/requests.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ../ #2Project/src/js/main.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "../\u0000#2Project/src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "../\u0000#2Project/src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "../\u0000#2Project/src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "../\u0000#2Project/src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "../\u0000#2Project/src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "../\u0000#2Project/src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "../\u0000#2Project/src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "../\u0000#2Project/src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "../\u0000#2Project/src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "../\u0000#2Project/src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "../\u0000#2Project/src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "../\u0000#2Project/src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "../\u0000#2Project/src/js/modules/drop.js");













window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical");
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])("[name='phone']");
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(".button-styles", "#styles .row");
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])("#size", "#material", "#options", ".promocode", ".calc-price");
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])(".sizes-block");
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])(".accordion-heading");
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])(".burger-menu", ".burger");
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])(".pageup");
  (0,_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map