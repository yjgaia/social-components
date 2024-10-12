import { DomNode } from "@common-module/app";
import Author from "./Author.js";

export default class AuthorDisplay extends DomNode {
  constructor(author: Author) {
    super(".author-display");
  }
}
