const mongoose = require("mongoose");
const Chat = require("./models/chats.js")
main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "preeti",
    msg: "send me the notes",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "teach me JS callabcks",
    created_at: new Date(),
  },
  {
    from: "harsh",
    to: "rehal",
    msg: "teach me OS theory",
    created_at: new Date(),
  },
  {
    from: "prathm",
    to: "ashish",
    msg: "teach me DBMS theory",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
