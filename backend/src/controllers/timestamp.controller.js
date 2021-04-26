import Timestamp from "../models/Timestamp";

export async function getTimestamps(req, res) {
  try {
    const timestamps = await Timestamp.findAll();
    res.json({
      data: timestamps,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createTimestamp(req, res) {
  const { timestamp } = req.body;
  try {
    let newTimestamp = await Timestamp.create(
      {
        timestamp,
      },
      {
        fields: ["timestamp"],
      }
    );
    if (newTimestamp) {
      return res.json({
        message: "Timestamp created successfully",
        data: newTimestamp,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneTimestamp(req, res) {
  try {
    const { id } = req.params;
    const timestamp = await Timestamp.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: timestamp,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteTimestamp(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Timestamp.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Timestamp deleted successfully",
      count: deleteRowCount,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function updateTimestamp(req, res) {
  const { id } = req.params;
  const { timestamp } = req.body;
  try {
    const timestamps = await Timestamp.findAll({
      attributes: ["id", "timestamp"],
      where: {
        id,
      },
    });

    if (timestamps.length > 0) {
      timestamps.forEach(async (time) => {
        await time.update({
          timestamp,
        });
      });
    }

    return res.json({
      message: "Timestamp updated successfully",
      data: timestamps,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
}
