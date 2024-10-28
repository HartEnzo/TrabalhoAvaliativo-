import { Schema, model } from "mongoose";

const expeditionSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  participants: {
    type: [Schema.ObjectId],
    ref: "Explorer",
  },
  speciesFound: {
    type: [Schema.ObjectId],
    ref: "Species",
  }
});

const Expedition = model("Expedition", expeditionSchema);

export default Expedition;