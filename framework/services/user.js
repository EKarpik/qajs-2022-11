import supertest from "supertest";
import config from "../config/config";
import createUser from "../fixtures/userFixture";

const { url } = config.url;

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

//контроллер юзера
const newUser = {
  //создание юзера
  user: ({ userName, password }) => {
    return supertest(url)
      .post(`/Account/v1/User`)
      .set("Accept", "application/json")
      .send({ userName, password });
  },
};

//получение информации о юзере get user
const userInfo = async ({ UUID, token }) => {
  return supertest(url)
    .get(`/Account/v1/User/${UUID}`)
    .set("Accept", "application/json")
    .set("Authorisation", `Bearer ${token}`);
};

//удаление юзера
const delUser = async ({ UUID, token }) => {
  return supertest(url)
    .post("/Account/v1/User/"`${UUID}`)
    .set("Accept", "application/json")
    .set("Authorisation", `Bearer ${token}`);
};

export default {
  delUser,
  userInfo,
  newUser,
};
