## Project Overview


This project is an Angular web application integrated with Firebase, demonstrating basic CRUD (Create, Read, Update, Delete) operations. The application allows users to interact with a Firestore database to manage data entries.


## Technologies Used

- Angular: A platform for building mobile and desktop web applications.


- Firebase: A comprehensive app development platform by Google, with Firestore as the database.


- AngularFire: The official library for Firebase and Angular, used for seamless integration.


## Features
### Create
Users can add new documents to the Firestore database. This is done through a form where users enter data, which is then sent to Firestore upon submission.

Relevant Files:

create.component.ts
create.component.html


### Read

The application fetches and displays documents from Firestore in real time. Data is displayed in a list or table format, allowing users to see the latest updates from the database.

Relevant Files:

read.component.ts
read.component.html

### Update
Users can update existing documents in Firestore. The application provides a form pre-populated with the selected document's data, which can be edited and saved, updating the document in the database.

Relevant Files:

update.component.ts
update.component.html

### Delete
The application allows users to delete documents from Firestore. Users can remove specific documents by providing their ID or selecting them from the list.

Relevant Files:

deletar.component.ts
deletar.component.html

## FirestoreDataService

### Methods

- addDataToBaseCollection: This method adds a new document to the Firestore collection. It takes data (like a question and answer) as arguments and uses Firestore's add method to create a new document in a specified collection.


- getAllItems: This method retrieves all documents from a specified Firestore collection.


- deleteFromBaseCollection: This method removes a document from the Firestore collection. It takes a document ID as an argument and uses Firestore's delete method to remove the document.


- updateBaseCollection: This method updates an existing document in the Firestore collection. It requires the document ID and the new data to set.


### Setup and Installation
Clone the Repository:

```
git clone [repository-url]
```
Install Dependencies:

```
npm install
```
Set Up Firebase:

```
Create a Firebase project and add your project's Firebase configuration to the environment files.
Run the Application:
```

```
ng serve
```

Navigate to http://localhost:4200/.
