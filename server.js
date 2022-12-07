const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

//database connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log(`Todo App Backend is connected with database successfully`);
});
const port = process.env.PORT || 5000;

/* const uri = `mongodb+srv://myApp1:mmLqUQKz9L4N5M2Y@cluster0.nrqlb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
}); 
async function run() {
  try {
    await client.connect();
    const database = client.db("todos");
    const taskCollection = database.collection("taskCollection");
    //get api
    app.get("/task", async (req, res) => {
      const page = req.query.page;
      const size = parseInt(req.query.size);
      const cursor = taskCollection.find().sort({ $natural: -1 });
      let task;
      const count = await cursor.count();
      // pagination Selection
      if (page) {
        task = await cursor
          .skip(page * size)
          .limit(size)
          .toArray();
      } else {
        task = await cursor.limit(6).toArray();
      }
      res.send({
        count,
        task,
      });
    });

    // add a task
    app.post("/task", async (req, res) => {
      const newTask = req.body;
      const result = await taskCollection.insertOne(newTask);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      res.json(result);
    });

    //update a task data
    app.put("/task/update/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const updateData = {
        $set: {
          title: req.body.title,
          description: req.body.description,
          time: req.body.time,
          date: req.body.date,
        },
      };
      const result = await taskCollection.updateMany(query, updateData);
      console.log(result);
      res.json(result);
    });
    //pin a task route
    app.put("/pin/task/:id", async (req, res) => {
      console.log(req.path);
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const updatePin = {
        $set: {
          pin: true,
        },
      };
      const result = await taskCollection.updateOne(query, updatePin);
      res.json(result);
    });
    //unpin task route
    app.put("/unpin/task/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const updatePin = {
        $set: {
          pin: false,
        },
      };
      const result = await taskCollection.updateOne(query, updatePin);
      res.json(result);
    });

    //complete task route
    app.put("/complete/task/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const completeTask = {
        $set: {
          complete: true,
          pin: false,
        },
      };
      const result = await taskCollection.updateMany(query, completeTask);
      console.log(result);
      res.json(result);
    });

    //delete task api
    app.delete("/task/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await taskCollection.deleteOne(query);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
*/

app.listen(port, () => {
  console.log("App is listening on port", port);
});
