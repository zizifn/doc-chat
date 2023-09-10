import { Request, Response } from "express-serve-static-core";
import { Document } from "langchain/document";
import { CharacterTextSplitter } from "langchain/text_splitter";

// https://js.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/character_text_splitter
export async function embeddings(
  req: Request,
  res: Response,
) {
  const raw = req.body.raw;
  if (!raw) {
    res.status(400).json({
      message: "raw can't be null",
    });
    return;
  }
  // split by "\n\n"
  const splitter = new CharacterTextSplitter({
    separator: "\r\n\r\n",
    chunkSize: 500,
    chunkOverlap: 10,
  });
  const output = await splitter.createDocuments([raw]);
  console.dir(output, { depth: 5 });
  console.dir(output.length);
  res.json({});

  // call openai embeddings
}
