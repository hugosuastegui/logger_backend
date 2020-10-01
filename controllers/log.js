const Log = require("../models/Log");
const Poi = require("../models/PoI");
const User = require("../models/User");

exports.getLogs = async (req, res) => {
  const userId = req.user.id;
  const logs = await Log.find({ user: userId });
  res.status(200).json({ logs });
};

exports.getLog = async (req, res) => {
  const { logId } = req.params;
  const log = await Log.findById(logId);
  res.status(200).json({ log });
};

exports.createLog = async (req, res) => {
  const { poiId } = req.params;
  const poi = Poi.findById(poiId);
  const { longitude, latitude } = req.body;
  const log = await Log.create({
    longitude,
    latitude,
    poi: poiId,
    user: req.user._id,
    valid: false,
  });

  if (getMinutesfromTimestamp(log.createdAt) < poi.checkinTime) {
    log.valid = true;
    log.save();
  }
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $push: { collabLogs: log },
    }
  );
  console.log(log);
  console.log(poi);
  console.log(user);
  res.status(200).json({ log });
};

exports.deleteLog = async (req, res) => {
  const { logId } = req.params;
  await Log.findByIdAndRemove(logId);
  res.status(200).json({ message: "Log Deleted" });
};

function getMinutesfromTimestamp(timestamp) {
  const hour = timestamp.slice(11, 16);
  const array = hour.split(":");
  return parseInt(array[0]) * 60 + parseInt(array[1]);
}
