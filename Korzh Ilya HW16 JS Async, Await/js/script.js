let sendMessageButton = document.querySelector('.send-message-button');
let message = document.querySelector('.message');
let wrapper = document.querySelector(`.wrapper`);
let nick = document.querySelector('.nick');

function jsonPost(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'POST', body: JSON.stringify(data) })
      .then(res1 => res1.json())
      .then(res2 => resolve(res2));
  });
}

const addMessage = () => jsonPost("http://students.a-level.com.ua:10012", {
  func: "addMessage", nick: nick.value, message: message.value
});

let prevNextMessageId = '';

sendMessageButton.onclick = async () => {
  const res = await addMessage();
  prevNextMessageId = res.nextMessageId - 1;
  message.value = '';
  getMessages();
};

let getMessages = async () => {
  let get = await jsonPost("http://students.a-level.com.ua:10012", {
    func: "getMessages", messageId: prevNextMessageId
  });

  if (get.nextMessageId !== prevNextMessageId && prevNextMessageId !== '') {
    console.log(get.nextMessageId);
    let div = document.createElement(`div`);
    const date = new Date(get.data[0].timestamp);
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    div.innerHTML = `nick: '${get.data[0].nick}' ${time} <br> message: ${get.data[0].message}`;
    div.style.cssText = `
    max-width: 400px;
    border: 3px solid crimson;
    margin: 10px 0;
  `;
    wrapper.after(div);
    prevNextMessageId = get.nextMessageId;
  } else {
    prevNextMessageId = get.nextMessageId;
  }
};

setInterval(getMessages, 1000);


