 $(".drop__down.invest").click(function() {
     $(this).toggleClass('visible');
 });
 $(".csll__item").click(function() {
     const currency = $(this).data('currency');

     $('#calcMiningCurr, #calcInvestCurr').val(currency);

     $(".csll__item").removeClass("check");
     $(this).toggleClass('check');


 });
 $(".plans__tabs button").click(function() {
     $(".plans__tabs button").removeClass("check");
     $(this).toggleClass('check');
 });
 $(".planTub__standart").click(function() {
     $(".standartPlans").addClass("visible");
     $(".premiumPlans").removeClass("visible");
 });
 $(".planTub__premium").click(function() {
     $(".standartPlans").removeClass("visible");
     $(".premiumPlans").addClass("visible");
 });

 $(".amount__item-line-row.drop__down").click(function() {
     $(this).toggleClass('visible');
 });
 $(".amount__drop-item").click(function() {
     $(".amount__drop-item").removeClass("check");
     $(this).toggleClass('check');
 });

 function faqList() {
     $('.faq__item-answer').hide();

     $('.faq__item-body').click(function() {
         $(this).toggleClass('open');
         $(this).find('.faq__item-answer').slideToggle('fast');
     });
 }

 faqList();

 function SignIn() {
     $('.login__action,.msC__startButton,.start__mining').click(function() {
         $('.modal__overflow-layer').addClass('visible');
         $('.modal__sign-in').addClass('visible');
     });
 }

 SignIn();

 function SignUp() {
     $('.reg__action-link').click(function() {
         $('.modal__sign-in').removeClass('visible');
         $('.modal__sign-up').addClass('visible');
     });
 }
 $('.registration__action,.getStart,.sign__up-action').click(function() {
     $('.modal__overflow-layer').toggleClass('visible');
     $('.modal__sign-up').addClass('visible');
 });

 SignUp();

 function closeModal() {
     $('.modal__close, .hide_modal').click(function() {
         $('.modal__overflow-layer').removeClass('visible');
         $('.modal__body').removeClass('visible');
     });
 }

 closeModal();

 function forgotPass() {
     $('.forgot__action-link').click(function() {
         $('.modal__sign-in').removeClass('visible');
         $('.modal__forgot').addClass('visible');
     });
 }

 forgotPass();

 function depositModal() {
     $('.cSLi__body ').click(function() {
         $('.modal__overflow-layer,.modal__deposit').addClass('visible');
     });
 }

 depositModal();


 $(".bonus__button,.get__bonus-button,.fP_bonus").click(function() {
     $(".modal__bonus,.modal__overflow-layer,.bonus__button").toggleClass("visible");
 });
 $(".mobile__button").click(function() {
     $("body").toggleClass("visible__nav");
 });
 $(".dtc__i-plus").click(function() {
     var input = $(this).siblings("input");
     var currentValue = parseFloat(input.val());
     var newValue = currentValue + 1;
     input.val(newValue);
 });

 $(".dtc__i-minus").click(function() {
     var input = $(this).siblings("input");
     var currentValue = parseFloat(input.val());
     var newValue = currentValue - 1;
     if (newValue < 0) {
         newValue = 0;
     }
     input.val(newValue);
 });


 function copyModalAdres() {
     // Выбираем текст для копирования
     var textToCopy = $('.modalAdress').val();

     // Создаем временный элемент textarea для копирования
     var tempTextarea = $('<textarea>');
     tempTextarea.val(textToCopy);
     $('body').append(tempTextarea);

     // Выделяем текст внутри textarea
     tempTextarea.select();
     tempTextarea[0].setSelectionRange(0, 99999); // Для мобильных устройств

     // Копируем текст в буфер обмена
     document.execCommand("copy");

     // Удаляем временный элемент textarea
     tempTextarea.remove();
 }

 $('.copy__modalAdres').on('click', function() {
     copyModalAdres();
 });

 $('.modalAdress').off('click').on('click', function() {
     copyModalAdres();
 });

 function copyAffiliateLink() {
     // Выбираем текст для копирования
     var textToCopy = $('.urls__copylink').text();

     // Создаем временный элемент textarea для копирования
     var tempTextarea = $('<textarea>');
     tempTextarea.val(textToCopy);
     $('body').append(tempTextarea);

     // Выделяем текст внутри textarea
     tempTextarea.select();
     tempTextarea[0].setSelectionRange(0, 99999); // Для мобильных устройств

     // Копируем текст в буфер обмена
     document.execCommand("copy");

     // Удаляем временный элемент textarea
     tempTextarea.remove();
 }

 // Назначаем обработчик клика на кнопку urls__copy-button
 $('.urls__copy-button').click(function() {
     copyAffiliateLink();
 });

 // $(".mining__invest-body").click(function(){  
 //    $(".mining__invest-body").removeClass("select");  		     
 //    $(this).toggleClass('select');	     
 // }); 
 $(".mn__reinvest-btn").click(function() {
     $(".modal__reinvest,.modal__overflow-layer").toggleClass("visible");
 });
 $(".mn__withdrawal-btn").click(function() {
     const curname = $(this).data('curname');
     const iso = $(this).data('iso');
     const amount = $(this).data('amount');

     if (iso == 'xrp') {
         $('.tag_block').show();
     } else {
         $('.tag_block').hide();
     }

     $('#withModalCurName').text(curname);
     $('#withModalCurIso').val(iso);
     $('#withModalIso').text(iso);
     $('#withModalCurPayss').val(iso);
     $('#withModalAvail').text(amount);

     $(".modal__withdraw,.modal__overflow-layer").toggleClass("visible");
 });
 $(".get__bonus").click(function() {
     $(".modal__bonus,.modal__overflow-layer").toggleClass("visible");
 });
 $(".depositNow-action,.dtc__button-row button,.calc__deposit-btn").click(function() {
     $(".modal__deposit,.modal__overflow-layer").toggleClass("visible");
 });
 $(".header__mobileButton").click(function() {
     $(this).toggleClass('check');
     $(".header__navigation,.site__navigation").toggleClass("visible");
 });

 $(".chooseCoin__button").click(function() {
     $(".chooseCoin__button").removeClass("check");
     $(this).toggleClass('check');
 });
 $('.calc__item-line-row.drop__down').click(function() {
     var isVisible = $(this).hasClass('visible');

     $('.calc__item-line-row.drop__down').removeClass('visible');

     if (!isVisible) {
         $(this).addClass('visible');
     }
 });
 $('.calc__drop-list.you__give .calc__drop-item').click(function() {
     $('.calc__drop-list.you__give .calc__drop-item').removeClass('check');
     $(this).toggleClass('check');
 });
 $('.calc__drop-list.you__get .calc__drop-item').click(function() {
     $('.calc__drop-list.you__get .calc__drop-item').removeClass('check');
     $(this).toggleClass('check');
 });
 $('.drop__down.invest').click(function() {
     $('.drop__down.invest').toggleClass('visible');
 });
 $('.user__cabinet-nav .mobile__button').click(function() {
     $(this).toggleClass('check');
     $('.cabinet__navigation').toggleClass('visible');
 });



 $(document).ready(function() {
     $('.mnRange').on('click', function() {
         var $clickedButton = $(this);

         // Удалить класс "check" у всех кнопок внутри блока .mnRange__buttons
         $clickedButton.siblings('.mnRange').removeClass('check');

         // Добавить класс "check" только к нажатой кнопке
         $clickedButton.addClass('check');
     });
 });
 $('.deposit__GroupList li button').click(function() {
     $('.deposit__GroupList li button').removeClass('check');
     $(this).toggleClass('check');
 });
 $('.mobButton,.cabinetNavButton').click(function() {
     $('body').toggleClass('ViewMenu');
 });

 $(document).ready(function() {
     // Проверяем ширину экрана при загрузке страницы
     if ($(window).width() < 860) {
         // Выбираем блок .msCf__animation
         var $animationBlock = $('.msCf__animation');

         // Перемещаем его после <h1> в блоке .msCf__Column
         $('.msCf__Column > h1').after($animationBlock);
     }

     // Добавляем обработчик изменения размера окна
     $(window).resize(function() {
         // Проверяем ширину экрана при изменении размера окна
         if ($(window).width() < 860) {
             // Выбираем блок .msCf__animation
             var $animationBlock = $('.msCf__animation');

             // Перемещаем его после <h1> в блоке .msCf__Column
             $('.msCf__Column > h1').after($animationBlock);
         } else {
             // Если ширина экрана больше или равна 860px,
             // вернем блок .msCf__animation на его исходное место
             $('.msCf__OriginalLocation').append($animationBlock);
         }
     });
 });



 // Проверяем, есть ли выбор пользователя в локальном хранилище
 if (localStorage.getItem('style') === 'dark') {
     $('body').addClass('dark');
 }

 // Обработчик события щелчка по кнопке
 $('.changeStyle').click(function() {
     // Проверяем, есть ли класс dark на body
     if ($('body').hasClass('dark')) {
         // Если есть, убираем класс и сохраняем выбор пользователя
         $('body').removeClass('dark');
         localStorage.setItem('style', 'light');
     } else {
         // Если нет, добавляем класс и сохраняем выбор пользователя
         $('body').addClass('dark');
         localStorage.setItem('style', 'dark');
     }
 });

 // feather.replace();


 //   $('#calcInvestCurrency').dropdown({
 //     onChange: function (val) {
 //         calculator();
 //     }
 //   });


 // $('#calcMiningCurrency').dropdown({
 //     onChange: function (val) {
 //         calculator();
 //     }
 // });
 // $('#orderCurrency').dropdown({
 //     onChange: function (val) {
 //         $('.order_balance').css('display', 'none');
 //         $('.order_balance_'+val).css('display', 'flex');


 //         buyCalculator();
 //     }
 // });



 $(function() {

     $('#heroEmail').on('keyup', function() {
         const text = $(this).val();
         console.log(text);
         $('#regEmailInput').val(text);
     });

     $('#heroRegButton').on('click', function(e) {
         e.preventDefault();

         $('.modal__overflow-layer').toggleClass('visible');
         $('.modal__sign-up').addClass('visible');
     });

     $('#calc_days, #calc_amount').on('keyup', function() {
         calculator();
     });

     $('#formSupport').on('submit', function(event) {
         event.preventDefault();

         let ret = $('#return_support');
         ret.hide();
         ret.html('');
         ret.removeClass('alert-error alert-success');

         $.ajax({
             url: $(this).attr('action'),
             data: $(this).serialize(),
             type: 'POST',
             success: function(data) {
                 ret.addClass(data.class);
                 ret.html(data.message);
                 ret.show();

                 setTimeout(function() {
                     document.location.reload();
                 }, 2000);
             },
             error: function(data) {
                 console.log(data);
             }
         });
     });

     $('.coma_dot_valid').on('keyup', function() {
         let val = $(this).val();
         let newVal = val.replace(/,/g, '.');
         $(this).val(newVal);
     });



     $('#register-form').on('submit', function(e) {
         e.preventDefault();

         $('.error-validation').hide();
         $('.error-validation').html('');

         $.ajax({
             url: $(this).attr('action'),
             data: $(this).serialize(),
             type: 'POST',
             success: function(data) {
                 location.href = '/mining'
             },
             error: function(data) {
                 Object.entries(data.responseJSON.errors).forEach(([key, value]) => {

                     $('#regError_' + key).show();
                     $('#regError_' + key).html(value);
                 });
             }
         });
     });

     $('#login-form').on('submit', function(e) {
         e.preventDefault();

         $('.error-validation').hide();
         $('.error-validation').html('');

         $.ajax({
             url: $(this).attr('action'),
             data: $(this).serialize(),
             type: 'POST',
             success: function(data) {
                 location.href = '/mining'
             },
             error: function(data) {
                 Object.entries(data.responseJSON.errors).forEach(([key, value]) => {

                     $('#loginError_' + key).show();
                     $('#loginError_' + key).html(value);
                 });
             }
         });
     });

     $('.exchange_button').click(function(e) {
         e.preventDefault();

         let conf = confirm("Are you sure that you want to reinvest?");

         if (conf == true) {
             let currency = $(this).data('currency');

             $.ajax({
                 url: '/ajax/deposit/exchangeCurrency',
                 data: {
                     currency: currency
                 },
                 type: 'POST',
                 headers: {
                     'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                 },
                 success: function(data) {
                     if (data.status == 'success') {
                         $('#confirm_true').css('display', 'flex');
                         $('#confirm_true .conf_text').html(data.message);

                         setTimeout(function() {
                             $('#confirm_true').css('display', 'none');
                             $('#confirm_true .conf_text').html('');
                             document.location.reload();
                         }, 2000);
                     } else {
                         $('#confirm_false').css('display', 'flex');
                         $('#confirm_false .conf_text').html(data.message);

                         setTimeout(function() {
                             $('#confirm_false').css('display', 'none');
                             $('#confirm_false .conf_text').html('');
                         }, 2000);
                     }
                 }
             });
         }

     });

     setInterval(function() {
         counter();
     }, 1000);

     $('.dep_cur_itm').on('click', function() {
         const currency = $(this).data('currency');
         const name = $(this).data('curname');

         $('.deposit_item').data('currency', currency);
         $('#depModalCurName').text(name);
     });

     $('.deposit_item').on('click', function() {
         var currency = $(this).data('currency');

         $('#depInputAddress').val('');
         $('#depInputTag').val('');

         if (currency == 'xrp') {
             $('.tag_block').show();
         } else {
             $('.tag_block').hide();
         }

         $('.modal__overflow-layer').addClass('visible');
         $('.modal__deposit').addClass('visible');

         $.ajax({
             url: '/ajax/deposit/createDepositAddress',
             data: {
                 'currency': currency,
                 '_token': $('meta[name="csrf-token"]').attr('content'),
             },
             type: 'POST',
             success: function(data) {
                 $('#depInputAddress').val(data.address);
                 $('#depInputTag').val(data.tag);
             }
         });

     });

     $('.order_tab').on('click', function() {
         let type = $(this).data('type');

         $('.buy_type').val(type);

         buyCalculator();
     });

     $('#order_amount').on('keyup', function() {
         buyCalculator();
     });

     $('#order_form').submit(function(e) {
         e.preventDefault();

         let type = $(this).find('.buy_type');

         let returnBlock = $('.order_return');
         returnBlock.html('');
         returnBlock.hide();
         returnBlock.removeClass('alert-error alert-success');

         $.ajax({
             url: '/ajax/ajaxOrder',
             data: $(this).serialize(),
             type: 'POST',
             success: function(data) {
                 returnBlock.addClass(data.class);
                 returnBlock.html(data.message);
                 returnBlock.show();

                 if (data.status != 'error') {
                     setTimeout(function() {
                         document.location.reload();
                     }, 2000);
                 }
             }
         });
     });

     $('.withdraw_form').submit(function(event) {
         event.preventDefault();

         let returnBlock = $(this).find('.wihdraw_return');
         returnBlock.html('');
         returnBlock.hide();
         returnBlock.removeClass('alert-error alert-success');

         let withBut = $(this).find('.submit_withdraw');
         withBut.prop("disabled", true);

         $.ajax({
             url: $(this).attr('action'),
             data: $(this).serialize(),
             type: 'POST',
             success: function(data) {

                 if (data.status == 'error') {
                     returnBlock.addClass(data.class);
                     returnBlock.html(data.message);
                     returnBlock.show();
                 } else {
                     returnBlock.addClass(data.class);
                     returnBlock.html(data.message);
                     returnBlock.show();

                     setTimeout(function() {
                         location.reload();
                     }, 2000);
                 }



                 withBut.prop("disabled", false);
             }
         });
     });

     $('#accountChangePassword').on('submit', function(event) {
         event.preventDefault();
         let returnBlock = $('#accountChangePassword_return');
         returnBlock.hide();
         returnBlock.html('');
         returnBlock.removeClass('alert-error alert-success');

         $.ajax({
             url: $(this).attr('action'),
             data: $(this).serialize(),
             type: 'POST',
             success: function(data) {
                 returnBlock.addClass(data.class);
                 returnBlock.html(data.message);
                 returnBlock.show();
             },
             error: function(data) {
                 console.log(data);
             }
         });
     });

     $('#youtubeForm').on('submit', function(event) {
         event.preventDefault();

         let returnBlock = $('#youtubeReturn');
         returnBlock.hide();
         returnBlock.html('');
         returnBlock.removeClass('alert-error alert-success');

         $.ajax({
             url: $(this).attr('action'),
             data: $(this).serialize(),
             type: 'POST',
             success: function(data) {
                 returnBlock.addClass(data.class);
                 returnBlock.html(data.message);
                 returnBlock.show();
             },
             error: function(data) {
                 console.log(data);
             }
         });
     });
 });

 function counter() {
     $('.pay_in_second').each(function(index) {
         if ($(this).val() > 0) {
             let numb = $(this).closest('.mn__invest-inner').find(".mining_numb");
             let newCount = parseFloat($(numb).text()) + parseFloat($(this).val());
             $(numb).text(newCount.toFixed(12));

         }
     });
 }

 function instokPercent() {
     let count = 0;
     $('.range_mining').each(function(index) {
         count = parseInt(count) + parseInt($(this).val());
     });
     $('#hs_used').html(count);
     $('#hs_instock').html(100 - count);

 }

 function calculator() {
     $.ajax({
         url: '/ajax/calculator/calculate',
         type: "POST",
         //dataType: 'json',
         data: $('#calculatorForm').serialize(),
         headers: {
             'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
         },
         success: function(data) {
             $('.calc_result').html(data);
         }
     });
 }

 function copy(id, button) {
     let copyText = document.querySelector(id);
     copyText.select();
     document.execCommand("copy");

     console.log(button);
     button.innerText = 'Copied';
 }

 function buyCalculator() {
     $.ajax({
         url: '/ajax/calcBuy',
         headers: {
             'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
         },
         data: $('#order_form').serialize(),
         dataType: 'json',
         type: 'POST',
         success: function(data) {
             $('#buy_purchScrypt').html(parseFloat(data.scrypt.purchased).toFixed(2));
             $('#buy_totalScrypt').html(parseFloat(data.scrypt.total).toFixed(2));
             $('#buy_percentScrypt').html(parseFloat(data.scrypt.percent).toFixed(1));

             $('#buy_purchSha256').html(parseFloat(data.sha256.purchased).toFixed(2));
             $('#buy_totalSha256').html(parseFloat(data.sha256.total).toFixed(2));
             $('#buy_percentSha256').html(parseFloat(data.sha256.percent).toFixed(1));

             $('#buy_purchEthash').html(parseFloat(data.ethash.purchased).toFixed(2));
             $('#buy_totalEthash').html(parseFloat(data.ethash.total).toFixed(2));
             $('#buy_percentEthash').html(parseFloat(data.ethash.percent).toFixed(1));

         }
     });
 }

 function rangeMining(rangeInput, value, currency) {
     const currencies = ['ltc', 'doge', 'bnb', 'btc', 'bch', 'dash', 'trx', 'xrp', 'eth'];

     let countAll = 0;
     $('.range_mining').each(function(index) {
         let idF = $(rangeInput).attr('id');
         let idS = $(this).attr('id');

         if (idF != idS) {
             countAll = parseInt(countAll) + parseInt($(this).val());
         }
     });

     if ((parseInt($(rangeInput).val()) + parseInt(countAll)) > 100) {
         $(rangeInput).val(100 - countAll).change();
     }

     if (value > 0) {
         $(rangeInput).closest('.mining__invest-body').addClass('select');
     } else {
         $(rangeInput).closest('.mining__invest-body').removeClass('select');
     }

     instokPercent();

     let ajaxData = {
         '_token': $('meta[name="csrf-token"]').attr('content'),
     };

     currencies.forEach(function(currency) {
         ajaxData[currency] = parseInt($('input.range_mining[data-currency="' + currency + '"]').val());
     });

     //console.log(ajaxData);

     $.ajax({
         url: '/ajax/mining/saveMining',
         data: ajaxData,
         type: 'POST',
         success: function(data) {
             if (data.status == 'success') {
                 $('.modal__overflow-layer').addClass('visible');
                 $('.modal__success').addClass('visible');
                 $('#successModalText').text('Power settings updated!');
             }

             currencies.forEach(function(currency) {
                 $('#paySecond_' + currency).val(data.mining.payInSecond[currency]);
             });

         }
     });
 };