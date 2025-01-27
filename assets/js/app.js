$(document).ready(function() {
    $(".burger").on("click", function() {
        $(".overlay").show();
        $(".header__menu").addClass("open");
        $("html, body").addClass("ovh");
    });
    $(".burger__close").on("click", function() {
        $(".overlay").hide();
        $(".header__menu").removeClass("open");
        $("html, body").removeClass("ovh");
    });
    $(".overlay").on("click", function() {
        $(".overlay").hide();
        $(".header__menu").removeClass("open");
        $("html, body").removeClass("ovh");
    });

    


    $(".pagination__item a").on("click", function(e) {
        e.preventDefault();
        $(".pagination__item").removeClass("active");
        $(this).parent().addClass("active");
    })



    $('#file-input').on('change', function () {
        var fileName = $(this).val().split('\\').pop(); 
        $(this).siblings('.attached-filename').text(fileName);
        $(this).siblings('.attached-filename').show();
      });


      $(".vacantes__item").on("click", function() {
        let logo = $(this).find(".vacantes__logo img").attr("src");
        let vacansy = $(this).find(".vacansy").text();
        let is_local = $(this).find(".is_local").text();
        console.log(is_local);
        
        let is_remote = is_local.replace(/[()]/g, '').trim();

        $(".empleosPage").hide();
        $(".empleosInnerDescription").show();

        $("#profession").text(vacansy);
        $(".empleosInner__info-item img").attr("src", logo);
        $("#is_remote").text(is_remote);
      })

      $("#step_1").on("click", function() {
        $(".empleosPage").show();
        $(".empleosInnerDescription").hide();
      })
      $("#step_2").on("click", function() {
        $(".empleosInnerDescription").show();
        $(".empleosInnerForm").hide();
      })

      $("#blog_back").on("click", function() {
        window.history.back();
      })


      $("#to_next").on("click", function() {
        $(".empleosInnerDescription").hide();
        $(".empleosInnerForm").show();
      })

      $("#form-submit").on("click", function(e) {
        e.preventDefault();
        let isValid = true;
        
        $('.empleosInner__form-inputs .form__input').each(function () {
        const value = $(this).val().trim();

        // Если поле пустое
        if (value === '') {
            isValid = false;
            $(this).addClass('error'); // Добавляем класс для ошибки
        } else {
            $(this).removeClass('error'); // Убираем класс, если поле заполнено
        }

        // Дополнительная проверка для email
        if ($(this).attr('name') === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
            isValid = false;
            $(this).addClass('error');
            } else {
            $(this).removeClass('error');
            }
        }

        // Дополнительная проверка для телефона
        if ($(this).attr('name') === 'tel') {
            const telRegex = /^[0-9\+\-\(\)\s]+$/; // Только цифры и символы телефона
            if (!telRegex.test(value)) {
            isValid = false;
            $(this).addClass('error');
            } else {
            $(this).removeClass('error');
            }
        }
        });

        // Валидация файла
        const fileInput = $('#file-input');
        const fileLabel = $('.custom-file-label');
        const fileValue = fileInput.val(); // Получаем значение поля файла

        if (!fileValue) {
        isValid = false;
        fileLabel.addClass('error');
        } else {
        const allowedExtensions = ['pdf', 'doc', 'docx', 'jpg', 'png']; // Допустимые расширения
        const fileExtension = fileValue.split('.').pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            isValid = false;
            fileLabel.addClass('error');
            alert('Недопустимый формат файла. Разрешены: ' + allowedExtensions.join(', '));
        } else {
            fileLabel.removeClass('error');
        }
        }

        if (isValid) {
        console.log('Форма успешно заполнена!');
        // $('form').submit();
        } 
    })
});