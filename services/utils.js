/**
 * Parse current url and break it into resource, id and verb.
 * @return {Object} Path params.
 */
export const parseRequestUrl = () => {
  // Convert location hash into an url.
  const path = location.hash.slice(2).toLowerCase() || "/";

  // Split url into params array: [resource, id, verb].
  const params = path.split("/");

  // Build request variable.
  const request = {
    resource: params[0] || null,
    id: params[1] || null,
    verb: params[2] || null,
  };

  // Print it in the console.
  console.log("(App) Parsed url:", request);

  // Return and object with params.
  return request;
};

// chat util
export const uniqueIdGenerator = () => {
  let num = 1;
  return () => {
    return (num += 1);
  };
};

const uniqueId = uniqueIdGenerator();

export const botMessage = (message) => {
  if (message.type === "bot") {
    return true;
  }
  return false;
};

export const createChatMessage = (message, type) => {
  return {
    message: message,
    type: type,
    id: uniqueId(),
  };
};

export const createChatBotMessage = (message, options) => {
  return {
    ...createChatMessage(message, "bot"),
    ...options,
    loading: true,
  };
};

export const createClientMessage = (message) => {
  return createChatMessage(message, "user");
};

export const callIfExists = (func, ...args) => {
  if (func) {
    return func(...args);
  }
};

export const getObject = (object) => {
  if (typeof object === "object") return object;
  return {};
};

export const getWidgets = (config) => {
  if (config.widgets) {
    return config.widgets;
  }
  return [];
};

export const scrollIntoView = () => {
  const chatContainer = document.querySelector(
    ".vanilla-chatbot-kit-chat-message-container"
  );

  chatContainer.scrollTop = chatContainer.scrollHeight;
};

export const validateProps = (config, MessageParser) => {
  const errors = [];
  if (!config.initialMessages) {
    errors.push(
      "Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."
    );
  }

  const messageParser = new MessageParser();
  if (!messageParser["parse"]) {
    errors.push(
      "Messageparser must implement the method 'parse', please add this method to your object. The signature is parse(message: string)."
    );
  }

  return errors;
};
