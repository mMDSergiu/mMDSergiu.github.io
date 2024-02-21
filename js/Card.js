const app = new Vue({
  el: "#app",
  data: {
    currentCardBackground: Math.floor(Math.random() * 25 + 1),
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    minCardYear: new Date().getFullYear(),
    amexCardMask: "#### ###### #####",
    otherCardMask: "#### #### #### ####",
    cardNumberTemp: "",
    isCardFlipped: false,
    focusElementStyle: null,
    isInputFocused: false
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType() {
      const number = this.cardNumber;
      if (number.startsWith('4')) {
        return "visa";
      }
      if (number.startsWith('34') || number.startsWith('37')) {
        return "amex";
      }
      if (number.startsWith('5') && parseInt(number.charAt(1)) >= 1 && parseInt(number.charAt(1)) <= 5) {
        return "mastercard";
      }
      if (number.startsWith('6011')) {
        return "discover";
      }
      if (number.startsWith('9792')) {
        return 'troy';
      }
      return "visa";
    },
    generateCardNumberMask() {
      if (this.getCardType === "amex") {
        return this.amexCardMask;
      } else {
        return this.otherCardMask;
      }
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) {
        return new Date().getMonth() + 1;
      } else {
        return 1;
      }
    }
  },
  watch: {
    cardYear() {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    }
  },
  methods: {
    flipCard(status) {
      this.isCardFlipped = status;
    },
    focusInput(e) {
      this.isInputFocused = true;
      const targetRef = e.target.dataset.ref;
      const target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
      };
    },
    blurInput() {
      const vm = this;
      setTimeout(function() {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    }
  }
});