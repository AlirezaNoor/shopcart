$(document).ready(function() {
    $('#addToCartBtn').on('click', function() {
      var selectedProduct = $('#productDropdown').val();
      var quantity = $('#quantity').val();
      
      // اضافه کردن کالا به سبد خرید
      $('#cartItems').append('<li><span class="delete-item">حذف</span> <strong>' + selectedProduct + '</strong>: ' + quantity + ' عدد</li>');
    });
  
    // حذف کالا از سبد خرید با کلیک بر روی دکمه "حذف"
    $(document).on('click', '.delete-item', function() {
      $(this).parent().remove();
    });
  });
  