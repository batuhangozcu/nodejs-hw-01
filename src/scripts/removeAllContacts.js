import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
            console.log("No contacts to remove.");
            return;
        }
        await writeContacts([]);
        console.log("All contacts removed successfully.");
    } catch (error) {
        console.error("Error removing contacts:", error);
    }
};

removeAllContacts();
