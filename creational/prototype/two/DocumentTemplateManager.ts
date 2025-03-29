import { Document } from "./Document";

export class DocumentTemplateManager {
  private static templates: Map<string, Document> = new Map();

  public static addTemplate(name: string, doc: Document): void {
    this.templates.set(name, doc);
  }

  public static createDocument(templateName: string): Document {
    const template = this.templates.get(templateName);

    if (!template) {
      throw new Error(`Template not found: ${templateName}`);
    }

    return template.clone();
  }
}
