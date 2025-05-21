import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
            console.log("No contacts to remove.");
            return;
        }
        const updatedContacts = contacts.slice(0, -1);
        await writeContacts(updatedContacts);
        console.log("Last contact removed successfully.");
    } catch (error) {
        console.error("Error removing last contact:", error);
    }
};

removeLastContact();
