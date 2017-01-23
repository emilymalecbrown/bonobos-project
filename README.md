# Bonobos Project
**Setup**

- npm install
- make sure postgres is running at port:5432
- open psql
   - create database bonobos;
   - \q to quit
- npm run seed
- npm start
- npm test (if you please)

**API Endpoints**

| Method  | Endpoint | Usage | Returns |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /api/products  | Get all products  | Products  |
| GET  | /api/products/:id  | Get one product  | Product  |
| GET  | /api/inventory/  | Get all inventory  | Inventory  |
| GET  | /api/inventory/:productid  | Gets all inventory by product_id | Inventory  |
| GET  | /api/inventory/size/:size  | Get all inventory by waist size  | Inventory  |
| GET  | /api/inventory/waist/:waist/length/:length  | Get all inventory waist and length sizes | Inventory  |
| GET  | /api/inventory/:productid/size/:size  | Get all inventory by product id and waist size  | Inventory  |
| GET  | /api/inventory/:productid/waist/:waist/length/:length  | Get all inventory productid and waist and length size | Inventory  |
| GET  | /api/inventory/style/:style  | Get all inventory in same style | Inventory  |
| GET  | /api/inventory/:productid/style/:style  | Get all inventory by product_id and style | Inventory  |
