//db connection and id for str
import { connect } from "../database/database";
import { ObjectID } from "mongodb";

export const getTasks = async (req, res) => {
  try {
    const db = await connect();
    const result = await db.collection("tasks").find({}).toArray();
    res.json(result);
  } catch (e) {
    res.send(e);
  }
};

export const createTask = async (req, res) => {
  const db = await connect();
  const task = {
    title: req.body.title,
    description: req.body.description,
  };
  const result = await db.collection("tasks").insert(task);
  console.log(result);
  res.json(result.ops[0]);
};

export const getTask = async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  const result = await db.collection("tasks").findOne({ _id: ObjectID(id) });
  res.json(result);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("tasks").deleteOne({ _id: ObjectID(id) });
  res.json({
    message: `Task ${id} deleted`,
    result,
  });
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  const updateTask = {
    title: req.body.title,
    description: req.body.description,
  };
  const db = await connect();
  const result = await db
    .collection("tasks")
    .updateOne({ _id: ObjectID(id) }, { $set: updateTask });

  res.json({
    message: `Task ${id} updated`,
  });
};
