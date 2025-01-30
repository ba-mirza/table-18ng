# Documentation
## Features

| Feature                                      | Status  | Description                                                      |
|----------------------------------------------|---------|------------------------------------------------------------------|
| **Sorting**                                  | ✅ Done  | Users can sort data by clicking on column headers.               |
| **Filtering/Search**                         | ✅ Done  | Users can filter/search data via an input field.                 |
| **Entries per Page**                         | ✅ Done  | Users can specify how many entries to display per page.         |
| **Pagination**                               | ✅ Done  | Users can change pages to navigate through the data.             |
| **Column Visibility Toggle**                 | ✅ Done  | Users can hide or show columns dynamically.                      |
| **Data Source**                              | ✅ Done  | An example JSON file is provided as the data source for the table. |

## Features Explained

### 1. **Sorting**
Users can click on any column header to sort the table data by that column in ascending or descending order. Sorting behavior is visually indicated by arrows in the column headers.

### 2. **Filtering/Search**
Users can filter or search through the data by entering text in a search input field. The table will dynamically update to show only the rows that match the entered search query.

### 3. **Entries per Page**
Users can select the number of entries they want to display per page. This helps in managing large datasets by limiting the number of visible rows at a time.

### 4. **Pagination**
The table supports pagination, enabling users to navigate between multiple pages of data. Controls are provided for easy navigation to the next, previous, or specific page.

### 5. **Column Visibility Toggle**
A feature that allows users to hide or show specific columns dynamically. This can be useful for focusing on certain data points without cluttering the table with irrelevant columns.

### 6. **Example JSON File**
An example JSON file has been provided as the data source for the table. It contains mock user data, which can be used to demonstrate the functionality of the table features.

---

## Example Data

Below is a sample data format used for the table:

```json
[
  {
    "_id": "5fe1933e71260abb214c869e",
    "isActive": false,
    "balance": "$1,942.91",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": {
      "first": "Candice",
      "last": "Mack"
    },
    "company": "COMBOGENE",
    "email": "candice.mack@combogene.info",
    "address": "491 Pine Street, Wawona, Oklahoma, 2443",
    "tags": ["fugiat", "duis", "nisi", "veniam", "officia"],
    "favoriteFruit": "apple"
  },
  {
    "_id": "5fe1933e71260abb214c869f",
    "isActive": true,
    "balance": "$2,500.00",
    "picture": "http://placehold.it/32x32",
    "age": 45,
    "name": {
      "first": "John",
      "last": "Doe"
    },
    "company": "GENOMIX",
    "email": "john.doe@genomix.com",
    "address": "123 Elm Street, Springfield, Illinois, 1234",
    "tags": ["lab", "research", "science"],
    "favoriteFruit": "banana"
  }
]
```

---

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    ```

2. **Install dependencies**:
   Navigate to the project directory and install the necessary dependencies:
    ```bash
    npm install
    ```

3. **Run the project**:
   Start the development server:
    ```bash
    npm run start
    ```

4. **Interact with the table**:
   Once the app is running, you can interact with the table by:
  - Sorting columns by clicking on the headers.
  - Filtering data using the search input field.
  - Adjusting the number of entries per page.
  - Navigating between pages.
  - Hiding or showing columns as per your preference.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
