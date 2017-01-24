# Bonobos Project
**Setup**

- git clone this repo
- npm install
- make sure postgres is running at port:5432
- open psql and run
   - create database bonobos;
   - \q to quit
- npm run seed
- npm start
- npm test (if you please)

**Approach**

 In the backend I utilized a PostgreSQL database and Sequelize as an ORM. I wrote a seed file that uses a few custom functions to parse the two CSV's provided into objects that map onto Product and Inventory relations. I wrote a RESTful API in Express, for now a series of GET requests to fetch data loaded into the database. Testing for each route is done using Mocha, Chai and Supertest. The front-end is built with Angular for the view and UI-Router for state transition. The choice to use Angular came from my comfort in creating repeated blocks of code with ng-repeat (great for table rows), and I made use of CSS3 flexboxes for responsivity in the layout.

**API Endpoints**

| Method  | Endpoint | Usage | Returns |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /api/products  | Get all products  | Products  |
| GET  | /api/products/:id  | Get one product  | Product  |
| GET  | /api/inventory/  | Get all inventory  | Inventory  |
| GET  | /api/inventory/:productid  | Gets all inventory by product_id | Inventory  |
| GET  | /api/inventory/size/:size  | Get all inventory by waist size  | Inventory  |
| GET  | /api/inventory/:productid/size/:size  | Get all inventory by product id and waist size  | Inventory  |
| GET  | /api/inventory/waist/:waist/length/:length  | Get all inventory waist and length sizes | Inventory  |
| GET  | /api/inventory/:productid/waist/:waist/length/:length  | Get all inventory productid and waist and length size | Inventory  |
| GET*  | /api/inventory/style/:style | Get all inventory in same style | Inventory  |
| GET*  | /api/inventory/:productid/style/:style  | Get all inventory by product_id and style | Inventory  |

*Note: use spaces or percent encoding for multi word string-fields (e.g. 'jet blues' or 'jet%20blues')

**Improvements**
- [ ] Make parsing of CSV data more extensible, right now the functions written in db/seed will only deal with the dirtiness (single quotes, unescaped commas, numbers as strings) of the two CSV files used in this project
- [ ] Potentially use query strings for values after inventory/:products to reduce number of routes
- [ ] Write hooks, instance/class methods, getters/setters, and associations based on other features the inventory system might need
- [ ] Sort implementation isn't perfect, if you have toggled another column it will first sort in descending order
- [ ] Sorting feature does not sort on multiple values, which would be more useful than just sorting on one field
- [ ] Add filters to inventory view
