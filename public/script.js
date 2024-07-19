const cart = [];

function addToCart(productId) {

    fetch(`/product/${productId}`)
        .then(response => response.json())
        .then(product => {
            const cartItem = cart.find(item => item.id === product.id);
        
           
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            displayCart();
            
        })
        .catch(error => console.error('Erreur de récupération du produit:', error));
        
        
    }
    
    function displayCart() {  
        
       
        const supprim =  document.getElementById("deletarticl"); 
        
     

        const order = document.getElementById("orderButton")
        
        const cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = ''; 
        cart.forEach(product => {
        const div = document.createElement('div');
        div.setAttribute("id","articlajouter");
        const prix =  `${product.price}`;
        const quantity = `${product.quantity}`;
        const total = document.createElement('div');
        total.setAttribute("id","total");
        if(product.quantity < 1){
            div.textContent == '';
            total.textContent == '';
            supprim.style.display = "none";
            order.style.display = "none"; 
        }else{
            div.textContent = `${product.name} - ${prix}€ (Quantité: ${quantity})`;
            total.textContent ="Total:"+ prix * quantity + "€";
            supprim.style.display = "block";
            order.style.display = "block"; 
        }
        
        cartDiv.appendChild(div);
        cartDiv.appendChild(total);

        const btnajout = document.getElementById("btnajout");

        const deletarticl = document.getElementById("deletarticl");
        deletarticl.addEventListener("click", function(){
            div.textCocntent = `${product.name} - ${prix}€ (Quantité: ${quantity})`;

            
           
        })
        
    });
    
    
    
    
    
    
    
} 
function deletarticl(productId) {

    fetch(`/product/${productId}`)
        .then(response => response.json())
        .then(product => {
            const cartItem = cart.find(item => item.id === product.id);
          
           
                if(cartItem.quantity > 0){
                    cartItem.quantity--;
                    
                }
               
            
            displayCart();
            
        })
        .catch(error => console.error('Erreur de récupération du produit:', error));

        
    }



/*function deletarticl(){
    alert("hello");

}*/

function placeOrder() {
    alert("hello")
    fetch('/success', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart })
    })
    .then(response => response.json())
    .then(session => {
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(result => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch(error => console.error('Erreur lors de la commande:', error));
}



document.addEventListener('DOMContentLoaded', displayCart);