import { Schema, model } from "mongoose";

const SpecieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discoveryLocation: {
    type: String,
    required: true,
  },
  rarity: {
    type: Number,
    required: true,
  },
  documented: {
    type: Boolean,
    required: true,
  }
});

const Specie = model("Specie", SpecieSchema);

export default Specie;