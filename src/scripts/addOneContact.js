import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";

export const addOneContact = async () => {
    try {
        const newContact = createFakeContact();
        const existingContacts = await readContacts();
        const updatedContacts = [...existingContacts, newContact];
        await writeContacts(updatedContacts);
        console.log("Contact added successfully:", newContact.name);
    } catch (error) {
        console.error("Error adding contact:", error);
    }
};

addOneContact();
