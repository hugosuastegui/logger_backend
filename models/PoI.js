const { model, Schema } = require("mongoose");

const poiSchema = new Schema(
  {
    name: String,
    longitude: Number,
    latitude: Number,
    checkinTime: String,
    tolerance: String,
    weekdays: {
      type: [String],
      enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    logs: {
      type: Schema.Types.ObjectId,
      ref: "Log",
    },
    employer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("PoI", poiSchema);
