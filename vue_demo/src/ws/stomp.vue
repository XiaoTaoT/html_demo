<template>
  <div>
    <button @click="close">close</button>
    <button @click="connect">connect</button>
    <br/>
    <input v-model="cnt"/>
    <button @click="send">send</button>
    <p v-for="msg in msgList"> {{ msg}} </p>
  </div>
</template>

<script>
import Stomp from "stompjs";

export default {
  data() {
    return {
      stompClient: null,
      cnt: '',
      msgList:[]
    }
  },
  created() {
  },
  methods: {
    subscribeCallback(message) {
      console.log(message);
      console.log(message.body);
    },
    connect() {
      const headers = {
        login: 'mylogin',
        passcode: 'mypasscode',
        // additional header
        'client-id': 'my-client-id'
      };

      if (!this.stompClient) {
        this.stompClient = Stomp.client('ws://localhost:9090/my-ws');
      }
      this.stompClient.connect({}, () => {
        console.log("connect success");
        // 订阅/topic/greetings地址的消息
        this.stompClient.subscribe('/topic/hello', (message) => {
          console.log(message)
          this.msgList.push(message.body);
        });
      })
    },
    send() {
      // 向/app/hello地址发送消息
      this.stompClient.send("/app/hello", {}, this.cnt);

    },
    close() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
