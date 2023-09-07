# Academic Anatomic Angular Store



# AngularStore Application:

   🎛️ HTML Structure: 
   
   The HTML structure of the application includes basic metadata and imports necessary for the Angular application. It sets up the app-root component.

🅰️ Angular Bootstrapping: 

      The Angular application is bootstrapped in the main.ts file using       platformBrowserDynamic().bootstrapModule(AppModule).
   
🧱 Header Component (app-header):

    * Cart Quantity: The header component displays the total quantity of items in the cart, which dynamically updates as items are added or removed.
    * Clear Cart: Users can clear the cart by clicking a "Clear Cart" button.
    * Total Price: The header displays the total price of items in the cart.
    * Navigation: The header may also include navigation elements (not shown in the provided code).
 		🛒Cart Component (app-cart):
    * Cart Items: The cart component displays a list of items in the cart, including product images, names, prices, quantities, and total prices.
    * Item Actions: Users can perform actions on items in the cart, such as removing an item, adding or reducing the quantity, and clearing the entire cart.
    * Checkout: The component includes a button for checkout that appears to connect to a Stripe integration for payment processing.

   🗂️ Cart Service (CartService):
   
    * Cart Management: The service is responsible for managing the cart's state, including adding, removing, and updating items.
    * Quantity Tracking: It keeps track of the quantity of each item in the cart.
    * Total Price Calculation: The service calculates and provides the total price of items in the cart.
    * Clearing the Cart: It allows for clearing the cart entirely.
    * Snackbar Notifications: The service displays snackbar notifications for cart-related actions.

🏤 Store Service (StoreService):

    * HTTP Requests: This service handles HTTP requests to a fake store API for fetching product data.
    * Product Retrieval: It provides methods for fetching product data and categories.
    * Product Data: The service handles retrieval of product details such as ID, title, price, category, description, and image URL.

💵 Stripe Integration: 

   The application includes integration with Stripe for processing payments, and it appears to generate a Stripe session for checkout.
   
🖼️ Styling:

   The application may include CSS styling (not shown in the provided code) for visual presentation and user-friendly design.
  		
 📈 Error Handling: 
 
    While not explicitly visible in the provided code, error handling for API requests and other possible errors is expected in the application.

