$(document).ready(function() {
  // کدهای قبلی

  // اضافه کردن محصول به سبد خرید
  $('.dropdown-list li').click(function() {
    var product = $(this).data('product');
    $('.cart-items').append('<li data-product="' + product + '">' + product + ' <button class="remove-btn">حذف</button></li>');
    $('.dropdown-list').hide();
  });

  // حذف محصول از سبد خرید
  $('.cart-items').on('click', '.remove-btn', function() {
    $(this).parent().remove();
  });
});
