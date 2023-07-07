const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContact = await getContactById(id);
      console.log(getContact);
      break;

    case "remove":
      const removeById = await removeContact(id);
      console.log(removeById);
      break;

    case "add":
      const addById = await addContact(name, email, phone);
      console.log(addById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
