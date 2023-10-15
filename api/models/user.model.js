import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
