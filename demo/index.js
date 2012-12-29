$(function() {

    $("#jui_version").html('<strong>' + 'jQuery version: ' + '</strong>' + $().jquery
        + ' - ' + '<strong>' + 'jQuery-ui version: ' + '</strong>' + $.ui.version);


    var elem_switcher = $("#ui-theme-switcher");

    // jui_theme_switch
    elem_switcher.jui_theme_switch({
        stylesheet_link_id: "ui-theme",
        datasource_url: '../json_data/dist/demo-all.json',
        project_url: "/dev/jui_theme_switch"
    });


    // demo widgets
    $("#dialog").dialog({autoOpen: false});
    $("#button")
        .button()
        .click(function() {
            $("#dialog").dialog("open");
        });
    $("#tabs").tabs();
    $("#datepicker").datepicker();
    $("#slider").slider();
    $("#spinner").spinner();
    $("#autocomplete").autocomplete();


    $("#show_all").click(function() {
        elem_switcher.jui_theme_switch({
            datasource_url: '../json_data/dist/demo-all.json',
            use_groups: "yes",
            onDisplay: function() {
                var theme = elem_switcher.jui_theme_switch("getTheme");
                var project_url = elem_switcher.jui_theme_switch("getOption", "project_url");
                $("#ui-theme").attr("href", get_theme_url(theme,project_url));
            }
        });
    });


    $("#show_selected").click(function() {
        elem_switcher.jui_theme_switch({
            datasource_url: '../json_data/dist/demo-selected.json',
            use_groups: "no",
            onDisplay: function() {
                var theme = elem_switcher.jui_theme_switch("getTheme");
                var project_url = elem_switcher.jui_theme_switch("getOption", "project_url");
                $("#ui-theme").attr("href", get_theme_url(theme,project_url));
            }
        });

    });


    $("#get_selected").click(function() {
        alert(JSON.stringify(elem_switcher.jui_theme_switch("getTheme"), null, '    '));
    });

});

function get_theme_url(theme, project_url) {
    var theme_url = theme["theme_url"],
        locally_hosted = (theme["locally_hosted"] == "yes" ? true : false);
    if(!locally_hosted) {
        project_url = '';
    }
    return project_url + theme_url;
}
