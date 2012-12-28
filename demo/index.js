$(function() {

    $("#jui_version").html('<strong>' + 'jQuery version: ' + '</strong>' + $().jquery
        + ' - ' + '<strong>' + 'jQuery-ui version: ' + '</strong>' + $.ui.version);


    $("#ui-theme-switcher").jui_theme_switch({

        stylesheet_link_id: "ui-theme",
        datasource_url: '../json_data/dist/default.json',

        containerClass: "container1",
        labelClass: "list1_label",
        listClass: "list1"
    });

    $("#dialog").dialog({autoOpen: false});
    $("#button").button();
    $("#button").click(function() {
        console.log('click...');
        $("#dialog").dialog("open");
    });
    $("#tabs").tabs();
    $("#datepicker").datepicker();
    $("#slider").slider();
    $("#spinner").spinner();
    $("#autocomplete").autocomplete();


});


