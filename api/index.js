import Fastify from "fastify";
import whoiser from "whoiser";

const app = Fastify();

app.get("/:query", async (req, res) => {
  const { query } = req.params;

  try {
    const response = await whoiser(query);

    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default async function handler(req, reply) {
  await app.ready();
  app.server.emit("request", req, reply);
}
