import { TextDocument } from "./TextDocument";
import { DocumentTemplateManager } from "./DocumentTemplateManager";

function main() {
  DocumentTemplateManager.addTemplate(
    "welcome",
    new TextDocument("Welcome, {name}!")
  );

  DocumentTemplateManager.addTemplate(
    "meeting",
    new TextDocument("Meeting scheduled on {date} at {time}")
  );

  const welcomeDoc = DocumentTemplateManager.createDocument("welcome");
  welcomeDoc.setContent(welcomeDoc.getContent().replace("{name}", "John Doe"));

  console.log("Welcome document: " + welcomeDoc.getContent());

  const meetingDoc = DocumentTemplateManager.createDocument("meeting");
  meetingDoc.setContent(
    meetingDoc
      .getContent()
      .replace("{date}", "2024-10-01")
      .replace("{time}", "14:00")
  );

  console.log("Meeting document: " + meetingDoc.getContent());
}

main();
