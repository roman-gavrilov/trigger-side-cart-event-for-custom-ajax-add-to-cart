# trigger-side-cart-event-for-custom-ajax-add-to-cart-without-form
Trigger side cart event for custom ajax add to cart on shopify flex theme

On Shopify flex theme, sometimes you have to make custom ajax add to cart action without form!  
Of course, you can send product data to /cart/add.js with ajax. but In this case, theme's side cart will not work like theme action. You will see the updated mini cart after refresh the page

In this case, you'd be able to use my code

After click add to cart btn, Shopify flex theme side cart will open and will add line-item to mini cart

## Code

```
  fetch("/cart/add.js", {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(data)
  }).then(res => {
    document.querySelector('[data-ajax-cart-trigger]').classList.add('show-mini-cart');
    Shopify.theme.jsAjaxCart.updateView();
  });
```

## Important
You must render this js after ```z__jsAjaxCart.js``` 

## Contact me
If you have question, please reach out to me here!

gmail: roman.gavrilov.0309@gmail.com<br>
skype: live:.cid.47c14b6b0b7e8b07
