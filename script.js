var duoProduct = document.querySelector('.duo-product');   
    
const ajaxCart = () => {
  const duo = {
    id: duoProduct.dataset.variant,
    quantity: "1",
    form_type: "product",
    utf8: "✓"
  }
  
  fetch("/cart/add.js", {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(duo)
  }).then(res => {
    document.querySelector('[data-ajax-cart-trigger]').classList.add('show-mini-cart');
    Shopify.theme.jsAjaxCart.updateView();
  });
}
