export const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageRequest = message => ({
  type: SEND_MESSAGE,
  payload: message
});
