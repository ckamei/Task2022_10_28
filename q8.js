Vue.component('q8', {
  template: `
  <div class="q8-contents ">
    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea1">
        <div class="person">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading1">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText1"> 設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽に変えることができます。</div>
        </div>
    </div>
    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea2">
        <div class="person hidden">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading2">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText2"> 機能的な照明をご希望されますか？</div>
        </div>
    </div>

    <div class="chatMessage-Question chatMessage-Question02" v-if="status === 8">
      <div for="btnBox" class="Question-inner02" v-on:click="question(index)" v-for="(product, index) in products" v-bind:key="product.id">
          <input  id="btnBox" type="radio"  :value="product.id">
          <img  class="QuestionText-title img-note" v-bind:src="product.image">
          <span class="QuestionText QuestionText_3" v-html='product.text'></span>
      </div>
    </div>
    <!---機能的な照明をご希望されますか？ANSWER -->
    <div class="chatMessage-User" v-show="chatBox">
        <div class="person hidden">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading3">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
                <div v-if='answer1'>{{ products[0].answer }}</div>
                <div v-else-if='answer2'>{{ products[1].answer }}</div>
                <div v-else-if='answer3'>{{ products[2].answer }}</div>
            <div class="chatText__already-read" v-show="zakReadq8">既読</div>
        </div>
    </div>
    <q9 ref="child8" @change="changeZakReadq8" :sec="sec"></q9>
  </div>
  `,
  props: ['zakReadq7', 'sec'],
  data: function () {
    return {
      zakQ1ChatArea1: false,
      zakQ1ChatArea2: false,
      zakLoading1: true,
      zakLoading2: true,
      zakLoading3: true,
      zakChatText1: false,
      zakChatText2: false,
      chatBox: false,
      answer1: false,
      answer2: false,
      answer3: false,
      status: 0,
      zakReadq8: false,
      products: [
        { "id": 1, "text": "はい", "image": "","answer": "はい"},
        { "id": 2, "text": "興味がある", "image": "","answer": "興味があります"},
        { "id": 3, "text": "いいえ", "image": "","answer": "いいえ"}
      ],
    }
  },
  computed: {
    newZakReadq7: {
      get() {
        return this.zakReadq7;
      },
      set(newVal7) {
        this.$emit('change', newVal7);
      }
    }
  },
  methods: {
    changeZakReadq8: function (newVal8) {
      this.zakReadq8 = newVal8;
    },
    zakShowchatQ1: function () {
      let self = this;
      self.zakQ1ChatArea1 = true;
      self.newZakReadq7 = true;
      setTimeout(function () {
        (self.zakChatText1 = true), (self.zakLoading1 = false);
        setTimeout(function () {
          self.zakShowchatQ2();
        }, self.sec);
      }, self.sec);
    },

    zakShowchatQ2: function () {
      let self = this;
      self.zakQ1ChatArea2 = true;
      setTimeout(function () {
        (self.zakChatText2 = true), (self.zakLoading2 = false);
        setTimeout(function () {
          scrollBy({top: 300, behavior: 'smooth'});
          self.status = 8;
        }, self.sec);
      }, self.sec);
    },

    question: function (index) {
      let self = this;
      
      if (index === 0) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer1 = true,
                setTimeout(() => {
                  self.$refs.child8.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (index === 1) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer2 = true,
                setTimeout(() => {
                  self.$refs.child8.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (index === 2) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer3 = true,
                setTimeout(() => {
                  self.$refs.child8.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
