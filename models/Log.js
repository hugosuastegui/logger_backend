const { model, Schema, SchemaType } = require("mongoose");

const logSchema = new Schema(
  {
    longitude: String,
    latitude: String,
    valid: {
      type: Boolean,
      default: true,
    },
    poi: {
      type: Schema.Types.ObjectId,
      ref: "Poi",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Log", logSchema);
