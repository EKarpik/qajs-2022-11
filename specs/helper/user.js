import supertest from "supertest";
import config from "../config";
const { url } = config;

let token = "";

//контроллер user

// const user = {
//     //функция авторизации

//     login: (payload) => {
//         return supertest(url)
//         .post('/api/v1/login')
//         .set('Accept', 'application/json')
//         .send(payload)
//     },

//     async getAuthToken(){
//         const payload = config.credentials
//         const res = await this.login(payload)
//         return res.body.token
//     },

//     async getAuthTokenInCache(){
//         token = await this.getAuthToken;
//         return token;
//     },

//     user:(token) => {
//         return supertest(url)
//         .get('api/v1/user')
//         .set('Accept', 'application/json')
//         .set('Authorisation',`Bearer ${token}`)
//     }
// }
// export default user

//контроллеры user для bookstore

const user = {
  //функция авторизации

  login: (payload) => {
    return supertest(url)
      .post("/Account/v1/Authorized")
      .set("Accept", "application/json")
      .send(payload);
  },

  async getAuthToken() {
    const payload = config.credentials;
    const res = await this.login(payload);
    return res.body.token;
  },

  //забирает токен из кеша
  async getAuthTokenInCache() {
    token = await this.getAuthToken;
    return token;
  },

  //созание юзера
  async createUser (userName, password) {
    return supertest(url)
      .post("/Account/v1/User")
      .set("Accept", "application/json")
      .send(userName, password);
  },
//удаление юзера
async delUser (id) {
    return supertest(url)
      .post("/Account/v1/User/{UUID}")
      .set("Accept", "application/json")
      .send(id);
  },

  //получение информации о юзере
  userInfo: (token) => {
    return supertest(url)
      .get("/Account/v1/User/{UUID}")
      .set("Accept", "application/json")
      .set("Authorisation", `Bearer ${token}`);
  },
};
export default user;
