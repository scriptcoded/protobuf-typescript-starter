import { Message } from './generated/protobuf'

const myMessage = Message.create({
  test: Boolean()
})

console.log(myMessage.toJSON())
