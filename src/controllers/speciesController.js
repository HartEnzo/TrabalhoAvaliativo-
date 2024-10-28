import Species from "../models/speciesModel.js";

const store = async (req, res) => {
  try {
    const { name, rarity, discoveryLocation, documented } = req.body;

    await Species.create({ name, rarity, discoveryLocation, documented });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Species.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const show = async (req, res) => {
    try {
      const content = await Species.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };

const update = async (req, res) => {
  try {
    const { name, rarity, discoveryLocation, documented } = req.body;

    await Species.findByIdAndUpdate(req.params.id, {
        name,
        rarity,
        discoveryLocation,
        documented
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Species.findByIdAndDelete(req.params.id).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};