const Poi = require("../models/PoI");
const User = require("../models/User");
exports.getPois = async (req, res) => {
  const employer = req.user.id;
  const pois = await Poi.find({ employer });
  res.status(200).json({ pois });
};

exports.getPoi = async (req, res) => {
  const { poiId } = req.params;
  const poi = await Poi.findById(poiId).populate("logs");
  res.status(200).json({ poi });
};

exports.createPoi = async (req, res) => {
  const {
    name,
    longitude,
    latitude,
    checkinTime,
    tolerance,
    weekdays,
  } = req.body;
  console.log(req.body);
  const poi = await Poi.create({
    name,
    longitude,
    latitude,
    checkinTime: toMin(checkinTime),
    tolerance,
    weekdays,
    employer: req.user.id,
  });
  const user = await User.findByIdAndUpdate(req.user._id, {
    $push: { employerPoIs: poi },
  });
  res.status(200).json({ user });
};

exports.updatePoi = async (req, res) => {
  const poiId = req.params.poiId;
  const { name, location, checkinTimes, checkoutTimes, weekdays } = req.body;
  const poi = await Poi.findByIdAndUpdate(
    poiId,
    {
      name,
      location,
      checkinTimes,
      checkoutTimes,
      weekdays,
    },
    { new: true }
  );
  console.log(poi);
  res.status(200).json({ poi });
};

exports.deletePoi = async (req, res) => {
  const { poiId } = req.params;
  await Poi.findByIdAndRemove(poiId);
  res.status(200).json({ message: "deleted Poi" });
};

function toMin(string) {
  const array = string.split(":");
  return parseInt(array[0] * 60) + parseInt(array[1]);
}
