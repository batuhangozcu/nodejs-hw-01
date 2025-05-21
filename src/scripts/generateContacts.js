import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (numberOfContacts) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];

    for (let i = 0; i < numberOfContacts; i++) {
      const newContact = createFakeContact();
      newContacts.push(newContact);
    }

    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Generated ${numberOfContacts} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};
generateContacts(5);
