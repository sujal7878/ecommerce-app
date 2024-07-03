# E-Commerce Application

## Setup

### Backend
1. Install dependencies:
    ```sh
    cd backend
    npm install
    ```

2. Create a `.env` file in the root directory with the following content:
    ```
    MONGO_URI=mongodb+srv://sujalverma1978:IuouupGphEYx1xCp@ecommerce.hlsdipq.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce
    JWT_SECRET=sabaoixe
    PORT=5000
    ```

3. Start the backend server:
    ```sh
    npm run dev
    ```

### Frontend
1. Install dependencies:
    ```sh
    cd frontend
    npm install
    ```

2. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` to view the application.

## Endpoints

### User Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate a user and return a JWT.

### Product Management
- `GET /api/products`: Retrieve a list of products.
- `GET /api/products/:id`: Retrieve details of a specific product.
- `POST /api/products`: Add a new product (admin only).
- `PUT /api/products/:id`: Update an existing product (admin only).
- `DELETE /api/products/:id`: Delete a product (admin only).

### Shopping Cart
- `GET /api/cart`: Retrieve the user's shopping cart.
- `POST /api/cart`: Add an item to the cart.
- `DELETE /api/cart/:productId`: Remove an item from the cart.

## Frontend Components
- `AuthForm`: Registration and login forms.
- `ProductList`: Display a list of products.
- `ProductDetail`: Display details of a selected product.
- `Cart`: Display the user's shopping cart and allow item removal.
