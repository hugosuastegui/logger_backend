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
  const poi = await Poi.findById(poiId);
  const { longitude, latitude } = req.body;
  const log = await Log.create({
    longitude,
    latitude,
    poi: poiId,
    user: req.user._id,
    valid: false,
  });

  await User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $push: { collabLogs: log },
    }
  );

  if (
    getMinutesfromTimestamp(log.createdAt) <
      toMin(poi.checkinTime) - poi.tolerance &&
    checkLocation(poi.longitude, poi.latitude, log.longitude, log.latitude, 4)
  ) {
    log.valid = true;
    log.save();
  }

  res.status(200).json({ log });
};

exports.deleteLog = async (req, res) => {
  const { logId } = req.params;
  await Log.findByIdAndRemove(logId);
  res.status(200).json({ message: "Log Deleted" });
};

function getMinutesfromTimestamp(timestamp) {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const min = date.getMinutes();
  return hour * 60 + min;
}

function toMin(string) {
  console.log(string);
  const array = string.split(":");
  return parseInt(array[0] * 60) + parseInt(array[1]);
}

function checkLocation(lngPoi, latPoi, lngLog, latPoi, precision) {
  if (precision > 7) precision = 7;

  const a = [
    ("" + lngPoi).split(".")[0],
    ("" + lngPoi).split(".")[1].slice(0, precision),
  ].join(".");
  const b = [
    ("" + latPoi).split(".")[0],
    ("" + latPoi).split(".")[1].slice(0, precision),
  ].join(".");
  const a1 = [
    ("" + lngLog).split(".")[0],
    ("" + lngLog).split(".")[1].slice(0, precision),
  ].join(".");
  const b1 = [
    ("" + latPoi).split(".")[0],
    ("" + latPoi).split(".")[1].slice(0, precision),
  ].join(".");
  console.log(a, a1, b, b1);
  if (a === a1 && b === b1) {
    return true;
  } else {
    return false;
  }
}
