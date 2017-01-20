# Bonobos Project
**Setup**
- npm install 
- make sure postgres is running at port:5432
- open psql 
   - create database bonobos;
   - \q to quit 
- npm run seed
- npm start

**API Endpoints**

| Method  | Endpoint | Usage | Returns |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /api/products  | Get all products  | Products  |
| GET  | /api/products/:id  | Get one product  | Product  |
| GET  | /api/inventory/  | Get all inventory  | Inventory  |
| GET  | /api/inventory/:productid  | Gets all inventory by product_id | Inventory  |
| GET  | /api/inventory/:size  | Get all inventory by waist size  | Inventory  |
| GET  | /api/inventory/:waist/:length  | Get all inventory waist and length sizes | Inventory  |
