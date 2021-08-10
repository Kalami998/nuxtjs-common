class info {
  // constructor() {
  name = "hzm";
  guid = "123123";
  token = "123123";
  // }
}
export default function(user, inject) {
  inject("storeCommit", new info());
}
