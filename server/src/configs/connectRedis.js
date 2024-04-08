import redis from "redis";

const RedisClient = redis.createClient();

export const connectRedis = async () => {
  await RedisClient.connect();
  RedisClient.on("error", (err) => {
    console.error(`An error occurred with Redis: ${err}`);
  });
  console.log("Redis connected successfully ✅");
};

export const setKey = async (key, value) => {
  await RedisClient.set(key, value);
  return console.log("SetKey Thành công");
};

export const getkey = async (key) => {
  console.log(await RedisClient.get(key));
};

export const deleteKey = async (key) => {
  // Tạo một Promise để bao bọc hoạt động của RedisClient.del
  return new Promise((resolve, reject) => {
    RedisClient.del(key, (err, reply) => {
      if (err) {
        console.error(`Error deleting key ${key}: ${err}`);
        reject(err); // Phát hiện lỗi và reject Promise
        return;
      }
      console.log(`Deleted key ${key} successfully`);
      resolve(reply); // Hoàn thành Promise nếu xóa thành công
    });
  });
};
