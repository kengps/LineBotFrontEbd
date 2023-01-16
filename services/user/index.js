const User = require("../../models/user");

//*การสร้าง User
exports.CreateUser = async (userId, displayName, pictureUrl) => {
  return await User.create({
    user_id: userId,
    display_name: displayName,
    picture_url: pictureUrl,
  });
};

//*ตรวจสอบ User ว่ามีแล้วหรือไม่
exports.isActiveUser = async (userId) => {
  return await User.findOne({ where: { user_id: userId } });
};

//*การลบ User ออก

exports.deleteUser = async (userId) => {
  return await User.destroy({ where: { user_id: userId } });
};

//* การ Update

exports.updateUser = async (userId, isActive) => {
  return await User.update(
    {
      is_active: isActive,
    },
    {
      where: {
        user_id: userId,
      },
    }
  );
};

exports.isUpdateUser = async (
  userId,
  isActive,
  displayName,
  pictureUrl,
  userPhone
) => {
  return await User.update(
    {
      user_id: userId,

      is_active: isActive,
      display_name:displayName,
      picture_url: pictureUrl,
      user_phone: userPhone
    },
    {
      where: {
        user_id: userId,
      },
    }
  );
};
