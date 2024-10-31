import './src/scss/styles.scss'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import * as bootstrap from 'bootstrap'
import $ from 'jquery'
import SnedPostMessage from './src/js//PostMessage'

const app = document.getElementById("app")
$("#exploded").on("click", function() {
    $(this).toggleClass("active")
    let id = $(this).attr("id")
    let hasClass = $(this).hasClass("active")
    SnedPostMessage(app, `${id}:${hasClass}`)
})
$("#hideCrate").on("click", function() {
    $(this).toggleClass("active")
    let id = $(this).attr("id")
    let hasClass = $(this).hasClass("active")
    SnedPostMessage(app, `${id}:${hasClass}`)
})
$("#nav-create-pallet-tab").on("click", function() {
    SnedPostMessage(app, "create-pallet")
})
$("#nav-pallet-only-tab").on("click", function() {
    SnedPostMessage(app, "pallet-only")
})

$(".size-event").on("input", function() {
    let id = $(this).attr("id")
    let value = parseInt($(this).val())

    if (id == "size-a-1") {
        if (value > 192) {
            $(this).val(192)
            value = $(this).val()
        } else if (value < 0) {
            $(this).val(0)
            value = $(this).val()
        }
    } else if (id == "size-a-2") {
        if (value > 90) {
            $(this).val(90)
            value = $(this).val()
        } else if (value < 0) {
            $(this).val(0)
            value = $(this).val()
        }
    } else if (id == "size-a-3") {
        if (value > 90) {
            $(this).val(90)
            value = $(this).val()
        } else if (value < 0) {
            $(this).val(0)
            value = $(this).val()
        }
    }

    if (id == "size-b-1") {
        if (value > 192) {
            $(this).val(192)
            value = $(this).val()
        } else if (value < 0) {
            $(this).val(0)
            value = $(this).val()
        }
    } else if (id == "size-b-2") {
        if (value > 90) {
            $(this).val(90)
            value = $(this).val()
        } else if (value < 0) {
            $(this).val(0)
            value = $(this).val()
        }
    }
    SnedPostMessage(app, `${id}:${value}`)
})
$(".pallet-event-a").on("click", function() {
    let id = $(this).attr("id")
    $(".pallet-event-a").removeClass("active border border-1 border-primary")
    $(this).addClass("active border border-1 border-primary")
    SnedPostMessage(app, id)
})
$(".pallet-event-b").on("click", function() {
    let id = $(this).attr("id")
    $(".pallet-event-b").removeClass("active border border-1 border-primary")
    $(this).addClass("active border border-1 border-primary")
    SnedPostMessage(app, id)
})


$(document).ready(function() {
    const limits = {
      'editor-a-1': { min: 0, max: 40 },
      'editor-a-2': { min: 0, max: 10 },
      'editor-a-3': { min: 0, max: 20 },
      'editor-b-1': { min: 0, max: 40 },
      'editor-b-2': { min: 0, max: 10 },
      'editor-b-3': { min: 0, max: 20 }
    };
  
    function updateCounter(inputId, increment) {
      const input = $('#' + inputId);
      let currentValue = parseInt(input.val());
      const min = limits[inputId].min;
      const max = limits[inputId].max;
  
      let newValue = currentValue + increment;
      if (newValue < min) newValue = min;
      if (newValue > max) newValue = max;
      
      input.val(newValue);
      SnedPostMessage(app, `${inputId}:${newValue}`);
    }
  
    function enforceLimits(inputId) {
      const input = $('#' + inputId);
      const min = limits[inputId].min;
      const max = limits[inputId].max;
      let currentValue = parseInt(input.val());
  
      if (currentValue < min) currentValue = min;
      if (currentValue > max) currentValue = max;
  
      input.val(currentValue);
      SnedPostMessage(app, `${inputId}:${currentValue}`);
      
    }
  
    // Event listeners for increment and decrement buttons
    $('#plus-a-1').click(function() { updateCounter('editor-a-1', 1); });
    $('#minus-a-1').click(function() { updateCounter('editor-a-1', -1); });
    $('#plus-a-2').click(function() { updateCounter('editor-a-2', 1); });
    $('#minus-a-2').click(function() { updateCounter('editor-a-2', -1); });
    $('#plus-a-3').click(function() { updateCounter('editor-a-3', 1); });
    $('#minus-a-3').click(function() { updateCounter('editor-a-3', -1); });
  
    $('#plus-b-1').click(function() { updateCounter('editor-b-1', 1); });
    $('#minus-b-1').click(function() { updateCounter('editor-b-1', -1); });
    $('#plus-b-2').click(function() { updateCounter('editor-b-2', 1); });
    $('#minus-b-2').click(function() { updateCounter('editor-b-2', -1); });
    $('#plus-b-3').click(function() { updateCounter('editor-b-3', 1); });
    $('#minus-b-3').click(function() { updateCounter('editor-b-3', -1); });
  
    // Event listener to enforce limits only on .editor-counter elements
    $('.editor-counter').on('input', function() {
      enforceLimits(this.id);
    });
  });
  

  $(".form-check-input").change(function() {
    let id = $(this).attr("id")
    let isChecked = $(this).is(":checked")
    SnedPostMessage(app, `${id}:${isChecked}`);
  });

$(".logo").hide()
$(".config-detail-container").hide()
$(".config-container").hide()

window.addEventListener('message', (event) => {
    if (event.data == 'app:ready') {
        // Update the 3D model based on received data
        $(".logo").fadeIn("slow")
        $(".config-detail-container").fadeIn("slow")
        $(".config-container").fadeIn("slow")
    }
});