import httpService from "./http.service";

const telegramEndpoint = "telegram/";

const telegramService = {
  sendMessage: async (payload) => {
    const { data } = await httpService.post(telegramEndpoint, payload);
    return data;
  },
};

export default telegramService;
